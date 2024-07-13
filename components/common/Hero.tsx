import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  buttonText?: string
  buttonLink?: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, buttonLink }) => (
  <section className='bg-white dark:bg-gray-900 flex-grow py-10'>
    <div className='container mx-auto text-center px-4'>
      <h1 className='text-5xl font-bold mb-4 text-gray-900 dark:text-white'>{title}</h1>
      <p className='text-2xl mb-4 text-gray-700 dark:text-gray-300'>{subtitle}</p>
      {buttonText && buttonLink && (
        <Link href={buttonLink} className='inline-block bg-blue-600 text-white px-8 py-4 rounded mt-4 transition-transform transform hover:scale-105 hover:bg-blue-700'>
          {buttonText}
        </Link>
      )}
    </div>
  </section>
)

export default Hero
