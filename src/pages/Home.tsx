import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Card from '../components/Card'
import PlaceholderImage from '../components/PlaceholderImage'
import SoilKnowledgePreview from '../components/soil-knowledge/SoilKnowledgePreview'

const PHOTOS = [
  { src: 'https://d38881i5te6f0.cloudfront.net/vietnam/vietnam-2-preview.png',   alt: 'Vietnam' },
  { src: 'https://d38881i5te6f0.cloudfront.net/vietnam/vietnam-15-preview.png',  alt: 'Vietnam' },
  { src: 'https://d38881i5te6f0.cloudfront.net/vietnam/vietnam-1-preview.png',   alt: 'Vietnam' },
  { src: 'https://d38881i5te6f0.cloudfront.net/taipei/taipei-7-preview.jpg',     alt: 'Taipei' },
  { src: 'https://d38881i5te6f0.cloudfront.net/europe/europe-6-preview.png',     alt: 'Europe' },
  { src: 'https://d38881i5te6f0.cloudfront.net/yakima/yakima-9-preview.png',     alt: 'Yakima' },
  { src: 'https://d38881i5te6f0.cloudfront.net/yakima/yakima-11-preview.png',    alt: 'Yakima' },
  { src: 'https://d38881i5te6f0.cloudfront.net/yakima/yakima-16-preview.png',    alt: 'Yakima' },
]

// Fixed positions — photos are randomly assigned to these slots on each page load
const SLOTS = [
  { top: 0,   left: 0,   rotate: -5, zIndex: 1, opacity: 0.55 },
  { top: 4,   right: 4,  rotate:  4, zIndex: 1, opacity: 0.60 },
  { bottom: 0, left: 12, rotate:  3, zIndex: 1, opacity: 0.65 },
  { bottom: 4, right: 0, rotate: -3, zIndex: 1, opacity: 0.65 },
  { bottom: 20, left: 36, rotate: -2, zIndex: 2, opacity: 0.80 },
  { top: 36,  left: 60,  rotate:  1, zIndex: 3, opacity: 0.90 },
  { top: 20,  right: 20, rotate: -2, zIndex: 3, opacity: 0.90 },
  { top: 60,  left: 20,  rotate:  2, zIndex: 4, opacity: 1.00 },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const Home = () => {
  const [shuffled, setShuffled] = useState(() => shuffle(PHOTOS))
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setShuffled(shuffle(PHOTOS))
        setFading(false)
      }, 2000)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Hero />

      {/* What I Do Section */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Software & Systems"
              description="Production applications, architecture, and reliable platforms built to solve real-world problems."
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              }
            />

            <Card
              title="AI & Agentic Pipelines"
              description="Applied agentic AI-enabled workflows and practical automation designed to be useful in production."
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              }
            />

            <Card
              title="Maker Lab"
              description="3D printing, laser powers, robots, and physical prototypes that connect code with the workbench."
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Placeholder Image Grid */}
      <section className="py-6 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlaceholderImage
              title="3D Printing & Prototyping"
              gradient="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500"
              imageUrl="https://phil-builds-things.s3.us-east-1.amazonaws.com/printer-setup.jpg"
              to="/projects"
            />
            <Link
              to="/systems/soil-knowledge"
              className="group block relative overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-stone-900 via-emerald-950/50 to-stone-900 border border-emerald-800/60 hover:border-lime-400/70 transition-colors"
            >
              <div className="absolute inset-0 p-5 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-lime-300 mb-1">Live</p>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-tight">
                      Soil Knowledge AI
                    </h3>
                  </div>
                  <svg
                    className="w-4 h-4 text-emerald-400/70 group-hover:text-amber-300 transition-colors flex-shrink-0 mt-1"
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
                <p className="text-stone-400 text-xs leading-relaxed mb-2">
                  AI that maps soil biology, chemistry, and plant response into practical guidance.
                </p>
                <div className="flex-1 min-h-0 flex items-center">
                  <SoilKnowledgePreview />
                </div>
              </div>
            </Link>
            <PlaceholderImage
              title="Laser & Fabrication"
              gradient="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"
              imageUrl="https://phil-builds-things.s3.us-east-1.amazonaws.com/laser-delivery.jpg"
            />
            <PlaceholderImage
              title="Creative Technology"
              gradient="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500"
              imageUrl="https://phil-builds-things.s3.us-east-1.amazonaws.com/gaggi.jpg"
              to="/creative-technology"
            />
          </div>
        </div>
      </section>

      {/* Cross-Link to Phil Takes Photos */}
      <section className="py-16 bg-gray-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Floating image scatter — photos randomly assigned to slots on each load */}
            <div className="relative flex-shrink-0 w-80 h-72 hidden sm:block">
              {SLOTS.map((slot, i) => (
                <img
                  key={i}
                  src={shuffled[i].src}
                  alt={`${shuffled[i].alt} photography`}
                  className="absolute w-40 h-28 object-cover rounded-lg"
                  style={{
                    top: slot.top,
                    bottom: (slot as { bottom?: number }).bottom,
                    left: slot.left,
                    right: (slot as { right?: number }).right,
                    transform: `rotate(${slot.rotate}deg)`,
                    zIndex: slot.zIndex,
                    opacity: fading ? 0 : slot.opacity,
                    boxShadow: slot.zIndex >= 3 ? '0 10px 25px rgba(0,0,0,0.5)' : '0 4px 12px rgba(0,0,0,0.35)',
                    transition: 'opacity 2s ease',
                  }}
                />
              ))}
            </div>

            {/* Text + CTA */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Phil Takes Photos</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed mb-6">
                <p>
                  Infrared photography capturing light beyond the visible spectrum — surreal
                  landscapes where familiar places feel transformed.
                </p>
                <p>
                  Pacific Northwest atmosphere, Taipei, Saigon, Patagonia. Documentary realism meets
                  dreamlike visual storytelling.
                </p>
              </div>
              <a
                href="https://philtakesphotos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Visit Phil Takes Photos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
