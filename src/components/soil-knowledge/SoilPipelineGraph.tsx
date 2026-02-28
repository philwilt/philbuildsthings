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

// --- Data (from nodes.json + edges.json + document-edges.json, deduplicated) ---

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
  // Video pipeline
  { id: 'video_lecture', label: 'Soil Health Lecture', type: 'source', tooltip: 'A recorded soil science lecture capturing expert knowledge.' },
  { id: 'saved_video', label: 'Saved Video File', type: 'artifact', tooltip: 'Durable stored copy of the lecture for processing.' },
  { id: 'whisper', label: 'Speech Transcription', type: 'transform', tooltip: 'Converts spoken soil education into text.' },
  { id: 'transcript', label: 'Transcript', type: 'artifact', tooltip: 'Text version of the lecture content.' },
  { id: 'clean_transcript', label: 'Clean Transcript', type: 'artifact', tooltip: 'Normalized and corrected transcript text.' },
  { id: 'chunks', label: 'Knowledge Chunks', type: 'artifact', tooltip: 'Idea-level pieces of soil knowledge with metadata.' },
  { id: 'embeddings', label: 'Semantic Embeddings', type: 'artifact', tooltip: 'Mathematical representations of soil concepts.' },
  // Document pipeline
  { id: 'pdf_paper', label: 'Soil Research Paper', type: 'source', tooltip: 'Published soil science research and technical documents.' },
  { id: 'field_notes', label: 'Field Observations', type: 'source', tooltip: 'On-site soil notes from farms and field visits.' },
  { id: 'lab_report', label: 'Soil Lab Report', type: 'source', tooltip: 'Laboratory soil analysis results.' },
  { id: 'doc_file', label: 'Document File', type: 'artifact', tooltip: 'Stored PDF or text document.' },
  { id: 'ocr_extract', label: 'Text Extraction', type: 'transform', tooltip: 'Extracts readable text from PDFs and scans.' },
  { id: 'doc_text', label: 'Document Text', type: 'artifact', tooltip: 'Readable soil content from documents.' },
  { id: 'doc_clean', label: 'Clean Text', type: 'artifact', tooltip: 'Normalized soil terminology and formatting.' },
  { id: 'doc_chunks', label: 'Knowledge Chunks', type: 'artifact', tooltip: 'Soil knowledge segmented into idea units.' },
  { id: 'doc_embeddings', label: 'Semantic Embeddings', type: 'artifact', tooltip: 'Vector meaning of soil knowledge.' },
  // Shared hub
  { id: 'vector_index', label: 'Soil Knowledge Index', type: 'artifact', tooltip: 'Unified searchable soil knowledge memory — where all ingested knowledge lives.' },
  // Query pipeline
  { id: 'user_question', label: 'Farmer Question', type: 'source', tooltip: 'A real-world soil question from a user.' },
  { id: 'retriever', label: 'Knowledge Retrieval', type: 'transform', tooltip: 'Finds relevant soil knowledge for the question.' },
  { id: 'relevant_chunks', label: 'Relevant Soil Knowledge', type: 'artifact', tooltip: 'Retrieved lecture knowledge related to the question.' },
  { id: 'llm', label: 'Answer Generation', type: 'transform', tooltip: 'Produces a grounded soil guidance response.' },
  { id: 'answer', label: 'Guidance Answer', type: 'artifact', tooltip: 'Final answer with supporting soil knowledge.' },
]

const PIPELINE_EDGES: PipelineEdge[] = [
  // Video pipeline
  { from: 'video_lecture', to: 'saved_video', label: 'record' },
  { from: 'saved_video', to: 'whisper', label: 'transcribe' },
  { from: 'whisper', to: 'transcript', label: 'save text' },
  { from: 'transcript', to: 'clean_transcript', label: 'clean' },
  { from: 'clean_transcript', to: 'chunks', label: 'segment' },
  { from: 'chunks', to: 'embeddings', label: 'embed' },
  { from: 'embeddings', to: 'vector_index', label: 'index' },
  // Document pipeline
  { from: 'pdf_paper', to: 'doc_file', label: 'store' },
  { from: 'field_notes', to: 'doc_file', label: 'capture' },
  { from: 'lab_report', to: 'doc_file', label: 'ingest' },
  { from: 'doc_file', to: 'ocr_extract', label: 'extract text' },
  { from: 'ocr_extract', to: 'doc_text', label: 'output' },
  { from: 'doc_text', to: 'doc_clean', label: 'normalize' },
  { from: 'doc_clean', to: 'doc_chunks', label: 'segment' },
  { from: 'doc_chunks', to: 'doc_embeddings', label: 'embed' },
  { from: 'doc_embeddings', to: 'vector_index', label: 'index' },
  // Query pipeline
  { from: 'user_question', to: 'retriever', label: 'ask' },
  { from: 'retriever', to: 'vector_index', label: 'search' },
  { from: 'vector_index', to: 'relevant_chunks', label: 'return' },
  { from: 'relevant_chunks', to: 'llm', label: 'context' },
  { from: 'llm', to: 'answer', label: 'generate' },
]

// --- Colors by node type ---

const TYPE_COLORS: Record<string, { base: string; glow: string; light: string }> = {
  source: { base: '#92400e', glow: '#f59e0b', light: '#f59e0b60' },
  transform: { base: '#1e3a5f', glow: '#60a5fa', light: '#60a5fa60' },
  artifact: { base: '#064e3b', glow: '#34d399', light: '#34d39960' },
}

// --- Node sizing based on label ---

const HUB_FONT = 28
const NODE_FONT = 16

function computeNodeSize(label: string, isHub: boolean): number {
  const fontSize = isHub ? HUB_FONT : NODE_FONT
  const charWidth = fontSize * 0.58
  const lineHeight = fontSize * 1.3
  const words = label.split(' ')

  // Split into ~2 lines for wrapping
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

  // Circle must inscribe the text block: diameter = diagonal * padding
  const diagonal = Math.sqrt(textWidth * textWidth + textHeight * textHeight)
  return Math.max(Math.ceil(diagonal + fontSize * 2.2), isHub ? 200 : 130)
}

// Precompute all sizes
const NODE_SIZES: Record<string, number> = {}
for (const n of PIPELINE_NODES) {
  NODE_SIZES[n.id] = computeNodeSize(n.label, n.id === 'vector_index')
}

function getNodeSize(id: string): number {
  return NODE_SIZES[id] ?? 130
}

// --- Flow layout: 3 swim lanes converging at vector_index ---

const COL = 190 // horizontal spacing
const ROW = 170 // vertical spacing for doc sources

function computePositions(): Record<string, { x: number; y: number }> {
  const p: Record<string, { x: number; y: number }> = {}

  // Video pipeline — top lane
  const vy = -250
  p['video_lecture'] = { x: 0, y: vy }
  p['saved_video'] = { x: COL, y: vy }
  p['whisper'] = { x: COL * 2, y: vy }
  p['transcript'] = { x: COL * 3, y: vy }
  p['clean_transcript'] = { x: COL * 4, y: vy }
  p['chunks'] = { x: COL * 5, y: vy }
  p['embeddings'] = { x: COL * 6, y: vy }

  // Document pipeline — bottom lane
  const dy = 250
  p['pdf_paper'] = { x: 0, y: dy - ROW }
  p['field_notes'] = { x: 0, y: dy }
  p['lab_report'] = { x: 0, y: dy + ROW }
  p['doc_file'] = { x: COL, y: dy }
  p['ocr_extract'] = { x: COL * 2, y: dy }
  p['doc_text'] = { x: COL * 3, y: dy }
  p['doc_clean'] = { x: COL * 4, y: dy }
  p['doc_chunks'] = { x: COL * 5, y: dy }
  p['doc_embeddings'] = { x: COL * 6, y: dy }

  // Shared hub — center right
  p['vector_index'] = { x: COL * 7.5, y: 0 }

  // Query pipeline — enters from left-center, flows through hub and out right
  const qy = 0
  p['user_question'] = { x: COL * 5.5, y: qy }
  p['retriever'] = { x: COL * 6.5, y: qy }
  p['relevant_chunks'] = { x: COL * 8.5, y: qy }
  p['llm'] = { x: COL * 9.5, y: qy }
  p['answer'] = { x: COL * 10.5, y: qy }

  return p
}

// --- Custom nodes ---

interface PipelineNodeData {
  label: string
  pipelineType: 'source' | 'artifact' | 'transform'
  isHub: boolean
  highlighted: boolean
  dimmed: boolean
  [key: string]: unknown
}

function PipelineNodeComponent({ data, id }: NodeProps<Node<PipelineNodeData>>) {
  const colors = TYPE_COLORS[data.pipelineType] ?? TYPE_COLORS.artifact
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

  const activeEdges = PIPELINE_EDGES.filter(
    (e) => e.from === hoveredNode || e.to === hoveredNode,
  )

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

  const node = PIPELINE_NODES.find((n) => n.id === nodeId)
  if (!node) return null

  const pos = positions[nodeId]
  if (!pos) return null

  const size = getNodeSize(nodeId)
  const screen = flowToScreenPosition({ x: pos.x + size / 2 + 14, y: pos.y })
  const colors = TYPE_COLORS[node.type] ?? TYPE_COLORS.artifact

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

// --- Main graph ---

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
          isHub: n.id === 'vector_index',
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
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
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

export default function SoilPipelineGraph() {
  return (
    <ReactFlowProvider>
      <GraphInner />
    </ReactFlowProvider>
  )
}
