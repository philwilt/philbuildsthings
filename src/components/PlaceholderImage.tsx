import { Link } from 'react-router-dom'

interface PlaceholderImageProps {
  title: string
  gradient: string
  to?: string
}

const PlaceholderImage = ({ title, gradient, to }: PlaceholderImageProps) => {
  const content = (
    <div className="group relative overflow-hidden rounded-lg aspect-video">
      <div className={`absolute inset-0 ${gradient}`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 flex items-end p-6">
        <h3 className="text-xl font-semibold text-white transform transition-transform group-hover:translate-y-0 translate-y-2">
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 transition-all duration-300 rounded-lg"></div>
    </div>
  )

  if (to) {
    return <Link to={to}>{content}</Link>
  }

  return content
}

export default PlaceholderImage
