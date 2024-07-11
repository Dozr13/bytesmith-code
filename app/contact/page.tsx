import Form from '@/components/Form'

export default function Contact() {
  return (
    <>
      <section className='bg-gray-100 dark:bg-gray-800 py-12 flex-grow flex items-center justify-center lg:my-20'>
        <div className='container mx-auto px-4'>
          <div className='bg-white dark:bg-gray-700 p-6 rounded shadow flex flex-col justify-center'>
            <Form />
          </div>
        </div>
      </section>
    </>
  )
}
