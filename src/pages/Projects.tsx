import { Link } from 'react-router-dom'
import { printingProjects } from '../data/printingProjects'
import ProjectMediaCard from '../components/ProjectMediaCard'

const Projects = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real builds from Phil Builds Things LLC.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <h2 className="text-3xl font-bold text-white">3D Printing & Prototyping</h2>
            <a
              href="https://www.youtube.com/channel/UChYzZiHtt2lw5vXJerR2MOg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-semibold"
            >
              View all on YouTube
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {printingProjects.map((project) => (
              <ProjectMediaCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">More Project Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/systems"
              className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-primary-500 transition-colors block"
            >
              <p className="text-xs uppercase tracking-wider text-primary-400 mb-3">Explore</p>
              <h3 className="text-xl font-semibold text-white mb-2">Agentic Systems</h3>
              <p className="text-gray-400">
                Case studies for production AI workflows, architecture decisions, and deployment
                patterns.
              </p>
            </Link>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <p className="text-xs uppercase tracking-wider text-primary-400 mb-3">Coming Soon</p>
              <h3 className="text-xl font-semibold text-white mb-2">Laser & Fabrication</h3>
              <p className="text-gray-400">
                Laser cutting and fabrication projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
