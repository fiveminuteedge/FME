'use client'
import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

function ResetPasswordInner() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setTimeout(() => router.push('/dashboard'), 2000)
    }
  }

  return (
    <main className="bg-hero min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center font-display text-2xl text-gray-900 mb-8">
          FiveMinuteEdge
        </Link>

        <div className="bg-card rounded-2xl p-7">
          {success ? (
            <>
              <h1 className="font-display text-2xl text-gray-900 mb-2">Password updated</h1>
              <p className="text-sm text-blue-300">Taking you to your dashboard...</p>
            </>
          ) : (
            <>
              <h1 className="font-display text-2xl text-gray-900 mb-1">Set a new password</h1>
              <p className="text-sm text-blue-300 mb-6">Choose a new password for your account.</p>

              <form onSubmit={handle} className="space-y-4">
                <div>
                  <label className="block text-sm text-blue-300 mb-1.5">New password</label>
                  <input
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-gray-900 text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm text-blue-300 mb-1.5">Confirm new password</label>
                  <input
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-gray-900 text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/25 rounded-lg p-3 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Updating...' : 'Update password'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<main
