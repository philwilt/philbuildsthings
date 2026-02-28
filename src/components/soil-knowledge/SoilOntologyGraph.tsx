import { useCallback, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'
import {
  ReactFlow,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// --- Data ---

interface ConceptNode {
  id: string
  label: string
  type: 'core' | 'domain' | 'concept'
  domain?: string
}

interface ConceptEdge {
  from: string
  to: string
  type: string
}

const CONCEPT_NODES: ConceptNode[] = [
  { id: 'soil', label: 'Soil System', type: 'core' },
  { id: 'physical', label: 'Physical Structure', type: 'domain' },
  { id: 'biology', label: 'Biology', type: 'domain' },
  { id: 'chemistry', label: 'Chemistry', type: 'domain' },
  { id: 'water', label: 'Water', type: 'domain' },
  { id: 'plant', label: 'Plant Response', type: 'domain' },
  { id: 'compaction', label: 'Compaction', type: 'concept', domain: 'physical' },
  { id: 'pore_space', label: 'Pore Space', type: 'concept', domain: 'physical' },
  { id: 'aggregation', label: 'Aggregation', type: 'concept', domain: 'physical' },
  { id: 'organic_matter', label: 'Organic Matter', type: 'concept', domain: 'biology' },
  { id: 'microbes', label: 'Microbial Activity', type: 'concept', domain: 'biology' },
  { id: 'nutrients', label: 'Nutrients', type: 'concept', domain: 'chemistry' },
  { id: 'ph', label: 'pH', type: 'concept', domain: 'chemistry' },
  { id: 'infiltration', label: 'Infiltration', type: 'concept', domain: 'water' },
  { id: 'retention', label: 'Water Retention', type: 'concept', domain: 'water' },
  { id: 'root_growth', label: 'Root Growth', type: 'concept', domain: 'plant' },
  { id: 'yield', label: 'Yield', type: 'concept', domain: 'plant' },
]

const CONCEPT_EDGES: ConceptEdge[] = [
  { from: 'soil', to: 'physical', type: 'domain' },
  { from: 'soil', to: 'biology', type: 'domain' },
  { from: 'soil', to: 'chemistry', type: 'domain' },
  { from: 'soil', to: 'water', type: 'domain' },
  { from: 'soil', to: 'plant', type: 'domain' },
  { from: 'physical', to: 'compaction', type: 'contains' },
  { from: 'physical', to: 'pore_space', type: 'contains' },
  { from: 'physical', to: 'aggregation', type: 'contains' },
  { from: 'biology', to: 'organic_matter', type: 'contains' },
  { from: 'biology', to: 'microbes', type: 'contains' },
  { from: 'compaction', to: 'pore_space', type: 'reduces' },
  { from: 'pore_space', to: 'infiltration', type: 'controls' },
  { from: 'organic_matter', to: 'aggregation', type: 'improves' },
  { from: 'aggregation', to: 'retention', type: 'increases' },
  { from: 'retention', to: 'root_growth', type: 'supports' },
  { from: 'nutrients', to: 'yield', type: 'enables' },
  { from: 'ph', to: 'nutrients', type: 'regulates' },
]

// --- Colors ---

const DOMAIN_COLORS: Record<string, { base: string; glow: string; light: string }> = {
  physical: { base: '#8B6914', glow: '#C4962C', light: '#D4A84080' },
  biology: { base: '#2D7A3A', glow: '#4CAF50', light: '#4CAF5080' },
  chemistry: { base: '#1565A0', glow: '#42A5F5', light: '#42A5F580' },
  water: { base: '#0277AA', glow: '#29B6F6', light: '#29B6F680' },
  plant: { base: '#558B2F', glow: '#8BC34A', light: '#8BC34A80' },
}

const DESCRIPTIONS: Record<string, string> = {
  soil: 'Everything beneath your feet — a living world of minerals, water, air, and billions of tiny organisms working together.',
  physical:
    'The physical shape of soil — how particles stack, clump, and create spaces for roots and water.',
  biology: 'The living part of soil — fungi, bacteria, worms, and the organic matter they create.',
  chemistry:
    'The nutrients and minerals dissolved in soil water that plants absorb through their roots.',
  water: 'How rain soaks in, gets stored between soil particles, and reaches plant roots.',
  plant: 'How healthy soil translates into strong roots, green leaves, and good harvests.',
  compaction:
    "When soil gets squeezed too tight (from heavy equipment or foot traffic), water and roots can't move through.",
  pore_space:
    'Tiny air pockets and channels between soil particles — like underground hallways for water and roots.',
  aggregation:
    'Soil particles stuck together in little crumbs — good crumb structure means healthy soil.',
  organic_matter:
    'Decomposed leaves, roots, and organisms that make soil dark, spongy, and full of life.',
  microbes:
    'Billions of bacteria and fungi in every handful of soil — they break down organic matter and feed plants.',
  nutrients:
    'The food plants need — nitrogen, phosphorus, potassium, and trace minerals from the soil.',
  ph: 'How acidic or alkaline soil is — it controls which nutrients plants can actually absorb.',
  infiltration: 'How fast rain soaks into the ground instead of running off the surface.',
  retention:
    'How well soil holds onto water like a sponge, keeping it available for plants between rains.',
  root_growth:
    'Roots exploring the soil for water and nutrients — healthy soil means deeper, stronger roots.',
  yield: 'The harvest — how much a field produces, directly shaped by the health of its soil.',
}

// --- Edge classification ---

const CAUSAL_TYPES = new Set(['reduces', 'controls', 'regulates'])
const INFLUENCE_TYPES = new Set(['improves', 'increases', 'supports', 'enables'])

function getEdgeStyle(
  edgeType: string,
  highlighted: boolean,
  dimmed: boolean,
): { stroke: string; strokeWidth: number; strokeDasharray?: string; opacity: number } {
  if (edgeType === 'domain' || edgeType === 'contains') {
    return {
      stroke: highlighted ? '#9ca3af' : '#4b5563',
      strokeWidth: highlighted ? 1.5 : 0.8,
      opacity: dimmed ? 0.06 : highlighted ? 0.7 : 0.2,
    }
  }
  if (CAUSAL_TYPES.has(edgeType)) {
    return {
      stroke: highlighted ? '#f59e0b' : '#92400e',
      strokeWidth: highlighted ? 2.5 : 1.2,
      opacity: dimmed ? 0.06 : highlighted ? 0.9 : 0.3,
    }
  }
  if (INFLUENCE_TYPES.has(edgeType)) {
    return {
      stroke: highlighted ? '#34d399' : '#065f46',
      strokeWidth: highlighted ? 2 : 1,
      strokeDasharray: '8 4',
      opacity: dimmed ? 0.06 : highlighted ? 0.8 : 0.25,
    }
  }
  return {
    stroke: '#555',
    strokeWidth: highlighted ? 1.5 : 0.8,
    opacity: dimmed ? 0.06 : 0.2,
  }
}

// --- Radial layout ---

const NODE_SIZES = { core: 120, domain: 88, concept: 64 }

function computePositions(): Record<string, { x: number; y: number }> {
  const positions: Record<string, { x: number; y: number }> = {}
  const cx = 0
  const cy = 0

  positions['soil'] = { x: cx, y: cy }

  const domains = CONCEPT_NODES.filter((n) => n.type === 'domain')
  const domainRadius = 220

  domains.forEach((d, i) => {
    const angle = (2 * Math.PI * i) / domains.length - Math.PI / 2
    positions[d.id] = {
      x: cx + domainRadius * Math.cos(angle),
      y: cy + domainRadius * Math.sin(angle),
    }
  })

  const conceptRadius = 400
  domains.forEach((d, di) => {
    const domainAngle = (2 * Math.PI * di) / domains.length - Math.PI / 2
    const concepts = CONCEPT_NODES.filter((n) => n.type === 'concept' && n.domain === d.id)
    const spread = 0.4
    concepts.forEach((c, ci) => {
      const offset = concepts.length === 1 ? 0 : (ci / (concepts.length - 1) - 0.5) * spread
      const angle = domainAngle + offset
      positions[c.id] = {
        x: cx + conceptRadius * Math.cos(angle),
        y: cy + conceptRadius * Math.sin(angle),
      }
    })
  })

  return positions
}

// --- Custom node components ---

interface SoilNodeData {
  label: string
  nodeType: 'core' | 'domain' | 'concept'
  domain?: string
  highlighted: boolean
  dimmed: boolean
  [key: string]: unknown
}

function CoreNode({ data }: NodeProps<Node<SoilNodeData>>) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: NODE_SIZES.core,
        height: NODE_SIZES.core,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 35%, #6b5430, #3d2e1a 70%)',
        boxShadow: data.highlighted
          ? '0 0 40px 12px rgba(196, 150, 44, 0.4), 0 0 80px 20px rgba(196, 150, 44, 0.15)'
          : '0 0 30px 8px rgba(139, 105, 20, 0.25), 0 0 60px 15px rgba(139, 105, 20, 0.1)',
        opacity: data.dimmed ? 0.15 : 1,
        transition: 'opacity 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <span className="text-amber-100 text-sm font-bold text-center leading-tight tracking-wide">
        {data.label}
      </span>
      <Handle type="source" position={Position.Right} className="!opacity-0 !w-0 !h-0" />
      <Handle type="target" position={Position.Left} className="!opacity-0 !w-0 !h-0" />
    </div>
  )
}

function DomainNode({ data, id }: NodeProps<Node<SoilNodeData>>) {
  const colors = DOMAIN_COLORS[id] ?? { base: '#666', glow: '#888', light: '#88888880' }
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: NODE_SIZES.domain,
        height: NODE_SIZES.domain,
        borderRadius: '50%',
        background: `radial-gradient(circle at 40% 35%, ${colors.glow}40, ${colors.base} 70%)`,
        boxShadow: data.highlighted
          ? `0 0 30px 8px ${colors.light}, 0 0 60px 15px ${colors.light}40`
          : `0 0 15px 4px ${colors.light}60`,
        opacity: data.dimmed ? 0.15 : 1,
        transition: 'opacity 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <span className="text-white text-xs font-semibold text-center leading-tight px-2">
        {data.label}
      </span>
      <Handle type="source" position={Position.Right} className="!opacity-0 !w-0 !h-0" />
      <Handle type="target" position={Position.Left} className="!opacity-0 !w-0 !h-0" />
    </div>
  )
}

function ConceptNode({ data }: NodeProps<Node<SoilNodeData>>) {
  const domain = data.domain ?? ''
  const colors = DOMAIN_COLORS[domain] ?? { base: '#666', glow: '#888', light: '#88888880' }
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: NODE_SIZES.concept,
        height: NODE_SIZES.concept,
        borderRadius: '50%',
        background: `radial-gradient(circle at 40% 35%, ${colors.glow}30, ${colors.base}90 80%)`,
        boxShadow: data.highlighted
          ? `0 0 20px 6px ${colors.light}, 0 0 40px 10px ${colors.light}30`
          : `0 0 8px 2px ${colors.light}40`,
        opacity: data.dimmed ? 0.1 : 1,
        transition: 'opacity 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <span className="text-white/90 text-[10px] font-medium text-center leading-tight px-1">
        {data.label}
      </span>
      <Handle type="source" position={Position.Right} className="!opacity-0 !w-0 !h-0" />
      <Handle type="target" position={Position.Left} className="!opacity-0 !w-0 !h-0" />
    </div>
  )
}

const nodeTypes = {
  core: CoreNode,
  domain: DomainNode,
  concept: ConceptNode,
}

// --- Edge label overlay (HTML, renders above nodes) ---

function EdgeLabels({
  hoveredNode,
  positions,
}: {
  hoveredNode: string | null
  positions: Record<string, { x: number; y: number }>
}) {
  const { flowToScreenPosition } = useReactFlow()

  if (!hoveredNode) return null

  const activeEdges = CONCEPT_EDGES.filter(
    (e) =>
      (e.from === hoveredNode || e.to === hoveredNode) &&
      e.type !== 'domain' &&
      e.type !== 'contains',
  )

  return (
    <>
      {activeEdges.map((e) => {
        const from = positions[e.from]
        const to = positions[e.to]
        if (!from || !to) return null

        const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 }
        const screen = flowToScreenPosition(mid)

        const color = CAUSAL_TYPES.has(e.type) ? '#f59e0b' : '#34d399'

        return (
          <div
            key={`${e.from}-${e.to}-label`}
            className="pointer-events-none fixed z-50 rounded-md px-1.5 py-0.5 text-xs font-semibold italic"
            style={{
              left: screen.x,
              top: screen.y,
              transform: 'translate(-50%, -50%)',
              background: 'rgba(10,10,20,0.45)',
              color,
              border: `1px solid ${color}40`,
              backdropFilter: 'blur(4px)',
              whiteSpace: 'nowrap',
            }}
          >
            {e.type}
          </div>
        )
      })}
    </>
  )
}

// --- Tooltip ---

function Tooltip({
  nodeId,
  positions,
}: {
  nodeId: string | null
  positions: Record<string, { x: number; y: number }>
}) {
  const { flowToScreenPosition } = useReactFlow()

  if (!nodeId) return null

  const node = CONCEPT_NODES.find((n) => n.id === nodeId)
  if (!node) return null

  const pos = positions[nodeId]
  if (!pos) return null

  const size = NODE_SIZES[node.type]
  const screen = flowToScreenPosition({ x: pos.x + size / 2 + 16, y: pos.y })
  const colors =
    node.type === 'core'
      ? { glow: '#C4962C' }
      : (DOMAIN_COLORS[node.type === 'domain' ? node.id : (node.domain ?? '')] ?? { glow: '#888' })

  const connections = CONCEPT_EDGES.filter(
    (e) =>
      (e.from === nodeId || e.to === nodeId) && e.type !== 'domain' && e.type !== 'contains',
  )

  return (
    <div
      className="pointer-events-none fixed z-50 max-w-[260px] rounded-xl px-4 py-3 shadow-2xl"
      style={{
        left: screen.x,
        top: screen.y,
        transform: 'translateY(-50%)',
        background: 'linear-gradient(135deg, rgba(15,15,25,0.95), rgba(25,25,40,0.95))',
        border: `1px solid ${colors.glow}40`,
        backdropFilter: 'blur(8px)',
      }}
    >
      <p className="text-sm font-bold mb-1" style={{ color: colors.glow }}>
        {node.label}
      </p>
      {DESCRIPTIONS[nodeId] && (
        <p className="text-gray-300 text-xs leading-relaxed">{DESCRIPTIONS[nodeId]}</p>
      )}
      {connections.length > 0 && (
        <div className="mt-2 pt-2 border-t border-white/10">
          {connections.map((c) => {
            const other = c.from === nodeId ? c.to : c.from
            const otherNode = CONCEPT_NODES.find((n) => n.id === other)
            const direction = c.from === nodeId ? '\u2192' : '\u2190'
            return (
              <p key={`${c.from}-${c.to}`} className="text-[10px] text-gray-400 leading-relaxed">
                <span className="text-gray-500">{direction}</span>{' '}
                <span className="text-gray-500 italic">{c.type}</span> {otherNode?.label}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

// --- Main graph ---

function GraphInner() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const positions = useMemo(computePositions, [])

  const connectedSet = useMemo(() => {
    if (!hoveredNode) return null
    const set = new Set<string>([hoveredNode])
    const edgeIds = new Set<string>()
    CONCEPT_EDGES.forEach((e) => {
      if (e.from === hoveredNode || e.to === hoveredNode) {
        set.add(e.from)
        set.add(e.to)
        edgeIds.add(`${e.from}-${e.to}`)
      }
    })
    return { nodes: set, edges: edgeIds }
  }, [hoveredNode])

  const onNodeMouseEnter = useCallback(
    (_event: ReactMouseEvent, node: Node<SoilNodeData>) => {
      if (leaveTimer.current) {
        clearTimeout(leaveTimer.current)
        leaveTimer.current = null
      }
      setHoveredNode(node.id)
    },
    [],
  )

  const onNodeMouseLeave = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    leaveTimer.current = setTimeout(() => {
      setHoveredNode(null)
      leaveTimer.current = null
    }, 80)
  }, [])

  const nodes: Node<SoilNodeData>[] = useMemo(() => {
    return CONCEPT_NODES.map((n) => {
      const pos = positions[n.id]
      const size = NODE_SIZES[n.type]
      const highlighted = connectedSet ? connectedSet.nodes.has(n.id) : false
      const dimmed = connectedSet ? !connectedSet.nodes.has(n.id) : false
      return {
        id: n.id,
        type: n.type,
        position: { x: pos.x - size / 2, y: pos.y - size / 2 },
        data: {
          label: n.label,
          nodeType: n.type,
          domain: n.domain,
          highlighted,
          dimmed,
        },
        draggable: false,
        selectable: false,
      }
    })
  }, [positions, connectedSet])

  const edges: Edge[] = useMemo(() => {
    return CONCEPT_EDGES.map((e) => {
      const edgeId = `${e.from}-${e.to}`
      const highlighted = connectedSet ? connectedSet.edges.has(edgeId) : false
      const dimmed = connectedSet ? !connectedSet.edges.has(edgeId) : false
      const style = getEdgeStyle(e.type, highlighted, dimmed)
      return {
        id: edgeId,
        source: e.from,
        target: e.to,
        type: 'default',
        animated: false,
        style: {
          stroke: style.stroke,
          strokeWidth: style.strokeWidth,
          strokeDasharray: style.strokeDasharray,
          opacity: style.opacity,
          transition: 'opacity 0.4s ease, stroke 0.4s ease, stroke-width 0.4s ease',
        },
      }
    })
  }, [connectedSet])

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        panOnDrag
        zoomOnScroll={false}
        zoomOnPinch
        zoomOnDoubleClick={false}
        preventScrolling
        minZoom={0.2}
        maxZoom={1.5}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      />
      <EdgeLabels hoveredNode={hoveredNode} positions={positions} />
      <Tooltip nodeId={hoveredNode} positions={positions} />
    </div>
  )
}

export default function SoilOntologyGraph() {
  return (
    <ReactFlowProvider>
      <GraphInner />
    </ReactFlowProvider>
  )
}
