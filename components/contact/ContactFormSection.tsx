import ContactForm from './ContactForm'

const ContactFormSection: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 py-4 flex-grow flex items-center justify-center'>
      <div className='container mx-auto px-4'>
        <div className='bg-white dark:bg-gray-700 p-6 rounded shadow flex flex-col justify-center lg:px-8'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
