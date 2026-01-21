import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Phil Builds Things
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light">
            Software. AI Systems. Maker Projects. Real-World Engineering.
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              I'm a full-stack engineer and AI systems builder who designs and ships production
              software, intelligent pipelines, and physical maker projects — from cloud
              infrastructure and agentic AI systems to CNC, lasers, and 3D printing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/resume"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View Resume
            </Link>

            <a
              href="https://philtakesphotos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Photography & Creative Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
