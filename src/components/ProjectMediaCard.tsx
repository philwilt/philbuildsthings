import type { PrintingProject } from '../data/printingProjects'

interface ProjectMediaCardProps {
  project: PrintingProject
}

const ProjectMediaCard = ({ project }: ProjectMediaCardProps) => {
  return (
    <article className="rounded-2xl border border-gray-700 bg-gray-800/90 p-4 shadow-lg shadow-black/20 md:p-5">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Finished Build</p>
          <div className="aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-900">
            <img src={project.imageUrl} alt={project.title} className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Video Walkthrough</p>
          <div className="aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-900">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${project.id}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="pt-1">
          <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
          <p className="leading-relaxed text-gray-300">{project.description}</p>
        </div>
      </div>
    </article>
  )
}

export default ProjectMediaCard
