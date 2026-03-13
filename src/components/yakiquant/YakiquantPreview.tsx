import { useId, useState } from 'react'

const NODES = [
  { id: 0, cx: 52, cy: 90, r: 18, label: 'Scanner', color: '#0f2744', glow: '#60a5fa' },
  { id: 1, cx: 175, cy: 90, r: 22, label: 'Thesis', color: '#451a03', glow: '#f59e0b' },
  { id: 2, cx: 310, cy: 90, r: 22, label: 'Review', color: '#2d1b69', glow: '#a78bfa' },
  { id: 3, cx: 445, cy: 90, r: 18, label: 'Risk', color: '#2d1b69', glow: '#a78bfa' },
  { id: 4, cx: 565, cy: 90, r: 18, label: 'Portfolio', color: '#0c3a4e', glow: '#22d3ee' },
]

const EDGES = [
  { id: 'e0', d: 'M 70 90 C 100 90 135 90 153 90', from: 0, to: 1 },
  { id: 'e1', d: 'M 197 90 C 230 90 268 90 288 90', from: 1, to: 2 },
  { id: 'e2', d: 'M 332 90 C 365 90 410 90 427 90', from: 2, to: 3 },
  { id: 'e3', d: 'M 463 90 C 490 90 525 90 547 90', from: 3, to: 4 },
]

const ARROW_XS = [115, 250, 385, 500]

const YakiquantPreview = () => {
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
      viewBox="0 0 620 180"
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

export default YakiquantPreview
