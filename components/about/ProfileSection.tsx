import Image from 'next/image'
import pictureOfWade from '@/public/wade-profile.jpeg'

const ProfileSection: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 flex-grow py-4'>
      <div className='container mx-auto text-center px-4'>
        <Image className='w-32 h-32 mx-auto rounded-full' src={pictureOfWade} width={200} height={200} alt='Wade Profile' />
        <h3 className='mt-4 text-xl font-bold text-gray-900 dark:text-white'>Wade</h3>
        <p className='text-gray-600 dark:text-gray-400'>Founder & Lead Developer</p>
      </div>
    </section>
  )
}

export default ProfileSection
