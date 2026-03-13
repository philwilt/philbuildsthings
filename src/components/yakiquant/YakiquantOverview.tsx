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
          <a
            href="https://quant.philbuildsthings.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-lg overflow-hidden border border-slate-700/60 hover:border-sky-600/60 transition-colors shadow-lg shadow-black/40"
          >
            <img
              src="/yakiquant/dashboard-preview.png"
              alt="Yakiquant live dashboard"
              className="w-full block"
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-900 to-transparent" />
            <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-sky-300">Live Dashboard</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default YakiquantOverview
