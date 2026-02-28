const SoilKnowledgeHero = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-wider text-primary-400 mb-4">Agentic Systems</p>
        <h1 className="text-5xl font-bold text-white mb-6">Soil Knowledge</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          An agentic AI system that ingests agronomic research, soil data, and field reports to
          surface actionable insights for growers and agronomists.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          {['RAG', 'Agents', 'Knowledge Graph', 'TypeScript', 'Python'].map((tag) => (
            <span key={tag} className="text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoilKnowledgeHero
