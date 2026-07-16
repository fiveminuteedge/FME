import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10'
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (
    event.type === 'checkout.session.completed' ||
    event.type === 'customer.subscription.updated' ||
    event.type === 'customer.subscription.created'
  ) {
    const session = event.data.object as any
    const customerId = session.customer as string

    const subscription = await stripe.subscriptions.retrieve(
      session.subscription || session.id
    )

    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer
    const email = customer.email

    if (email) {
      await supabase.from('subscriptions').upsert({
        email,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscription.id,
        status: subscription.status,
        trial_end: subscription.trial_end
          ? new Date(subscription.trial_end * 1000).toISOString()
          : null,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: 'email' })
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object as Stripe.Subscription
    const customerId = subscription.customer as string
    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer
    const email = customer.email

    if (email) {
      await supabase.from('subscriptions').update({
        status: 'canceled',
        updated_at: new Date().toISOString()
      }).eq('email', email)
    }
  }

  return NextResponse.json({ received: true })
}
