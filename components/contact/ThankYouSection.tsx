const ThankYouSection: React.FC = () => {
  return (
    <section className='bg-white dark:bg-gray-900 py-10 flex items-center justify-center h-1/6'>
      <div className='container mx-auto text-center px-4'>
        <h2 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>Thank You For Reaching Out!</h2>
        <p className='text-lg mb-2 text-gray-700 dark:text-gray-300'>
          We appreciate your interest in ByteSmith Code. Our team will review your message and get back to you as soon as possible. We look forward to creating something amazing together!
        </p>
      </div>
    </section>
  )
}

export default ThankYouSection
