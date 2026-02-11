const CreativeTechnology = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <h1 className="text-5xl font-bold text-white mb-4">Creative Technology</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Curious builds that blend hardware, software, and daily ritual.
          </p>
        </header>

        <article className="rounded-2xl border border-gray-700 bg-gray-800/90 p-4 shadow-lg shadow-black/20 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Finished Build
              </p>
              <div className="aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-900">
                <img
                  src="https://phil-builds-things.s3.us-east-1.amazonaws.com/gaggi.jpg"
                  alt="Gaggimate espresso machine setup"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Reference Video
              </p>
              <div className="aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-900">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/h2yZYcOFACQ"
                  title="Lance Hedrick Gaggimate video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-3xl font-bold text-white mb-3">Gaggimate</h2>
            <p className="text-gray-300 leading-relaxed mb-5">
              This is the caffeine machine that powers my curiosity. Gaggimate is an add-on kit with
              a touchscreen and controls for pressure and temperature profiling, giving full control
              over an espresso machine (Gaggia or Silva and more) for repeatable and highly tuned
              shots.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://shop.gaggimate.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-primary-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Visit Gaggimate
              </a>
              <a
                href="https://youtu.be/h2yZYcOFACQ?si=VZpcfIxYGfs4leVk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-gray-600 px-5 py-3 font-semibold text-gray-200 transition-colors hover:border-gray-500 hover:text-white"
              >
                Watch Lance Hedrick&apos;s Video
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default CreativeTechnology
