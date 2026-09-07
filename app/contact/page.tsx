'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })

    if (res.ok) {
      setSent(true)
    } else {
      setError('Something went wrong. Please try again.')
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
              <h1 className="font-display text-2xl text-gray-900 mb-2">Message sent</h1>
              <p className="text-sm text-blue-300">Thanks for reaching out — we typically respond within 2-3 business days.</p>
            </>
          ) : (
            <>
              <h1 className="font-display text-2xl text-gray-900 mb-1">Contact us</h1>
              <p className="text-sm text-blue-300 mb-6">Questions or issues? Send us a message.</p>

              <form onSubmit={handle} className="space-y-4">
                <div>
                  <label className="block text-sm text-blue-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-gray-900 text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-blue-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-gray-900 text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-blue-300 mb-1.5">Message</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-white/6 border border-white/10 rounded-lg px-3.5 py-2.5 text-gray-900 text-sm placeholder-blue-400/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/25 rounded-lg p-3 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
