import { Link } from 'react-router-dom'
import SoilKnowledgePreview from '../components/soil-knowledge/SoilKnowledgePreview'
import YakiquantPreview from '../components/yakiquant/YakiquantPreview'

const systems = [
  {
    to: '/systems/soil-knowledge',
    label: 'Live',
    title: 'Soil Knowledge AI',
    description:
      'A soil education and decision-support system that maps soil biology, structure, chemistry, water, and plant response. It uses AI to connect educational material, research, field notes, and soil data into practical guidance.',
    preview: <SoilKnowledgePreview />,
    gradient: 'from-stone-900 via-emerald-950/50 to-stone-900',
    border: 'border-emerald-800/60 hover:border-lime-400/70',
    labelColor: 'text-lime-300',
  },
  {
    to: '/systems/yakiquant',
    label: 'Live',
    title: 'Yakiquant',
    description:
      'An AI-assisted equity swing trading research lab. Systematic scanners identify setups from market data and earnings. Two Claude agents then generate and adversarially review trade theses before risk-gated execution.',
    preview: <YakiquantPreview />,
    gradient: 'from-slate-900 via-blue-950/50 to-slate-900',
    border: 'border-blue-800/60 hover:border-sky-400/70',
    labelColor: 'text-sky-300',
  },
]

const Systems = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-wider text-primary-400 mb-3">
            Phil Builds Things
          </p>
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
              className={`bg-gradient-to-br ${system.gradient} border ${system.border} rounded-lg p-8 transition-colors block group`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <p className={`text-xs uppercase tracking-wider ${system.labelColor} mb-2`}>
                    {system.label}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {system.title}
                  </h2>
                  <p className="text-stone-300 leading-relaxed mb-5">{system.description}</p>
                  {system.preview}
                </div>
                <svg
                  className="w-5 h-5 text-gray-500/70 group-hover:text-amber-300 transition-colors flex-shrink-0 mt-1"
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
