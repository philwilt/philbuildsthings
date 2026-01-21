import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-primary-400 border-b-2 border-primary-400'
      : 'text-gray-300 hover:text-white transition-colors'
  }

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
            Phil Builds Stuff
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} pb-1`}>
              Home
            </Link>
            <Link to="/resume" className={`${isActive('/resume')} pb-1`}>
              Resume
            </Link>
            <Link
              to="/projects"
              className="text-gray-500 cursor-not-allowed pb-1"
              onClick={(e) => e.preventDefault()}
              title="Coming soon"
            >
              Projects
            </Link>
            <a
              href="https://philtakesphotos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors pb-1"
            >
              Photos
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
