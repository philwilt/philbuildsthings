import { Link } from 'react-router-dom'

interface PlaceholderImageProps {
  title: string
  gradient: string
  imageUrl?: string
  to?: string
}

const PlaceholderImage = ({ title, gradient, imageUrl, to }: PlaceholderImageProps) => {
  const isComingSoon = !to

  const content = (
    <div className="group relative overflow-hidden rounded-lg aspect-video">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className={`absolute inset-0 ${gradient}`}></div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {isComingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
            Coming Soon
          </span>
        </div>
      )}

      <div className="absolute inset-0 flex items-end p-6">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-white transform transition-transform group-hover:translate-y-0 translate-y-2">
            {title}
          </h3>
          {isComingSoon && <p className="text-sm text-gray-200/90">New project page in progress</p>}
        </div>
      </div>
      <div
        className={`absolute inset-0 border-2 transition-all duration-300 rounded-lg ${
          to ? 'border-transparent group-hover:border-primary-500' : 'border-white/10'
        }`}
      ></div>
    </div>
  )

  if (to) {
    return <Link to={to}>{content}</Link>
  }

  return content
}

export default PlaceholderImage
