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
      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Research in the Dashboard</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The Research page surfaces every scanner result alongside its generated thesis and
                adversarial review. Select a ticker to see the full trade setup: entry, stop,
                target, catalyst classification, and the agent&rsquo;s recommendation — all in one
                panel.
              </p>
              <a
                href="https://quant.philbuildsthings.com/research"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-900/50 hover:bg-sky-800/60 border border-sky-700/60 hover:border-sky-500/70 text-sky-300 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Open Live Dashboard
              </a>
            </div>
            <a
              href="https://quant.philbuildsthings.com/research"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-lg overflow-hidden border border-slate-700/60 hover:border-sky-600/60 transition-colors shadow-lg shadow-black/40"
            >
              <img
                src="/yakiquant/trade-idea.png"
                alt="Yakiquant research panel showing NVDA trade thesis and adversarial review"
                className="w-full block"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900 to-transparent" />
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <a
              href="https://quant.philbuildsthings.com/watchlist"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-lg overflow-hidden border border-slate-700/60 hover:border-sky-600/60 transition-colors shadow-lg shadow-black/40"
            >
              <img
                src="/yakiquant/watchlist-screenshot.png"
                alt="Yakiquant watchlist showing price chart with clickable anomaly points and news context"
                className="w-full block"
              />
            </a>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Watchlist &amp; Price History</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Track the full S&amp;P 500 universe with sparklines and live quotes. Select any
                ticker to pull up its price history — then click the highlighted dots on the chart
                to surface the news behind anomalous moves. Every spike and gap has a story; the
                watchlist makes it easy to find it.
              </p>
              <a
                href="https://quant.philbuildsthings.com/watchlist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-900/50 hover:bg-sky-800/60 border border-sky-700/60 hover:border-sky-500/70 text-sky-300 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Open Live Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-900">
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
    </div>
  )
}

export default Yakiquant
