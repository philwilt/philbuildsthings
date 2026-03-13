const YakiquantOverview = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 leading-relaxed">
          <div>
            <p>
              Yakiquant is a full-stack quantitative trading research system built around a
              two-agent Claude pipeline. Systematic scanners surface trade setups from daily price
              action and earnings calendars. Claude then generates a structured thesis — entry
              rationale, risk factors, conviction, and hold period — while a second adversarial
              agent plays devil&rsquo;s advocate before anything is sized or submitted.
            </p>
            <p className="mt-4">
              Risk controls and position sizing run automatically each trading day. A Next.js
              dashboard surfaces the equity curve, open positions, scanner results, and the full
              research log in real time.
            </p>
          </div>
          <div className="bg-blue-950/40 rounded-lg border border-blue-800/70 p-5">
            <p className="text-sm text-slate-200 font-medium mb-3">
              When the scanner flags:{' '}
              <span className="text-sky-300">
                &ldquo;NVDA — post-earnings continuation&rdquo;
              </span>
            </p>
            <p className="text-sm text-slate-300 mb-2">The agents reason:</p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-sky-500">&rarr;</span> news classifier filters signal from
                noise
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-500">&rarr;</span> thesis agent structures the trade idea
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-500">&rarr;</span> adversarial agent probes for failure
                modes
              </li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">
              Only reviewed theses reach risk management and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YakiquantOverview
