interface ServiceCardProps {
  title: string
  description: string
  details: string
  icon: React.ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, details, icon }) => (
  <div className='bg-white dark:bg-gray-700 p-6 rounded shadow hover:shadow-lg transition-shadow'>
    {icon}
    <h3 className='text-2xl font-bold mb-2 text-gray-900 dark:text-white'>{title}</h3>
    <p className='text-gray-600 dark:text-gray-300'>{description}</p>
    <p className='mt-2 text-gray-600 dark:text-gray-300'>{details}</p>
  </div>
)

export default ServiceCard
