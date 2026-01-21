const Projects = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Projects</h1>
        <p className="text-xl text-gray-400 mb-12">Coming Soon</p>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 max-w-2xl mx-auto">
          <svg
            className="w-24 h-24 mx-auto mb-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>

          <h2 className="text-2xl font-bold text-white mb-4">Project Showcase In Development</h2>
          <p className="text-gray-400 leading-relaxed">
            This section will feature detailed case studies of software systems, AI pipelines, and
            maker projects. Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
