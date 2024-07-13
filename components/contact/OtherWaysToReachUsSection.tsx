import SocialMediaLinks from './SocialMediaLinks'

const OtherWaysToReachUsSection: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 py-4 flex-grow flex items-center justify-center'>
      <div className='container mx-auto px-4'>
        <h3 className='text-2xl text-center font-bold mb-4 text-gray-900 dark:text-white'>Other Ways to Reach Us</h3>
        <SocialMediaLinks />
      </div>
    </section>
  )
}

export default OtherWaysToReachUsSection
