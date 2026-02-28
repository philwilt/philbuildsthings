const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <img
            src="/logo.png"
            alt="Phil Builds Things logo"
            className="w-20 h-20 mx-auto drop-shadow-2xl rounded-full"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Phil Builds Things
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            A hands-on workshop for software, practical AI-enabled systems, robotics and physical
            maker builds — made in public with pragmatic positivity and practical creativity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
