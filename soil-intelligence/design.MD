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
