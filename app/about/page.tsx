import Image from 'next/image'
import Link from 'next/link'
import pictureOfWade from './wade-profile.jpeg'

export default function About() {
  return (
    <>
      <section className='bg-white dark:bg-gray-900 flex-grow py-10'>
        <div className='container mx-auto text-center px-4'>
          <h1 className='text-4xl font-bold mb-2 text-gray-900 dark:text-white'>About ByteSmith Code</h1>
          <p className='text-lg mb-2 text-gray-700 dark:text-gray-300 mx-2 lg:mx-16'>
            ByteSmith Code was founded with a mission to help small businesses establish a strong online presence. As a
            dedicated professional with a passion for web development, I understand the unique challenges faced by
            mom-and-pop shops and small businesses.
          </p>
        </div>
      </section>
      <section className='bg-gray-100 dark:bg-gray-800 flex-grow py-4'>
        <div className='container mx-auto text-center px-4'>
          <Image className='w-32 h-32 mx-auto rounded-full' src={pictureOfWade} width={200} alt='Wade Profile' />
          <h3 className='mt-4 text-xl font-bold text-gray-900 dark:text-white'>Wade</h3>
          <p className='text-gray-600 dark:text-gray-300'>Founder & Lead Developer</p>
        </div>
      </section>
      <section className='bg-white dark:bg-gray-900 flex-grow py-4'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white'>My Story</h2>
          <p className='text-lg mb-2 mx-2 md:mx-8 lg:mx-16 text-gray-700 dark:text-gray-300'>
            Hi, I&apos;m Wade, the founder and lead developer of ByteSmith Code. With years of experience in the
            industry, I specialize in creating beautiful, functional websites that meet the needs of small businesses.
            My journey began with a deep interest in technology and a desire to help local businesses thrive in the
            digital age.
          </p>
          <p className='text-lg mb-8 mx-2 md:mx-8 lg:mx-16 text-gray-700 dark:text-gray-300'>
            Over the years, I&apos;ve honed my skills in front-end and back-end development, ensuring that every website
            I create is not only visually appealing but also optimized for performance and usability. I take pride in my
            attention to detail and my commitment to delivering high-quality work.
          </p>
          <h2 className='text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white'>Why ByteSmith Code?</h2>
          <div className='flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-72 mb-8 mx-4'>
            <ul className='list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300'>
              <li>Personalized service tailored to your business needs</li>
              <li>Affordable pricing with no hidden costs</li>
            </ul>
            <ul className='list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300'>
              <li>Expertise in the latest web technologies</li>
              <li>Friendly and reliable support</li>
            </ul>
          </div>
          <section className='bg-gray-100 dark:bg-gray-800 flex-grow py-4'>
            <h2 className='text-3xl font-bold mb-8 py-4 text-center text-gray-900 dark:text-white'>
              Let&apos;s Work Together
            </h2>
            <p className='text-lg mx-2 md:mx-8 lg:mx-16 text-gray-700 dark:text-gray-300'>
              I&apos;m here to help your business succeed online. Whether you need a new website or want to improve your
              existing one, I have the skills and experience to make it happen.{' '}
              <Link href='/contact' className='text-blue-500 underline'>
                Contact me
              </Link>{' '}
              to discuss your project and find out how ByteSmith Code can help your business grow.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}
