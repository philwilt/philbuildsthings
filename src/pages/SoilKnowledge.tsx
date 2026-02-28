import SoilKnowledgeHero from '../components/soil-knowledge/SoilKnowledgeHero'
import SoilKnowledgeOverview from '../components/soil-knowledge/SoilKnowledgeOverview'
import SoilKnowledgeArchitecture from '../components/soil-knowledge/SoilKnowledgeArchitecture'
import SoilKnowledgeFeatures from '../components/soil-knowledge/SoilKnowledgeFeatures'

const SoilKnowledge = () => {
  return (
    <div>
      <SoilKnowledgeHero />
      <SoilKnowledgeOverview />
      <SoilKnowledgeArchitecture />
      <SoilKnowledgeFeatures />
    </div>
  )
}

export default SoilKnowledge
