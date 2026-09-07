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
  const { email } = await req.json()

  // Check if this email has ever had a subscription before
  const { data: existing } = await supabase
    .from('subscriptions')
    .select('email')
    .eq('email', email)
    .maybeSingle()

  const isReturningCustomer = !!existing

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    customer_email: email,
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1
      }
    ],
    subscription_data: isReturningCustomer
      ? {}
      : { trial_period_days: 3 },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/complete?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/signup`
  })

  return NextResponse.json({ url: session.url })
}
