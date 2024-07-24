import Link from 'next/link'
import ServiceCard from '@/components/services/ServiceCard'
import { Service } from '@/types/data'
import iconMapping from '@/utils/iconMapping'

interface ServicesListSectionProps {
  services: Service[]
  shortVersion?: boolean
}

const ServicesListSection: React.FC<ServicesListSectionProps> = ({ services, shortVersion = false }) => {
  const servicesToDisplay = shortVersion ? services.slice(0, 3) : services

  return (
    <section className='bg-gray-100 dark:bg-gray-800 flex-grow py-12'>
      <div className='container mx-auto px-4'>
        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-md lg:text-xl gap-8`}>
          {servicesToDisplay.map(service => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              details={shortVersion ? '' : service.details}
              icon={iconMapping[service.icon]}
            />
          ))}
        </div>
        {shortVersion && (
          <div className='flex justify-center mt-8'>
            <Link href='/services' className='inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded transition-transform transform hover:scale-105'>
              Learn More About Our Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesListSection
