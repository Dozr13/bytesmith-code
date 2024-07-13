import Link from 'next/link'

const CallToActionSection: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 flex-grow py-12'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-8 text-gray-900 dark:text-white'>Ready to Transform Your Online Presence?</h2>
        <Link href='/contact' className='inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded transition-transform transform hover:scale-105'>
          <i className='fas fa-envelope mr-2'></i> Contact Us Today
        </Link>
      </div>
    </section>
  )
}

export default CallToActionSection
