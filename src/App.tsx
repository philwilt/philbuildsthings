import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Printing from './pages/Printing'
import CreativeTechnology from './pages/CreativeTechnology'
import Systems from './pages/Systems'
import SoilKnowledge from './pages/SoilKnowledge'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/printing" element={<Printing />} />
          <Route path="/creative-technology" element={<CreativeTechnology />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/systems/soil-knowledge" element={<SoilKnowledge />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
