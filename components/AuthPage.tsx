'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AuthPage({ mode }: { mode: 'login' | 'signup' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/dashboard` }
      })
      if (error) setError(error.message)
      else setSuccess('Check your email to confirm your account.')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setError(error.message)
      else router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <main className="bg-hero min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center font-display text-2xl text-white mb-8">
          FiveMinuteEdge
        </Link>

        <div className="bg-card rounded-2xl p-7">
          <h1 className="font-display text-2xl text-white mb-1">
            {mode === 'signup' ? 'Start your free trial' : 'Welcome back'}
          </h1>
          <p className="text-sm text-blue-300 mb-6">
            {mode === 'signup' ? '7 days free, no card required.' : 'Sign in to continue your streak.'}
          </p>

          {success ? (
            <div className="bg-green-500/10 border border-green-500/25 rounded-lg p-4 text-green-300 text-sm">
              {success}
            </div>
          ) : (
            <form onSubmit={handle} className="space-y-4">
              <div>
                <label className="block text-sm text-blue-300 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm text-blue-300 mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/25 rounded-lg p-3 text-red-300 text-sm">
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? 'Please wait...' : mode === 'signup' ? 'Create account' : 'Sign in'}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-blue-400 mt-4">
          {mode === 'signup' ? (
            <>Already have an account? <Link href="/auth/login" className="text-blue-300 hover:text-white transition-colors">Sign in</Link></>
          ) : (
            <>New here? <Link href="/auth/signup" className="text-blue-300 hover:text-white transition-colors">Start free trial</Link></>
          )}
        </p>
      </div>
    </main>
  )
}
