interface CardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 transform hover:-translate-y-1">
      {icon && <div className="mb-4 text-primary-400">{icon}</div>}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

export default Card
