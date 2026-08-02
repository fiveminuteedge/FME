'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`
    })

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  return (
    <main className="bg-hero min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center font-display text-2xl text-gray-900 mb-8">
          FiveMinuteEdge
        </Link>

        <div className="bg-card rounded-2xl p-7">
          {sent ? (
            <>
              <h1 className="font-display text-2xl text-gray-900 mb-2">Check your email</h1>
              <p className="text-sm text-blue-300">
                If an account exists for {email}, we've sent a password reset link. Click it to set a new password.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-2xl text-gray-900 mb-1">Reset your password</h1>
              <p className="text-sm text-blue-300 mb-6">Enter your email and we'll send you a reset link.</p>

              <form onSubmit={handle} className="space-y-4">
                <div>
                  <label className="block text-sm text-blue-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-gray-900 text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/25 rounded-lg p-3 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Sending...' : 'Send reset link'}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-sm text-blue-400 mt-4">
          <Link href="/auth/login" className="text-blue-300 hover:text-gray-900 transition-colors">Back to sign in</Link>
        </p>
      </div>
    </main>
  )
}
