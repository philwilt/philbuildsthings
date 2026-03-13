import YakiquantHero from '../components/yakiquant/YakiquantHero'
import YakiquantOverview from '../components/yakiquant/YakiquantOverview'
import YakiquantPipelineGraph from '../components/yakiquant/YakiquantPipelineGraph'
import YakiquantThesisExample from '../components/yakiquant/YakiquantThesisExample'
import YakiquantFeatures from '../components/yakiquant/YakiquantFeatures'

const Yakiquant = () => {
  return (
    <div>
      <YakiquantHero />
      <YakiquantOverview />
      <section className="py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-3">How It Trades</h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Market data, earnings, and news all flow into the research pipeline. Tap or hover any
              node to see how raw signals become reviewed trade theses.
            </p>
          </div>
          <YakiquantPipelineGraph />
          <div className="flex flex-wrap items-center justify-center gap-6 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: '#0f2744', boxShadow: '0 0 6px #60a5fa60' }}
              />{' '}
              source
            </span>
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: '#2d1b69', boxShadow: '0 0 6px #a78bfa60' }}
              />{' '}
              transform
            </span>
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: '#0c3a4e', boxShadow: '0 0 6px #22d3ee60' }}
              />{' '}
              artifact
            </span>
            <span className="text-gray-600 ml-2">Tap or hover to explore</span>
          </div>
        </div>
      </section>
      <YakiquantThesisExample />
      <YakiquantFeatures />
      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">The Dashboard</h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Equity curve, drawdown, daily P&amp;L, open positions, and the full trade log — all
              updated in real time.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/60">
            <img
              src="/yakiquant/dashboard-preview.png"
              alt="Yakiquant dashboard showing equity curve, drawdown, positions, and trade log"
              className="w-full block"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://quant.philbuildsthings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-900/50 hover:bg-sky-800/60 border border-sky-700/60 hover:border-sky-500/70 text-sky-300 px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Open Live Dashboard
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Yakiquant
