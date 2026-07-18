'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { lessons, getUnlockedLessons } from '@/lib/lessons'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [progress, setProgress] = useState<number[]>([])
  const [streak, setStreak] = useState(0)
  const [unlockedCount, setUnlockedCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(true)
  const [redirecting, setRedirecting] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth/login'); return }
      setUser(user)

      // Check subscription status
      const { data: sub } = await supabase
        .from('subscriptions')
        .select('status, trial_end')
        .eq('email', user.email)
        .single()

      if (sub) {
        const trialActive = sub.status === 'trialing' && sub.trial_end && new Date(sub.trial_end) > new Date()
        const subActive = sub.status === 'active'
        setHasAccess(trialActive || subActive)
      } else {
        setHasAccess(false)
      }

      // Get progress
      const { data: prog } = await supabase
        .from('progress')
        .select('lesson_id')
        .eq('user_id', user.id)
      const completed = prog?.map((p: any) => p.lesson_id) || []
      setProgress(completed)

      // Calculate streak
      const { data: streakData } = await supabase
        .from('streaks')
        .select('current_streak')
        .eq('user_id', user.id)
        .single()
      setStreak(streakData?.current_streak || 0)

      // Unlocked lessons based on join date
      const unlocked = getUnlockedLessons(user.created_at)
      setUnlockedCount(unlocked)

      setLoading(false)
    }
    load()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const resubscribe = async () => {
    setRedirecting(true)
    const res = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user?.email })
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      setRedirecting(false)
    }
  }

  if (loading) return (
    <div className="bg-hero min-h-screen flex items-center justify-center">
      <div className="text-blue-300 text-sm animate-pulse">Loading your dashboard...</div>
    </div>
  )

  if (!hasAccess) return (
    <div className="bg-hero min-h-screen flex items-center justify-center px-6">
      <div className="bg-card rounded-2xl p-8 max-w-md text-center">
        <div className="text-3xl mb-4">🔒</div>
        <h2 className="font-display text-2xl text-white mb-3">Your trial has ended</h2>
        <p className="text-sm text-blue-300 mb-6">Subscribe to keep your streak going and unlock all 60 lessons.</p>
        <button onClick={resubscribe} disabled={redirecting} className="btn-primary inline-block disabled:opacity-50">
          {redirecting ? 'Redirecting...' : 'Subscribe now →'}
        </button>
      </div>
    </div>
  )

  const completedCount = progress.length
  const nextLesson = lessons.find(l => !progress.includes(l.id) && l.id <= unlockedCount)

  return (
    <main className="bg-hero min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto border-b border-white/6">
        <span className="font-display text-lg text-white">FiveMinuteEdge</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-blue-300">{user?.email}</span>
          <button onClick={signOut} className="text-sm text-blue-400 hover:text-blue-200 transition-colors">Sign out</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-card rounded-xl p-5 text-center">
            <div className="text-3xl mb-1">{streak > 0 ? '🔥' : '○'}</div>
            <div className="font-display text-2xl text-white">{streak}</div>
            <div className="text-xs text-blue-400 mt-0.5">day streak</div>
          </div>
          <div className="bg-card rounded-xl p-5 text-center">
            <div className="font-display text-2xl text-white">{completedCount}</div>
            <div className="text-xs text-blue-400 mt-0.5">lessons done</div>
          </div>
          <div className="bg-card rounded-xl p-5 text-center">
            <div className="font-display text-2xl text-white">{Math.round((completedCount / lessons.length) * 100)}%</div>
            <div className="text-xs text-blue-400 mt-0.5">complete</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-blue-400 mb-2">
            <span>FiveMinuteEdge — 60 Lessons across 6 Modules</span>
            <span>{completedCount} / {lessons.length} lessons</span>
          </div>
          <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 progress-fill rounded-full"
              style={{ width: `${(completedCount / lessons.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Next lesson CTA */}
        {nextLesson && (
          <div className="bg-card rounded-2xl p-6 border border-blue-500/20 mb-10">
            <div className="text-xs text-blue-400 font-mono mb-2">Up next · Day {nextLesson.id}</div>
            <h2 className="font-display text-2xl text-white mb-1">{nextLesson.title}</h2>
            <p className="text-sm text-blue-300 mb-5">{nextLesson.subtitle}</p>
            <Link href={`/lesson/${nextLesson.id}`} className="btn-primary inline-block">
              Start today's lesson →
            </Link>
          </div>
        )}

        {!nextLesson && completedCount === lessons.length && (
          <div className="bg-card rounded-2xl p-6 border border-green-500/20 mb-10 text-center">
            <div className="text-2xl mb-2">🎉</div>
            <h2 className="font-display text-2xl text-white mb-1">Module 1 Complete</h2>
            <p className="text-sm text-blue-300">Module 2 is coming soon. You'll be notified when it drops.</p>
          </div>
        )}

        {/* All lessons grid */}
        <h3 className="text-sm text-blue-400 font-mono mb-4">ALL LESSONS</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {lessons.map(lesson => {
            const done = progress.includes(lesson.id)
            const unlocked = lesson.id <= unlockedCount
            const isCurrent = lesson.id === nextLesson?.id

            return (
              <div
                key={lesson.id}
                className={`bg-card rounded-xl p-4 transition-all ${
                  unlocked ? 'bg-card-hover cursor-pointer' : 'opacity-40 cursor-not-allowed'
                } ${isCurrent ? 'border border-blue-500/30' : ''}`}
              >
                {unlocked ? (
                  <Link href={`/lesson/${lesson.id}`} className="block">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="text-xs text-blue-400 font-mono mb-1">Day {lesson.id}</div>
                        <div className="text-sm font-medium text-white leading-snug">{lesson.title}</div>
                      </div>
                      <div className="flex-shrink-0 mt-0.5">
                        {done ? (
                          <span className="text-green-400 text-base">✓</span>
                        ) : isCurrent ? (
                          <span className="text-blue-400 text-xs">Today</span>
                        ) : (
                          <span className="text-blue-500/40 text-base">○</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-xs text-blue-400 font-mono mb-1">Day {lesson.id}</div>
                      <div className="text-sm font-medium text-white/50 leading-snug">{lesson.title}</div>
                    </div>
                    <span className="text-blue-500/30 text-base flex-shrink-0">🔒</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}