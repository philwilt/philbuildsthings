import { useState } from 'react'

const RISK_FACTORS = [
  'Broad market de-risking could pressure high-beta names regardless of fundamentals',
  'Semiconductor sector rotation out of AI names if macro data disappoints',
  'Resistance at $1,000 psychological level could trigger profit-taking',
]

const FAILURE_MODES = [
  'Macro deterioration causes institutional de-risking across high-beta tech before the thesis plays out',
  'AI capex concerns re-emerge and the sector rotates before the 18-day hold period expires',
  '$1,000 resistance acts as a stronger ceiling than historical precedent suggests',
]

const YakiquantThesisExample = () => {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (i: number) => setActive((prev) => (prev === i ? null : i))

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">A Trade in Action</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            The scanner flags a setup, Claude generates a thesis, then a second agent tears it
            apart. Only what survives gets sized and submitted.
          </p>
        </div>

        {/* Scanner result */}
        <div className="flex items-start gap-3 mb-6">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-700/60 border border-slate-600/60 flex items-center justify-center mt-0.5">
            <svg
              className="w-3.5 h-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-lg rounded-tl-none px-4 py-3">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Scanner Result</p>
            <p className="text-slate-200 text-sm font-mono">
              <span className="text-sky-300 font-bold">NVDA</span>
              <span className="text-slate-400 mx-2">·</span>
              post_earnings_continuation
              <span className="text-slate-400 mx-2">·</span>
              <span className="text-slate-400">2026-03-10</span>
            </p>
          </div>
        </div>

        {/* Thesis card */}
        <div className="mb-6 ml-10">
          <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">
            Thesis Agent output — hover review points to highlight risk factors
          </p>
          <div className="bg-blue-950/30 border border-blue-800/50 rounded-lg p-5">
            <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-white font-mono">NVDA</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 font-medium">
                  conviction: high
                </span>
                <span className="text-xs text-slate-500 font-mono">hold ~18d</span>
              </div>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed mb-4">
              NVDA broke out to new highs on a strong earnings beat and AI infrastructure demand
              commentary. Volume confirmed institutional participation. Post-earnings drift thesis:
              price likely continues higher over the next 2–4 weeks as analysts revise estimates
              upward and institutions build positions.
            </p>

            <div className="mb-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1.5">
                Entry rationale
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Gap-up held above prior resistance at $950 on 3× average volume. The setup shows
                clean accumulation typical of post-earnings continuation. Risk is defined by the
                earnings gap fill at $920.
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Risk factors</p>
              <ul className="space-y-1.5">
                {RISK_FACTORS.map((rf, i) => (
                  <li
                    key={i}
                    className={`text-sm leading-relaxed flex items-start gap-2 rounded px-2 py-1 transition-all duration-200 ${
                      active === i
                        ? 'bg-amber-950/40 text-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.15)]'
                        : 'text-slate-400'
                    }`}
                  >
                    <span className={`mt-0.5 transition-colors duration-200 ${active === i ? 'text-amber-400' : 'text-slate-600'}`}>
                      ·
                    </span>
                    {rf}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Adversarial review */}
        <div className="flex items-start gap-3 ml-10">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-900/60 border border-amber-700/60 flex items-center justify-center mt-0.5">
            <svg
              className="w-3.5 h-3.5 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="bg-amber-950/20 border border-amber-800/40 rounded-lg rounded-tl-none px-4 py-4 flex-1">
            <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
              <p className="text-xs uppercase tracking-wider text-amber-600">Adversarial Review</p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500">
                  failure_probability:{' '}
                  <span className="text-amber-400">0.32</span>
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 font-medium">
                  proceed
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              The thesis is sound but relies heavily on continued AI infrastructure spending
              tailwinds. The entry is late relative to the gap; much of the easy money may already
              be captured. Failure probability is meaningful given current macro uncertainty.
            </p>

            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
              Failure modes — hover to cross-reference risk factors
            </p>
            <ul className="space-y-2">
              {FAILURE_MODES.map((fm, i) => (
                <li
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => toggle(i)}
                  className={`text-sm leading-relaxed flex items-start gap-2 rounded px-2 py-1.5 cursor-pointer border transition-all duration-200 ${
                    active === i
                      ? 'bg-amber-950/40 border-amber-700/50 text-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.15)]'
                      : 'border-transparent text-slate-400 hover:text-slate-300'
                  }`}
                >
                  <span className={`flex-shrink-0 font-mono text-xs mt-0.5 transition-colors duration-200 ${active === i ? 'text-amber-400' : 'text-slate-600'}`}>
                    [{i + 1}]
                  </span>
                  {fm}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YakiquantThesisExample
