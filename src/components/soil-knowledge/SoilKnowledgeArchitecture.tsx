const layers = [
  {
    step: '01',
    title: 'Ingestion',
    description:
      'Documents, soil reports, and agronomic publications are parsed, chunked, and embedded into a vector store.',
  },
  {
    step: '02',
    title: 'Knowledge Graph',
    description:
      'Entities — crops, nutrients, soil types, regions — are extracted and linked into a structured graph for relational queries.',
  },
  {
    step: '03',
    title: 'Agentic Retrieval',
    description:
      'A reasoning agent selects retrieval strategies (vector search, graph traversal, or hybrid) based on the query type.',
  },
  {
    step: '04',
    title: 'Response Generation',
    description:
      'Retrieved context is synthesized into grounded, cited answers with confidence signals surfaced to the user.',
  },
]

const SoilKnowledgeArchitecture = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((layer) => (
            <div key={layer.step} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <p className="text-xs font-mono text-primary-400 mb-2">{layer.step}</p>
              <h3 className="text-lg font-semibold text-white mb-2">{layer.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{layer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoilKnowledgeArchitecture
