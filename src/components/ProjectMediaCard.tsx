import type { PrintingProject } from '../data/printingProjects'

interface ProjectMediaCardProps {
  project: PrintingProject
}

const ProjectMediaCard = ({ project }: ProjectMediaCardProps) => {
  return (
    <article className="rounded-xl border border-gray-700 bg-gray-800/90 overflow-hidden shadow-lg shadow-black/20">
      <div className="aspect-video overflow-hidden bg-gray-900">
        <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>
        <a
          href={`https://youtu.be/${project.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors"
        >
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
          </svg>
          Watch walkthrough
        </a>
      </div>
    </article>
  )
}

export default ProjectMediaCard
