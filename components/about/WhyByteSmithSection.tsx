const WhyByteSmithSection: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 flex-grow py-4'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold py-4 text-center text-gray-900 dark:text-white'>Why ByteSmith Code?</h2>
        <div className='flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-72 mb-8 mx-4'>
          <ul className='list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300'>
            <li><span className='font-bold'>Personalized Service:</span> Tailored solutions for your business needs.</li>
            <li><span className='font-bold'>Affordable Pricing:</span> Transparent and competitive rates.</li>
          </ul>
          <ul className='list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300'>
            <li><span className='font-bold'>Expertise:</span> Knowledge of the latest web technologies.</li>
            <li><span className='font-bold'>Friendly Support:</span> Reliable and accessible customer service.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyByteSmithSection
