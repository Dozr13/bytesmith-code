const HowWeWorkSection: React.FC = () => {
  return (
    <section className='bg-white dark:bg-gray-900 flex-grow py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white'>How We Work</h2>
        <div className='mx-4 lg:mx-16'>
          <p className='text-lg mb-4 text-gray-700 dark:text-gray-300'>
            Our process is designed to be collaborative and transparent. We work closely with you to understand your needs and deliver a solution that exceeds your expectations.
          </p>
          <ol className='list-decimal pl-5 space-y-2 text-lg text-gray-700 dark:text-gray-300'>
            <li><span className='font-bold'>Initial Consultation:</span> We discuss your project requirements and goals.</li>
            <li><span className='font-bold'>Design and Development:</span> We create a custom design and develop your website.</li>
            <li><span className='font-bold'>Review and Feedback:</span> We review the website with you and make any necessary adjustments.</li>
            <li><span className='font-bold'>Launch and Support:</span> We launch your website and provide ongoing support and maintenance.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
