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

interface PipelineNode {
  id: string
  label: string
  type: 'source' | 'artifact' | 'transform'
  tooltip: string
}

interface PipelineEdge {
  from: string
  to: string
  label: string
}

const PIPELINE_NODES: PipelineNode[] = [
  // Data sources
  {
    id: 'market_data',
    label: 'Market Data',
    type: 'source',
    tooltip: 'Daily OHLCV bars from Alpaca for S&P 500 constituents.',
  },
  {
    id: 'earnings',
    label: 'Earnings Calendar',
    type: 'source',
    tooltip: 'Upcoming and recent earnings dates via yfinance, used to identify catalyst windows.',
  },
  {
    id: 'news_feed',
    label: 'News Feed',
    type: 'source',
    tooltip: 'Recent headlines from Alpaca for each ticker flagged by the scanner.',
  },
  // Scan pipeline
  {
    id: 'scanner',
    label: 'Trade Scanner',
    type: 'transform',
    tooltip:
      'Strategy rules run on daily bars to identify post-earnings continuation and breakout momentum setups.',
  },
  {
    id: 'scan_results',
    label: 'Scanner Results',
    type: 'artifact',
    tooltip: 'Flagged trade setups with setup type, entry signal, and scan date.',
  },
  // News pipeline
  {
    id: 'news_classifier',
    label: 'News Classifier',
    type: 'transform',
    tooltip:
      'Claude classifies headline relevance, sentiment, and catalyst magnitude for each flagged ticker.',
  },
  // Research hub
  {
    id: 'thesis_agent',
    label: 'Thesis Agent',
    type: 'transform',
    tooltip:
      'Claude generates a structured trade thesis: entry rationale, risk factors, conviction level, and suggested hold period.',
  },
  // Review + execution pipeline
  {
    id: 'adversarial_review',
    label: 'Adversarial Review',
    type: 'transform',
    tooltip:
      'A second Claude agent stress-tests the thesis — failure modes, failure probability, and a proceed/caution/reject recommendation.',
  },
  {
    id: 'trade_thesis',
    label: 'Trade Thesis',
    type: 'artifact',
    tooltip: 'Approved research output with thesis, conviction, risk factors, and review outcome.',
  },
  {
    id: 'risk_manager',
    label: 'Risk Manager',
    type: 'transform',
    tooltip: 'Enforces position sizing, portfolio concentration limits, and max daily drawdown.',
  },
  {
    id: 'sized_order',
    label: 'Sized Order',
    type: 'artifact',
    tooltip: 'Risk-adjusted trade parameters: ticker, direction, quantity, and price limits.',
  },
  {
    id: 'execution',
    label: 'Order Execution',
    type: 'transform',
    tooltip: 'Submits orders to the Alpaca paper trading account.',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    type: 'artifact',
    tooltip:
      'Live positions, equity curve, drawdown, and trade history surfaced in the Next.js dashboard.',
  },
]

const PIPELINE_EDGES: PipelineEdge[] = [
  { from: 'market_data', to: 'scanner', label: 'analyze bars' },
  { from: 'earnings', to: 'scanner', label: 'check catalyst' },
  { from: 'scanner', to: 'scan_results', label: 'flag setup' },
  { from: 'news_feed', to: 'news_classifier', label: 'classify' },
  { from: 'scan_results', to: 'thesis_agent', label: 'feed ideas' },
  { from: 'news_classifier', to: 'thesis_agent', label: 'context' },
  { from: 'thesis_agent', to: 'adversarial_review', label: 'stress-test' },
  { from: 'adversarial_review', to: 'trade_thesis', label: 'approve' },
  { from: 'trade_thesis', to: 'risk_manager', label: 'size' },
  { from: 'risk_manager', to: 'sized_order', label: 'emit' },
  { from: 'sized_order', to: 'execution', label: 'submit' },
  { from: 'execution', to: 'portfolio', label: 'update' },
]

const TYPE_COLORS: Record<string, { base: string; glow: string; light: string }> = {
  source: { base: '#0f2744', glow: '#60a5fa', light: '#60a5fa60' },
  transform: { base: '#2d1b69', glow: '#a78bfa', light: '#a78bfa60' },
  artifact: { base: '#0c3a4e', glow: '#22d3ee', light: '#22d3ee60' },
}

const HUB_COLORS = { base: '#451a03', glow: '#f59e0b', light: '#f59e0b60' }

const HUB_FONT = 26
const NODE_FONT = 15

function computeNodeSize(label: string, isHub: boolean): number {
  const fontSize = isHub ? HUB_FONT : NODE_FONT
  const charWidth = fontSize * 0.58
  const lineHeight = fontSize * 1.3
  const words = label.split(' ')

  let line1 = ''
  let line2 = ''
  for (const word of words) {
    if (!line1 || (line1 + ' ' + word).length <= (line2 ? line1.length : Math.ceil(label.length / 2))) {
      line1 = line1 ? line1 + ' ' + word : word
    } else {
      line2 = line2 ? line2 + ' ' + word : word
    }
  }

  const lines = line2 ? 2 : 1
  const longestLine = Math.max(line1.length, line2.length)
  const textWidth = longestLine * charWidth
  const textHeight = lines * lineHeight
  const diagonal = Math.sqrt(textWidth * textWidth + textHeight * textHeight)
  return Math.max(Math.ceil(diagonal + fontSize * 2.2), isHub ? 190 : 120)
}

const NODE_SIZES: Record<string, number> = {}
for (const n of PIPELINE_NODES) {
  NODE_SIZES[n.id] = computeNodeSize(n.label, n.id === 'thesis_agent')
}

function getNodeSize(id: string): number {
  return NODE_SIZES[id] ?? 120
}

const COL = 190

function computePositions(): Record<string, { x: number; y: number }> {
  const p: Record<string, { x: number; y: number }> = {}

  // Top lane — market data & scanner
  const ty = -230
  p['market_data'] = { x: 0, y: ty }
  p['scanner'] = { x: COL, y: -170 }
  p['scan_results'] = { x: COL * 2, y: -170 }

  // Earnings feeds scanner from below
  p['earnings'] = { x: 0, y: -100 }

  // Bottom lane — news feed
  const by = 220
  p['news_feed'] = { x: 0, y: by }
  p['news_classifier'] = { x: COL, y: by }

  // Hub — thesis agent
  p['thesis_agent'] = { x: COL * 3.3, y: 0 }

  // Right pipeline
  p['adversarial_review'] = { x: COL * 4.5, y: 0 }
  p['trade_thesis'] = { x: COL * 5.7, y: 0 }
  p['risk_manager'] = { x: COL * 6.9, y: 0 }
  p['sized_order'] = { x: COL * 8.1, y: 0 }
  p['execution'] = { x: COL * 9.3, y: 0 }
  p['portfolio'] = { x: COL * 10.5, y: 0 }

  return p
}

interface PipelineNodeData {
  label: string
  pipelineType: 'source' | 'artifact' | 'transform'
  isHub: boolean
  highlighted: boolean
  dimmed: boolean
  [key: string]: unknown
}

function PipelineNodeComponent({ data, id }: NodeProps<Node<PipelineNodeData>>) {
  const colors = data.isHub ? HUB_COLORS : (TYPE_COLORS[data.pipelineType] ?? TYPE_COLORS.artifact)
  const size = getNodeSize(id)
  const fontSize = data.isHub ? HUB_FONT : NODE_FONT

  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: data.isHub
          ? `radial-gradient(circle at 40% 35%, ${colors.glow}50, ${colors.base} 65%)`
          : `radial-gradient(circle at 40% 35%, ${colors.glow}30, ${colors.base}dd 80%)`,
        boxShadow: data.highlighted
          ? `0 0 ${data.isHub ? 40 : 24}px ${data.isHub ? 12 : 6}px ${colors.light}, 0 0 ${data.isHub ? 70 : 44}px ${data.isHub ? 18 : 10}px ${colors.light}30`
          : `0 0 ${data.isHub ? 20 : 10}px ${data.isHub ? 6 : 3}px ${colors.light}50`,
        opacity: data.dimmed ? 0.12 : 1,
        transition: 'opacity 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <span
        className="text-white text-center leading-snug"
        style={{
          fontSize,
          fontWeight: data.isHub ? 700 : 600,
          maxWidth: size * 0.7,
        }}
      >
        {data.label}
      </span>
      <Handle type="source" position={Position.Right} className="!opacity-0 !w-0 !h-0" />
      <Handle type="target" position={Position.Left} className="!opacity-0 !w-0 !h-0" />
    </div>
  )
}

const nodeTypes = { pipeline: PipelineNodeComponent }

function EdgeLabels({
  hoveredNode,
  positions,
}: {
  hoveredNode: string | null
  positions: Record<string, { x: number; y: number }>
}) {
  const { flowToScreenPosition } = useReactFlow()

  if (!hoveredNode) return null

  const activeEdges = PIPELINE_EDGES.filter((e) => e.from === hoveredNode || e.to === hoveredNode)

  return (
    <>
      {activeEdges.map((e) => {
        const from = positions[e.from]
        const to = positions[e.to]
        if (!from || !to) return null

        const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 }
        const screen = flowToScreenPosition(mid)

        return (
          <div
            key={`${e.from}-${e.to}-label`}
            className="pointer-events-none fixed z-50 rounded-md px-2 py-0.5 text-sm font-semibold italic"
            style={{
              left: screen.x,
              top: screen.y,
              transform: 'translate(-50%, -50%)',
              background: 'rgba(10,10,20,0.45)',
              color: '#9ca3af',
              border: '1px solid rgba(156,163,175,0.3)',
              backdropFilter: 'blur(4px)',
              whiteSpace: 'nowrap',
            }}
          >
            {e.label}
          </div>
        )
      })}
    </>
  )
}

function Tooltip({
  nodeId,
  positions,
}: {
  nodeId: string | null
  positions: Record<string, { x: number; y: number }>
}) {
  const { flowToScreenPosition } = useReactFlow()

  if (!nodeId) return null

  const node = PIPELINE_NODES.find((n) => n.id === nodeId)
  if (!node) return null

  const pos = positions[nodeId]
  if (!pos) return null

  const size = getNodeSize(nodeId)
  const screen = flowToScreenPosition({ x: pos.x + size / 2 + 14, y: pos.y })
  const colors = nodeId === 'thesis_agent' ? HUB_COLORS : (TYPE_COLORS[node.type] ?? TYPE_COLORS.artifact)

  const connections = PIPELINE_EDGES.filter((e) => e.from === nodeId || e.to === nodeId)

  return (
    <div
      className="pointer-events-none fixed z-50 max-w-[240px] rounded-xl px-4 py-3 shadow-2xl"
      style={{
        left: screen.x,
        top: screen.y,
        transform: 'translateY(-50%)',
        background: 'linear-gradient(135deg, rgba(15,15,25,0.95), rgba(25,25,40,0.95))',
        border: `1px solid ${colors.glow}40`,
        backdropFilter: 'blur(8px)',
      }}
    >
      <p className="text-base font-bold mb-1" style={{ color: colors.glow }}>
        {node.label}
      </p>
      <p className="text-gray-300 text-sm leading-relaxed">{node.tooltip}</p>
      {connections.length > 0 && (
        <div className="mt-2 pt-2 border-t border-white/10">
          {connections.map((c) => {
            const other = c.from === nodeId ? c.to : c.from
            const otherNode = PIPELINE_NODES.find((n) => n.id === other)
            const direction = c.from === nodeId ? '\u2192' : '\u2190'
            return (
              <p key={`${c.from}-${c.to}`} className="text-[10px] text-gray-400 leading-relaxed">
                <span className="text-gray-500">{direction}</span>{' '}
                <span className="text-gray-500 italic">{c.label}</span> {otherNode?.label}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

function GraphInner() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const positions = useMemo(computePositions, [])

  const connectedSet = useMemo(() => {
    if (!hoveredNode) return null
    const set = new Set<string>([hoveredNode])
    const edgeIds = new Set<string>()
    PIPELINE_EDGES.forEach((e) => {
      if (e.from === hoveredNode || e.to === hoveredNode) {
        set.add(e.from)
        set.add(e.to)
        edgeIds.add(`${e.from}-${e.to}`)
      }
    })
    return { nodes: set, edges: edgeIds }
  }, [hoveredNode])

  const onNodeMouseEnter = useCallback(
    (_event: ReactMouseEvent, node: Node<PipelineNodeData>) => {
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

  const nodes: Node<PipelineNodeData>[] = useMemo(() => {
    return PIPELINE_NODES.map((n) => {
      const pos = positions[n.id]
      const size = getNodeSize(n.id)
      const highlighted = connectedSet ? connectedSet.nodes.has(n.id) : false
      const dimmed = connectedSet ? !connectedSet.nodes.has(n.id) : false
      return {
        id: n.id,
        type: 'pipeline',
        position: { x: pos.x - size / 2, y: pos.y - size / 2 },
        data: {
          label: n.label,
          pipelineType: n.type,
          isHub: n.id === 'thesis_agent',
          highlighted,
          dimmed,
        },
        draggable: false,
        selectable: false,
      }
    })
  }, [positions, connectedSet])

  const edges: Edge[] = useMemo(() => {
    return PIPELINE_EDGES.map((e) => {
      const edgeId = `${e.from}-${e.to}`
      const highlighted = connectedSet ? connectedSet.edges.has(edgeId) : false
      const dimmed = connectedSet ? !connectedSet.edges.has(edgeId) : false
      return {
        id: edgeId,
        source: e.from,
        target: e.to,
        type: 'default',
        animated: false,
        style: {
          stroke: highlighted ? '#9ca3af' : '#4b5563',
          strokeWidth: highlighted ? 2 : 0.8,
          opacity: dimmed ? 0.06 : highlighted ? 0.8 : 0.25,
          transition: 'opacity 0.4s ease, stroke 0.4s ease, stroke-width 0.4s ease',
        },
      }
    })
  }, [connectedSet])

  return (
    <div className="relative w-full h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        fitView
        fitViewOptions={{ padding: 0.06 }}
        panOnDrag
        zoomOnScroll={false}
        zoomOnPinch
        zoomOnDoubleClick={false}
        preventScrolling={false}
        minZoom={0.15}
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

export default function YakiquantPipelineGraph() {
  return (
    <ReactFlowProvider>
      <GraphInner />
    </ReactFlowProvider>
  )
}
