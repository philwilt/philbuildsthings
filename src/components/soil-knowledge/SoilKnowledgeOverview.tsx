const SoilKnowledgeOverview = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed">
          <p>
            Soil Knowledge connects a retrieval-augmented generation pipeline with a structured
            knowledge graph to answer complex agronomic questions that would otherwise require
            hours of manual research.
          </p>
          <p>
            The system continuously ingests new data sources — university extension publications,
            lab reports, weather history, and field notes — and surfaces the right context at query
            time via an agentic reasoning layer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SoilKnowledgeOverview
