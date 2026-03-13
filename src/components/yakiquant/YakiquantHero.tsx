const YakiquantHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-wider text-sky-400 mb-4">Agentic Systems</p>
        <h1 className="text-5xl font-bold text-white mb-3">Yakiquant</h1>
        <p className="text-lg text-blue-300 mb-6">AI-assisted equity swing trading research lab</p>
        <p className="text-xl text-slate-200 leading-relaxed max-w-3xl">
          Yakiquant ingests market data and news, runs systematic scanners to identify trade setups,
          then deploys a pair of Claude agents — one to generate structured trade theses, another to
          adversarially stress-test them — before any order touches the market.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://quant.philbuildsthings.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-900/50 hover:bg-sky-800/60 border border-sky-700/60 hover:border-sky-500/70 text-sky-300 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Live Dashboard
          </a>
        </div>
      </div>
    </section>
  )
}

export default YakiquantHero
