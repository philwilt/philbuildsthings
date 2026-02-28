const sources = [
  {
    id: 1,
    title: 'Soil Biology 101',
    timestamp: '14:32',
    excerpt:
      'Mycorrhizal hyphae extend several centimeters beyond the root depletion zone, dramatically increasing the effective surface area available for phosphorus uptake. A single gram of soil can contain up to 100 meters of fungal hyphae.',
  },
  {
    id: 2,
    title: 'Nutrient Cycling in Agricultural Soils',
    timestamp: '28:15',
    excerpt:
      'Phosphorus in most soils exists in forms unavailable to roots directly. Mycorrhizal fungi produce phosphatase enzymes that cleave phosphate from organic compounds, converting it to plant-accessible orthophosphate.',
  },
  {
    id: 3,
    title: 'Rhizosphere Dynamics — Field Observations',
    timestamp: '9:04',
    excerpt:
      'In low-phosphorus plots, colonization rates above 60% correlated with a 40% yield increase, consistent with the hypothesis that fungal networks compensate for root architecture limitations in depleted soils.',
  },
]

const SoilQueryExample = () => {
  return (
    <section className="py-16 bg-stone-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">A Query in Action</h2>
          <p className="text-stone-300 max-w-xl mx-auto">
            A question comes in, the system retrieves the most relevant passages, and an answer
            comes back grounded in real sources.
          </p>
        </div>

        {/* Query */}
        <div className="flex items-start gap-3 mb-8">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-900/60 border border-amber-700/60 flex items-center justify-center mt-0.5">
            <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="bg-amber-950/40 border border-amber-800/50 rounded-lg rounded-tl-none px-4 py-3 max-w-lg">
            <p className="text-amber-100 text-sm leading-relaxed">
              How do mycorrhizal fungi help plants access phosphorus in depleted soils?
            </p>
          </div>
        </div>

        {/* Retrieved sources */}
        <div className="mb-6 ml-10">
          <p className="text-xs uppercase tracking-wider text-stone-500 mb-3">
            Retrieved sources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sources.map((s) => (
              <div
                key={s.id}
                className="bg-stone-900 border border-stone-700/60 rounded-lg p-3 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-lime-400 leading-tight">{s.title}</span>
                  <span className="flex-shrink-0 text-[10px] font-mono text-stone-500 bg-stone-800 px-1.5 py-0.5 rounded">
                    {s.timestamp}
                  </span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">{s.excerpt}</p>
                <span className="text-[10px] text-stone-600 font-mono">[{s.id}]</span>
              </div>
            ))}
          </div>
        </div>

        {/* LLM response */}
        <div className="flex items-start gap-3 ml-10">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center mt-0.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-lg rounded-tl-none px-4 py-4 flex-1">
            <p className="text-stone-200 text-sm leading-relaxed">
              Mycorrhizal fungi dramatically extend a plant's effective root reach into phosphorus-depleted zones. Their hyphae push beyond the root depletion zone where orthophosphate has already been exhausted, accessing pockets of soil the plant cannot reach on its own{' '}
              <cite className="not-italic text-lime-400 font-mono text-xs">[1]</cite>. Beyond physical reach, the fungi also produce phosphatase enzymes that break down organic phosphorus compounds into plant-accessible orthophosphate — effectively unlocking a reservoir that roots alone cannot use{' '}
              <cite className="not-italic text-lime-400 font-mono text-xs">[2]</cite>. Field data supports this: plots with colonization rates above 60% show yield gains around 40%, suggesting fungal networks compensate meaningfully when root architecture is limited by soil depletion{' '}
              <cite className="not-italic text-lime-400 font-mono text-xs">[3]</cite>.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SoilQueryExample
