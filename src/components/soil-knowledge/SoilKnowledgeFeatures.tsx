const features = [
  {
    title: 'Natural Language Queries',
    description: 'Ask complex agronomic questions in plain language. The system handles query decomposition and multi-step retrieval.',
  },
  {
    title: 'Source Grounding',
    description: 'Every answer is grounded in source documents. Citations are surfaced alongside responses so users can verify.',
  },
  {
    title: 'Soil-Specific Ontology',
    description: 'Domain-tuned entity extraction understands soil horizons, nutrient cycles, crop families, and regional variation.',
  },
  {
    title: 'Continuous Ingestion',
    description: 'New documents and data sources are processed automatically, keeping the knowledge base current.',
  },
]

const SoilKnowledgeFeatures = () => {
  return (
    <section className="py-16 bg-stone-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0 w-1 bg-emerald-500 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoilKnowledgeFeatures
