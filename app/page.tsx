'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-hero min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="font-display text-xl text-white">FiveMinuteEdge</span>
        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="btn-secondary text-sm py-2 px-4">Sign in</Link>
          <Link href="/auth/signup" className="btn-primary text-sm py-2 px-4">Start free trial</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-1.5 mb-8 text-sm text-blue-300">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow"></span>
          Built for mid-level SaaS AEs who've plateaued
        </div>

        <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
          Five minutes a day.<br />
          <span className="italic text-blue-300">An edge that lasts a career.</span>
        </h1>

        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Most reps lose deals because prospects don't see the value — not because the product isn't good enough.
          FiveMinuteEdge teaches you to sell outcomes, quantify pain, and close without discounting.
          One lesson a day. Built by a top performer who's lived every deal you're in.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link href="/auth/signup" className="btn-primary text-base px-8 py-3.5">
            Start your free 7-day trial
          </Link>
          <Link href="#how-it-works" className="btn-secondary text-base px-8 py-3.5">
            See how it works
          </Link>
        </div>
        <p className="text-sm text-blue-400">No credit card required to start. $19/month after trial.</p>
      </section>

      {/* Social proof strip */}
      <div className="border-y border-white/8 py-5 bg-white/2">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-blue-300">
          <span>✓ 60 lessons across 12 weeks</span>
          <span>✓ Built on MEDDIC framework</span>
          <span>✓ 5 minutes per day</span>
          <span>✓ Streak tracking</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl text-white text-center mb-3">How it works</h2>
        <p className="text-blue-300 text-center mb-12">Every lesson follows the same four-part format.</p>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { num: '01', label: 'Story', desc: 'A real deal situation — the kind you recognize immediately because you\'ve been in it.' },
            { num: '02', label: 'Insight', desc: 'The lesson extracted from that story. What top performers do differently in that moment.' },
            { num: '03', label: 'Action', desc: 'One specific thing to do today. Not tomorrow. In your next call or your next deal review.' },
            { num: '04', label: 'Quiz', desc: 'One question to lock in the concept. Spaced repetition that actually sticks.' },
          ].map(step => (
            <div key={step.num} className="bg-card rounded-xl p-5">
              <div className="font-mono text-blue-400 text-xs mb-3">{step.num}</div>
              <div className="font-display text-lg text-white mb-2">{step.label}</div>
              <p className="text-sm text-blue-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum preview */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-display text-3xl text-white text-center mb-3">The curriculum</h2>
        <p className="text-blue-300 text-center mb-12">Six modules. Twelve weeks. One transformation.</p>

        <div className="space-y-3">
          {[
            { num: 1, title: 'The Value Mindset', weeks: 'Weeks 1–2', desc: 'Why reps lose on value · Feature vs outcome selling · Speaking the language of business', locked: false },
            { num: 2, title: 'Uncovering Real Pain', weeks: 'Weeks 3–4', desc: 'Discovery that goes deeper · Moving from symptoms to root cause', locked: true },
            { num: 3, title: 'Quantifying Value', weeks: 'Weeks 5–6', desc: 'Building the business case · Making ROI land with a CFO', locked: true },
            { num: 4, title: 'Navigating the Buying Committee', weeks: 'Weeks 7–8', desc: 'Economic buyer access · Champion building · Multi-threading', locked: true },
            { num: 5, title: 'Controlling the Process', weeks: 'Weeks 9–10', desc: 'Decision criteria · Decision process · Staying ahead of procurement', locked: true },
            { num: 6, title: 'Closing Like a Top Performer', weeks: 'Weeks 11–12', desc: 'Negotiation without discounting · Handling late-stage objections', locked: true },
          ].map(mod => (
            <div key={mod.num} className={`bg-card rounded-xl p-5 flex items-center justify-between gap-4 ${mod.locked ? 'opacity-60' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-blue-400 w-6">{mod.num}</div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white font-medium">{mod.title}</span>
                    {!mod.locked && <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Available now</span>}
                  </div>
                  <p className="text-sm text-blue-300">{mod.desc}</p>
                </div>
              </div>
              <div className="text-xs text-blue-400 font-mono whitespace-nowrap">{mod.weeks}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-xl mx-auto px-6 pb-24 text-center">
        <h2 className="font-display text-3xl text-white mb-3">Simple pricing</h2>
        <p className="text-blue-300 mb-10">One plan. Everything included.</p>

        <div className="bg-card rounded-2xl p-8 border border-blue-500/20">
          <div className="font-display text-5xl text-white mb-1">$19</div>
          <div className="text-blue-300 mb-6">per month · cancel anytime</div>

          <ul className="text-left space-y-3 mb-8 text-sm text-blue-200">
            {[
              'Full access to all 60 lessons',
              'Daily lesson unlocked automatically',
              'Streak tracking and progress dashboard',
              'Quiz-based retention system',
              'New modules added regularly',
              '7-day free trial, no card required',
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> {f}
              </li>
            ))}
          </ul>

          <Link href="/auth/signup" className="btn-primary w-full block text-center text-base py-3.5">
            Start free trial
          </Link>
          <p className="text-xs text-blue-400 mt-3">7 days free. $19/month after. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-400">
          <span className="font-display">FiveMinuteEdge</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-blue-200 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-200 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
