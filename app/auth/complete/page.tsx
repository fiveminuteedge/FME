'use client'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function CompletePage() {
  const [status, setStatus] = useState('Setting up your account...')
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()

  useEffect(() => {
    const setup = async () => {
      const email = sessionStorage.getItem('signup_email')
      const password = sessionStorage.getItem('signup_password')

      if (!email || !password) {
        setStatus('Something went wrong. Please sign up again.')
        setTimeout(() => router.push('/auth/signup'), 3000)
        return
      }

      // Create Supabase account
      const { error } = await supabase.auth.signUp({ email, password })

      if (error && error.message !== 'User already registered') {
        setStatus('Account error. Please contact support.')
        return
      }

      // Sign them in
      await supabase.auth.signInWithPassword({ email, password })

      // Clean up
      sessionStorage.removeItem('signup_email')
      sessionStorage.removeItem('signup_password')

      setStatus('Account created! Taking you to your dashboard...')
      setTimeout(() => router.push('/dashboard'), 1500)
    }

    setup()
  }, [])

  return (
    <main className="bg-hero min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-blue-300 text-lg animate-pulse">{status}</div>
      </div>
    </main>
  )
}
