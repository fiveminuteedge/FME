'use client'
import { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

function CompletePageInner() {
  const [status, setStatus] = useState('Setting up your account...')
  const router = useRouter()
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

      const { error } = await supabase.auth.signUp({ email, password })

      if (error && error.message !== 'User already registered') {
        setStatus('Account error. Please contact support.')
        return
      }

      await supabase.auth.signInWithPassword({ email, password })

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

export default function CompletePage() {
  return (
    <Suspense fallback={<main className="bg-hero min-h-screen flex items-center justify-center"><div className="text-blue-300 animate-pulse">Loading...</div></main>}>
      <CompletePageInner />
    </Suspense>
  )
}