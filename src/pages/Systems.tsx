import { useId, useState } from 'react'
import { Link } from 'react-router-dom'

// Nodes laid out L→R: Lectures, Papers, Field Data → Knowledge Extraction → Soil Ontology → Guidance
const NODES = [
  { id: 0, cx: 52,  cy: 40,  r: 18, label: 'Lectures',   color: '#92400e', glow: '#f59e0b' },
  { id: 1, cx: 52,  cy: 90,  r: 18, label: 'Research',   color: '#1e3a5f', glow: '#60a5fa' },
  { id: 2, cx: 52,  cy: 140, r: 18, label: 'Field Data', color: '#3b4a1e', glow: '#84cc16' },
  { id: 3, cx: 185, cy: 90,  r: 22, label: 'Extraction', color: '#1a3a2a', glow: '#34d399' },
  { id: 4, cx: 320, cy: 90,  r: 22, label: 'Ontology',   color: '#6b5430', glow: '#c4962c' },
  { id: 5, cx: 455, cy: 90,  r: 22, label: 'Guidance',   color: '#064e3b', glow: '#34d399' },
]

// Curved paths: sources fan into extraction, then chain to output
const EDGES = [
  { id: 'e0', d: 'M 70 40 C 110 40 150 75 163 90',     from: 0, to: 3 },
  { id: 'e1', d: 'M 70 90 C 110 90 150 90 163 90',      from: 1, to: 3 },
  { id: 'e2', d: 'M 70 140 C 110 140 150 105 163 90',   from: 2, to: 3 },
  { id: 'e3', d: 'M 207 90 C 240 90 270 90 298 90',     from: 3, to: 4 },
  { id: 'e4', d: 'M 342 90 C 375 90 405 90 433 90',     from: 4, to: 5 },
]

const ARROW_XS = [126, 260, 394]

const SoilKnowledgePreview = () => {
  const uid = useId()
  const [hovered, setHovered] = useState<number | null>(null)

  const isLit = (nodeId: number) => {
    if (hovered === null) return false
    if (hovered === nodeId) return true
    return EDGES.some((e) => (e.from === hovered && e.to === nodeId) || (e.to === hovered && e.from === nodeId))
  }

  const edgeLit = (e: (typeof EDGES)[0]) =>
    hovered !== null && (e.from === hovered || e.to === hovered)

  return (
    <svg
      viewBox="0 0 520 180"
      className="w-full"
      style={{ maxHeight: 180 }}
      onMouseLeave={() => setHovered(null)}
    >
      <defs>
        {NODES.map((n) => (
          <radialGradient key={`g-${n.id}`} id={`${uid}-g-${n.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={n.glow} stopOpacity="0.35" />
            <stop offset="100%" stopColor={n.color} stopOpacity="1" />
          </radialGradient>
        ))}
        {NODES.map((n) => (
          <filter key={`f-${n.id}`} id={`${uid}-f-${n.id}`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation={isLit(n.id) ? 5 : 2.5} result="blur" />
            <feFlood floodColor={n.glow} floodOpacity={isLit(n.id) ? 0.9 : 0.5} result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      {/* Edges */}
      {EDGES.map((e) => (
        <path
          key={e.id}
          d={e.d}
          fill="none"
          stroke={edgeLit(e) ? NODES[e.to].glow : '#374151'}
          strokeWidth={edgeLit(e) ? 1.5 : 0.9}
          strokeOpacity={edgeLit(e) ? 0.8 : 0.5}
          style={{ transition: 'stroke 0.2s, stroke-width 0.2s, stroke-opacity 0.2s' }}
        />
      ))}

      {/* Nodes */}
      {NODES.map((n) => (
        <g key={n.id} onMouseEnter={() => setHovered(n.id)} style={{ cursor: 'pointer' }}>
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill={`url(#${uid}-g-${n.id})`}
            filter={`url(#${uid}-f-${n.id})`}
          />
          <text
            x={n.cx}
            y={n.cy + n.r + 10}
            textAnchor="middle"
            fill={isLit(n.id) ? n.glow : '#9ca3af'}
            fontSize={8.5}
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.04em"
            style={{ transition: 'fill 0.2s', userSelect: 'none' }}
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* Flow arrow hints */}
      {ARROW_XS.map((x) => (
        <text
          key={x}
          x={x}
          y={93}
          textAnchor="middle"
          fill="#4b5563"
          fontSize={10}
          fontFamily="ui-monospace, monospace"
        >
          →
        </text>
      ))}
    </svg>
  )
}

const systems = [
  {
    to: '/systems/soil-knowledge',
    label: 'Live',
    title: 'Soil Knowledge AI',
    description:
      'A soil education and decision-support system that maps soil biology, structure, chemistry, water, and plant response. It uses AI to connect educational material, research, field notes, and soil data into practical guidance.',
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
              className="bg-gradient-to-br from-stone-900 via-emerald-950/50 to-stone-900 border border-emerald-800/60 rounded-lg p-8 hover:border-lime-400/70 transition-colors block group"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-lime-300 mb-2">
                    {system.label}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {system.title}
                  </h2>
                  <p className="text-stone-300 leading-relaxed mb-5">{system.description}</p>
                  <SoilKnowledgePreview />
                </div>
                <svg
                  className="w-5 h-5 text-emerald-400/70 group-hover:text-amber-300 transition-colors flex-shrink-0 mt-1"
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
