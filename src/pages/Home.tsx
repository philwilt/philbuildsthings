import Hero from '../components/Hero'
import Card from '../components/Card'
import PlaceholderImage from '../components/PlaceholderImage'

const Home = () => {
  return (
    <div>
      <Hero />

      {/* What I Do Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-4">What We Build</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
            Software, AI, tools, and physical builds shared as they&apos;re made.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Software & Systems"
              description="Production applications, cloud architecture, and reliable platforms built to solve real-world problems."
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
              description="Applied AI workflows, evaluation systems, and practical automation designed to be useful in production."
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
              description="Laser work, 3D printing, Raspberry Pi projects, and physical prototypes that connect code with the workbench."
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
      <section className="py-10 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Builds</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlaceholderImage
              title="3D Printing & Prototyping"
              gradient="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500"
              imageUrl="https://phil-builds-things.s3.us-east-1.amazonaws.com/printer-setup.jpg"
              to="/projects"
            />
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
            <PlaceholderImage
              title="Cloud & AI Systems"
              gradient="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
              imageUrl="/img/cloud-ai-robot.svg"
            />
          </div>
        </div>
      </section>

      {/* Cross-Link to Phil Takes Photos */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Phil Takes Photos</h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Phil Takes Photos is centered on infrared photography, capturing light beyond the
              visible spectrum to create surreal landscapes where familiar places feel transformed.
            </p>

            <p>
              From Pacific Northwest atmosphere to travel work across Taipei, Saigon, and Patagonia,
              each series explores the edge between documentary realism and dreamlike visual
              storytelling.
            </p>

            <p>Photography and visual stories live here:</p>
          </div>

          <div className="mt-10">
            <a
              href="https://philtakesphotos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Visit Phil Takes Photos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
