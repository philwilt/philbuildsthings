interface VideoProject {
  id: string
  title: string
  description: string
}

const projects: VideoProject[] = [
  {
    id: 'qlsJiVdXiM4',
    title: 'Lamp Prototype',
    description:
      "This is a lamp I'm working on as a prototype. Here I'm just seeing if I like the colors of the PETG Translucent with PETG Translucent Olive Green. The base is Bambu Silk+ Green but that's irrelevant to where I'm going with this. All filaments are Bambu Labs.",
  },
  {
    id: 'aJfdrzwBa-Y',
    title: 'Year of the Horse',
    description:
      'A print of the year of the horse on the Bambu. Just a fun thing to remind me of exciting things to come. Phil means lover of horses which holds a special place for me.',
  },
  {
    id: 'LibBE4F-9Fk',
    title: 'Plate Holder',
    description:
      'This is a print of a plate holder for Bambu printing plates. I printed it with PETG HF and PETG translucent lettering.',
  },
  {
    id: 'KoCL5tCQo1c',
    title: 'Magnetic Bit Holder',
    description:
      '3D print to hold those little bits out the back! It has magnet insets in the back to hold it while the machine moves.',
  },
]

const Printing = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">3D Printing & Prototyping</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring ideas through rapid prototyping, functional prints, and creative experiments
            with my Bambu Lab printer.
          </p>
        </div>

        {/* Video Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.id}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Printing
