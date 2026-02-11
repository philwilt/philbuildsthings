import { printingProjects } from '../data/printingProjects'
import ProjectMediaCard from '../components/ProjectMediaCard'

const Printing = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">3D Printing & Prototyping</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring ideas through rapid prototyping, functional prints, and creative experiments
            with my Bambu Lab printer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {printingProjects.map((project) => (
            <ProjectMediaCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Printing
