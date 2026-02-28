import SoilKnowledgeHero from '../components/soil-knowledge/SoilKnowledgeHero'
import SoilKnowledgeOverview from '../components/soil-knowledge/SoilKnowledgeOverview'
import SoilOntologyGraph from '../components/soil-knowledge/SoilOntologyGraph'
import SoilKnowledgeArchitecture from '../components/soil-knowledge/SoilKnowledgeArchitecture'
import SoilKnowledgeFeatures from '../components/soil-knowledge/SoilKnowledgeFeatures'

const SoilKnowledge = () => {
  return (
    <div>
      <SoilKnowledgeHero />
      <SoilKnowledgeOverview />
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-3">How Soil Works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything in soil is connected. Hover over any circle to see how one part of the soil
              system affects another.
            </p>
          </div>
          <SoilOntologyGraph />
          <div className="flex flex-wrap items-center justify-center gap-6 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <span className="inline-block w-5 h-px bg-gray-500 rounded" /> structural
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-5 h-0.5 bg-amber-700 rounded" /> causal
            </span>
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-5 h-px"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, #065f46 0, #065f46 4px, transparent 4px, transparent 7px)',
                }}
              />{' '}
              influence
            </span>
            <span className="text-gray-600 ml-2">Hover to explore</span>
          </div>
        </div>
      </section>
      <SoilKnowledgeArchitecture />
      <SoilKnowledgeFeatures />
    </div>
  )
}

export default SoilKnowledge
