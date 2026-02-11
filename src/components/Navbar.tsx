import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isCurrentPage = (paths: string[]) => {
    if (paths.includes('/')) {
      return location.pathname === '/'
    }

    return paths.some((path) => location.pathname === path || location.pathname.startsWith(`${path}/`))
  }

  const navLinkClass = (isActive: boolean) => {
    return isActive
      ? 'text-primary-400 border-b-2 border-primary-400'
      : 'text-gray-300 hover:text-white transition-colors'
  }

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-3 text-xl font-bold text-white hover:text-primary-400 transition-colors"
          >
            <img
              src="/logo.png"
              alt="Phil Builds Things logo"
              className="h-9 w-9 rounded-md object-cover ring-1 ring-white/15"
            />
            <span>Phil Builds Things</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${navLinkClass(isCurrentPage(['/']))} pb-1`}
              aria-current={isCurrentPage(['/']) ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              to="/resume"
              className={`${navLinkClass(isCurrentPage(['/resume']))} pb-1`}
              aria-current={isCurrentPage(['/resume']) ? 'page' : undefined}
            >
              Resume
            </Link>
            <Link
              to="/projects"
              className={`${navLinkClass(isCurrentPage(['/projects', '/printing']))} pb-1`}
              aria-current={isCurrentPage(['/projects', '/printing']) ? 'page' : undefined}
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
