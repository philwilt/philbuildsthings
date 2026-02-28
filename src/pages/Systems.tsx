import { Link } from 'react-router-dom'

const systems = [
  {
    to: '/systems/soil-knowledge',
    label: 'Live',
    title: 'Soil Knowledge',
    description:
      'An agentic AI system that ingests agronomic research, soil data, and field reports to surface actionable insights for growers and agronomists.',
    tags: ['RAG', 'Agents', 'Knowledge Graph'],
  },
]

const Systems = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-wider text-primary-400 mb-3">Phil Builds Things</p>
          <h1 className="text-5xl font-bold text-white mb-4">Agentic Systems</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Production AI workflows, applied agents, and intelligent systems built to solve real
            problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {systems.map((system) => (
            <Link
              key={system.to}
              to={system.to}
              className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-primary-500 transition-colors block group"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-primary-400 mb-2">
                    {system.label}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {system.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{system.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {system.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-primary-400 transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Systems
