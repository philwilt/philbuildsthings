const features = [
  {
    title: 'Systematic Scanning',
    description:
      'Rule-based scanners identify post-earnings continuation and breakout momentum setups daily across S&P 500 constituents.',
  },
  {
    title: 'Dual-Agent Research',
    description:
      'Claude generates structured trade theses. A second adversarial Claude agent stress-tests every thesis — failure modes, failure probability, proceed/reject — before it can be traded.',
  },
  {
    title: 'Risk-Gated Execution',
    description:
      'Pre-trade checks enforce position sizing, portfolio concentration limits, and max daily drawdown before any order is submitted to Alpaca.',
  },
  {
    title: 'Live Dashboard',
    description:
      'A Next.js dashboard surfaces the equity curve, drawdown, open positions, scanner results, and the full research log in real time.',
  },
]

const YakiquantFeatures = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0 w-1 bg-sky-500 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YakiquantFeatures
