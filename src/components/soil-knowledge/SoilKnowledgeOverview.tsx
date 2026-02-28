const SoilKnowledgeOverview = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed">
          <div>
            <p>
              Soil Knowledge connects a retrieval-augmented generation pipeline with a structured
              knowledge graph to answer complex agronomic questions that would otherwise require
              hours of manual research.
            </p>
            <p className="mt-4">
              The system continuously ingests new data sources — lecture materials, university
              extension publications, lab reports, weather history, and field notes — and surfaces
              the right context at query time via an agentic reasoning layer.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg border border-gray-700 p-5">
            <p className="text-sm text-gray-300 font-medium mb-3">
              When a user asks:{' '}
              <span className="text-primary-400">
                &ldquo;Why is my soil holding water poorly?&rdquo;
              </span>
            </p>
            <p className="text-sm text-gray-400 mb-2">The ontology maps:</p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-gray-600">&rarr;</span> poor retention &rarr; aggregation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600">&rarr;</span> aggregation &rarr; organic matter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600">&rarr;</span> organic matter &rarr; biology
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              So retrieval finds the right soil knowledge chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoilKnowledgeOverview
