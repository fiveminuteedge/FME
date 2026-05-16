'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getLessonByDay, lessons } from '@/lib/lessons'

type Stage = 'story' | 'insight' | 'action' | 'quiz' | 'complete'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const lessonId = parseInt(params.id as string)
  const lesson = getLessonByDay(lessonId)
  const supabase = createClient()

  const [stage, setStage] = useState<Stage>('story')
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [completed, setCompleted] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push('/auth/login')
      else setUser(user)
    })
  }, [])

  if (!lesson) return (
    <div className="bg-hero min-h-screen flex items-center justify-center">
      <div className="text-blue-300">Lesson not found.</div>
    </div>
  )

  const stages: Stage[] = ['story', 'insight', 'action', 'quiz']
  const stageIndex = stages.indexOf(stage)
  const progress = stage === 'complete' ? 100 : ((stageIndex) / stages.length) * 100

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setIsCorrect(index === lesson.quiz.correctIndex)
  }

  const markComplete = async () => {
    if (!user || completed) return
    setCompleted(true)

    await supabase.from('progress').upsert({
      user_id: user.id,
      lesson_id: lesson.id,
      completed_at: new Date().toISOString()
    }, { onConflict: 'user_id,lesson_id' })

    // Update streak
    const today = new Date().toISOString().split('T')[0]
    const { data: streakData } = await supabase
      .from('streaks')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (streakData) {
      const lastDate = streakData.last_activity_date
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]

      const newStreak = (lastDate === yesterdayStr || lastDate === today)
        ? (lastDate === today ? streakData.current_streak : streakData.current_streak + 1)
        : 1

      await supabase.from('streaks').update({
        current_streak: newStreak,
        last_activity_date: today,
        longest_streak: Math.max(newStreak, streakData.longest_streak || 0)
      }).eq('user_id', user.id)
    } else {
      await supabase.from('streaks').insert({
        user_id: user.id,
        current_streak: 1,
        longest_streak: 1,
        last_activity_date: today
      })
    }

    setStage('complete')
  }

  const nextLesson = lessons.find(l => l.id === lessonId + 1)

  return (
    <main className="bg-hero min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto">
        <Link href="/dashboard" className="text-blue-400 hover:text-blue-200 text-sm transition-colors">
          ← Dashboard
        </Link>
        <span className="text-xs text-blue-400 font-mono">Day {lesson.id} · Module {lesson.module}</span>
      </nav>

      {/* Progress bar */}
      <div className="h-0.5 bg-white/6 max-w-2xl mx-auto mx-6">
        <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Stage: Story */}
        {stage === 'story' && (
          <div className="lesson-card">
            <div className="text-xs text-blue-400 font-mono mb-6">STORY</div>
            <h1 className="font-display text-3xl text-white mb-2">{lesson.title}</h1>
            <p className="text-blue-300 mb-8 text-sm">{lesson.subtitle}</p>

            <div className="bg-white/4 border-l-2 border-blue-500/50 rounded-r-xl p-6 mb-8">
              {lesson.story.split('\n\n').map((para, i) => (
                <p key={i} className="text-blue-100 leading-relaxed mb-4 last:mb-0 text-[15px]"
                   dangerouslySetInnerHTML={{ __html: para.replace(/"/g, '\u201C').replace(/"/g, '\u201D') }} />
              ))}
            </div>

            <button onClick={() => setStage('insight')} className="btn-primary">
              Continue to insight →
            </button>
          </div>
        )}

        {/* Stage: Insight */}
        {stage === 'insight' && (
          <div className="lesson-card">
            <div className="text-xs text-blue-400 font-mono mb-6">INSIGHT</div>
            <h2 className="font-display text-2xl text-white mb-6">{lesson.title}</h2>

            <div className="space-y-4 mb-8">
              {lesson.insight.split('\n\n').map((para, i) => (
                <p key={i} className="text-blue-100 leading-relaxed text-[15px]">{para}</p>
              ))}
            </div>

            <div className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-5 mb-8">
              <p className="text-white font-medium mb-1.5">{lesson.rule}</p>
              <p className="text-sm text-blue-300 leading-relaxed">{lesson.ruleSub}</p>
            </div>

            <button onClick={() => setStage('action')} className="btn-primary">
              See today's action →
            </button>
          </div>
        )}

        {/* Stage: Action */}
        {stage === 'action' && (
          <div className="lesson-card">
            <div className="text-xs text-blue-400 font-mono mb-6">YOUR ACTION TODAY</div>
            <h2 className="font-display text-2xl text-white mb-8">Do this before your next call</h2>

            <div className="space-y-4 mb-6">
              {lesson.actions.map((action, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-blue-400 font-mono">{i + 1}</span>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-[15px]">{action}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-blue-400 italic mb-8 pl-11">{lesson.actionNote}</p>

            <button onClick={() => setStage('quiz')} className="btn-primary">
              Lock it in →
            </button>
          </div>
        )}

        {/* Stage: Quiz */}
        {stage === 'quiz' && (
          <div className="lesson-card">
            <div className="text-xs text-blue-400 font-mono mb-6">LOCK IT IN</div>
            <p className="font-display text-xl text-white mb-8 leading-snug">{lesson.quiz.question}</p>

            <div className="space-y-2 mb-6">
              {lesson.quiz.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selectedAnswer !== null}
                  className={`quiz-opt ${
                    selectedAnswer !== null
                      ? i === lesson.quiz.correctIndex
                        ? 'correct'
                        : i === selectedAnswer && !isCorrect
                          ? 'wrong'
                          : ''
                      : ''
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className={`rounded-xl p-4 mb-6 text-sm leading-relaxed ${
                isCorrect
                  ? 'bg-green-500/10 border border-green-500/20 text-green-200'
                  : 'bg-red-500/8 border border-red-500/20 text-red-200'
              }`}>
                {isCorrect ? lesson.quiz.correctFeedback : lesson.quiz.wrongFeedback}
              </div>
            )}

            {selectedAnswer !== null && (
              <button onClick={markComplete} className="btn-primary">
                Complete lesson →
              </button>
            )}
          </div>
        )}

        {/* Stage: Complete */}
        {stage === 'complete' && (
          <div className="lesson-card text-center">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="font-display text-3xl text-white mb-2">Lesson complete</h2>
            <p className="text-blue-300 mb-10">Day {lesson.id} of 60. Come back tomorrow for the next one.</p>

            <div className="bg-card rounded-xl p-5 mb-8 text-left">
              <p className="text-xs text-blue-400 font-mono mb-1">THE RULE</p>
              <p className="text-white text-sm leading-relaxed">{lesson.rule}</p>
            </div>

            <div className="flex flex-col gap-3">
              {nextLesson && (
                <p className="text-sm text-blue-400">
                  Next: <span className="text-blue-200">{nextLesson.title}</span> — unlocks tomorrow
                </p>
              )}
              <Link href="/dashboard" className="btn-primary block">
                Back to dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
