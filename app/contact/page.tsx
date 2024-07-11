import Form from '@/components/Form'

export default function Contact() {
  return (
    <>
      <section className='bg-white dark:bg-gray-900 py-10 flex items-center justify-center'>
        <div className='container mx-auto text-center px-4'>
          <h1 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>Get in Touch</h1>
          <p className='text-lg mb-2 text-gray-700 dark:text-gray-300'>
            We&apos;re excited to hear from you! Whether you&apos;re ready to start a new project or just want to learn more about our services, we&apos;re here to help.
          </p>
          <p className='text-lg mb-2 text-gray-700 dark:text-gray-300'>
            Drop us a message and let&apos;s create something amazing together. Your journey to a stunning and effective online presence starts here!
          </p>
        </div>
      </section>
      <section className='bg-gray-100 dark:bg-gray-800 py-4 flex-grow flex items-center justify-center'>
        <div className='container mx-auto px-4'>
          <div className='bg-white dark:bg-gray-700 p-6 rounded shadow flex flex-col justify-center'>
            <Form />
          </div>
        </div>
      </section>
      <section className='bg-white dark:bg-gray-900 py-10 flex items-center justify-center h-1/6'>
        <div className='container mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>Thank You for Reaching Out!</h2>
          <p className='text-lg mb-2 text-gray-700 dark:text-gray-300'>
            We appreciate your interest in ByteSmith Code. Our team will review your message and get back to you as soon as possible. We look forward to creating something amazing together!
          </p>
        </div>
      </section>
    </>
  )
}
