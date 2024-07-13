import Link from 'next/link'

const WorkTogetherSection: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 flex-grow pb-4'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 pt-4 pb-2 text-center text-gray-900 dark:text-white'>
          Let&apos;s Work Together
        </h2>
        <p className='text-lg mx-2 md:mx-8 lg:mx-16 text-gray-700 dark:text-gray-300'>
          I&apos;m here to help your business succeed online. Whether you need a new website or want to improve your existing one, I have the skills and experience to make it happen.{' '}
          <Link href='/contact' className='text-blue-500 underline'>
            Contact me
          </Link>{' '}
          to discuss your project and find out how ByteSmith Code can help your business grow.
        </p>
      </div>
    </section>
  )
}

export default WorkTogetherSection
