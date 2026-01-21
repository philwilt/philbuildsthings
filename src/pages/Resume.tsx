const Resume = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Phil Wilt</h1>
          <h2 className="text-2xl text-gray-400 mb-6">
            Senior Software Engineer / AI Systems Builder / Technical Architect
          </h2>

          <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
            Download PDF Resume
          </button>
        </div>

        {/* Summary */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Summary</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Full-stack engineer and technical leader specializing in distributed systems, cloud
            architecture, and agentic AI pipelines. I design production platforms that connect
            policy, data, and execution — from SaaS-scale infrastructure to real-world maker
            systems.
          </p>
        </section>

        {/* Skills */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-3">Languages</h4>
              <p className="text-gray-300">Python, TypeScript, Ruby, Node.js, JavaScript</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-3">Frontend</h4>
              <p className="text-gray-300">React, Vite, Tailwind CSS, Next.js</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-3">Cloud & Infrastructure</h4>
              <p className="text-gray-300">AWS, GCP, Amplify, Terraform, Docker</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-3">AI/ML</h4>
              <p className="text-gray-300">
                RAG, LangGraph, Model Evaluation, Vector Search, Prompt Engineering
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-3">Hardware & Fabrication</h4>
              <p className="text-gray-300">CNC Machining, Laser Engraving, 3D Printing, CAD</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-3">Databases</h4>
              <p className="text-gray-300">PostgreSQL, MongoDB, Redis, Vector DBs</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>

          <div className="space-y-8">
            {/* Aha! */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Principal / Senior Engineer</h4>
                <span className="text-gray-400">2020 - Present</span>
              </div>
              <p className="text-primary-400 mb-3">Aha!</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Led development of distributed systems handling millions of requests daily
                </li>
                <li>
                  Architected cloud infrastructure and deployment pipelines for SaaS platform
                </li>
                <li>Mentored engineering teams on best practices and system design</li>
              </ul>
            </div>

            {/* Marshal.io */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">AI & Infrastructure Engineer</h4>
                <span className="text-gray-400">2018 - 2020</span>
              </div>
              <p className="text-primary-400 mb-3">Marshal.io</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Built intelligent data pipelines and evaluation systems</li>
                <li>Implemented RAG-based systems for knowledge retrieval</li>
                <li>Designed policy-driven execution graphs for agentic workflows</li>
              </ul>
            </div>

            {/* Samepage */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-bold text-white">Platform Engineer</h4>
                <span className="text-gray-400">2015 - 2018</span>
              </div>
              <p className="text-primary-400 mb-3">Samepage</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed real-time collaboration features and APIs</li>
                <li>Optimized database performance and query efficiency</li>
                <li>Built scalable backend services for growing user base</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Education & Certifications</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-white">Computer Science</h4>
              <p className="text-gray-400">University Name</p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-primary-400 mb-2">Continuous Learning</h4>
              <p className="text-gray-300">
                Active contributor to open-source projects. Regular attendee of tech conferences
                and maker faires. Self-directed learning in AI/ML, cloud architecture, and digital
                fabrication.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
