You are an expert front-end engineer and data visualization designer.

Your task is to generate a production-quality React visualization of a soil ontology network using React Flow.

The visualization should be visually clean, organic, and suitable for a soil science / agriculture website.

--------------------------------
GOAL
--------------------------------
Render a radial ontology graph showing soil knowledge relationships between domains and concepts.

The graph must:
- use a radial layout
- cluster nodes by soil domain
- use curved edges
- support hover highlighting
- show tooltips
- look natural and scientific (not corporate)

--------------------------------
INPUT DATA
--------------------------------
Nodes and edges are defined in json in in ./graphs


--------------------------------
VISUAL DESIGN RULES
--------------------------------

Layout:
- radial
- soil at center
- domains on inner ring
- concepts on outer ring
- cluster concepts near their domain

Node styles:
- core: large circle, dark soil brown
- domain: medium circle, domain color
- concept: small circle, lighter tint

Domain colors:
physical: #7a5c3a
biology: #4f7d39
chemistry: #4c6f8c
water: #4aa3d8
plant: #6aa84f

Edges:
- curved
- thin
- subtle color
- highlight on hover

Interaction:
- hover node → highlight connected edges + nodes
- tooltip with label
- smooth transitions

--------------------------------
OUTPUT REQUIREMENTS
--------------------------------

Return a complete React component that:

- uses React Flow
- converts the ontology JSON into nodes + edges
- calculates radial positions
- applies styling
- implements hover highlighting
- includes tooltips
- is ready to paste into a React app

Use modern React with hooks.

Do not include explanations — only code.

# Visual goal

Show soil knowledge as an interconnected system:
  • Physical structure
  • Biology
  • Chemistry
  • Water
  • Plant response

So users see cause-and-effect across soil.

# Layout strategy (very important)

Use a radial domain layout:
  • Center → Soil System
  • Ring 1 → Major domains
  • Ring 2 → Concepts
  • Ring 3 → Measurable indicators / outcomes

This mirrors how soil science is taught.

# Core ontology structure

Center
  • Soil System

Domains
  • Physical Structure
  • Biology
  • Chemistry
  • Water Dynamics
  • Plant Response


# Concept clusters (example)

Physical Structure
  • Compaction
  • Aggregation
  • Pore Space
  • Bulk Density

Biology
  • Microbial Activity
  • Organic Matter
  • Fungi
  • Roots

Chemistry
  • Nutrients
  • pH
  • CEC
  • Mineral Balance

Water
  • Infiltration
  • Retention
  • Drainage
  • Availability

Plant
  • Root Growth
  • Yield
  • Stress
  • Nutrient Uptake

# Relationship types (edge styles)

This is what makes the network meaningful.

Solid line → causal
  • compaction → reduces → pore space

Dashed line → influence
  • organic matter → improves → aggregation

Dotted line → measurement
  • bulk density → indicates → compaction

Arrow direction = effect direction


# Node visual grammar

Domain nodes
  • Large circle
  • Dark soil color
  • Bold label

Concept nodes
  • Medium circle
  • Domain color tint

Indicator nodes
  • Small circle
  • Light tint


# Domain color palette (soil-appropriate)

  • Physical → clay brown
  • Biology → moss green
  • Chemistry → mineral blue
  • Water → aqua
  • Plant → leaf green

This feels very Eastside + agricultural.

# Nodes and Edges

Located in ./graphs/

# Interaction design (this makes it shine)

Hover concept
→ highlight connected nodes + edges
→ show tooltip explanation

Click concept
→ show:
  • definition
  • related chunks
  • lecture clips
  • field observations

So ontology becomes a navigation interface.


# Example tooltip copy (site-ready)

## Compaction

Soil compression that reduces pore space and limits root growth and water movement.

## Organic Matter

Decomposed biological material that improves soil structure, water retention, and biology.


## How this connects to RAG (important narrative)

When a user asks:

“Why is my soil holding water poorly?”

The ontology maps:
  • poor retention → aggregation
  • aggregation → organic matter
  • organic matter → biology

So retrieval finds the right soil knowledge chain.


# Section headline idea

Soil knowledge as a living system

Eastside Soil maps the relationships between structure, biology, chemistry, water, and plant response — so guidance reflects how soil actually works.
