import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const resend = new Resend(process.env.RESEND_API_KEY)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: NextRequest) {
  // Verify this is called by Vercel cron
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get all users
  const { data: users, error } = await supabase.auth.admin.listUsers()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  let sent = 0

  for (const user of users.users) {
    if (!user.email || !user.created_at) continue

    // Calculate what day they're on
    const joined = new Date(user.created_at)
    const now = new Date()
    const daysDiff = Math.floor((now.getTime() - joined.getTime()) / (1000 * 60 * 60 * 24))
    const currentDay = daysDiff + 1

    // Only send for days 1-60
    if (currentDay < 1 || currentDay > 60) continue

    // Check if they've already completed today's lesson
    const { data: progress } = await supabase
      .from('progress')
      .select('lesson_id')
      .eq('user_id', user.id)
      .eq('lesson_id', currentDay)
      .single()

    if (progress) continue // Already completed today

    // Send reminder email
    await resend.emails.send({
      from: 'FiveMinuteEdge <hello@fiveminuteedge.com>',
      to: user.email,
      subject: `Your Day ${currentDay} lesson is ready`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e3a5f;">Day ${currentDay} is ready for you.</h2>
          <p style="color: #4a5568;">Five minutes today keeps your streak alive.</p>
          <a href="https://www.fiveminuteedge.com/dashboard" 
             style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 16px;">
            Start today's lesson →
          </a>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 32px;">
            You're receiving this because you're a FiveMinuteEdge member.<br>
            <a href="https://www.fiveminuteedge.com" style="color: #9ca3af;">Manage your account</a>
          </p>
        </div>
      `
    })

    sent++
  }

  return NextResponse.json({ sent })
}