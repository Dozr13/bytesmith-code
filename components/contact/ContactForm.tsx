'use client'
import { useState, useEffect, useRef } from 'react'
import { sendEmail } from '@/actions/emailAction'
import { showToast } from '@/ui/helpers/toast'

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [sendEmailState, setSendEmailState] = useState<{ error: string | null; success: boolean }>({
    error: null,
    success: false,
  })
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsButtonDisabled(true) // Disable the button
    const formData = new FormData(formRef.current!)
    const result = await sendEmail(formData)
    setSendEmailState(result)

    // Re-enable the button after 30 seconds
    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 30000) // 30 seconds
  }

  useEffect(() => {
    if (sendEmailState.success) {
      showToast('success', <p>Your email has been sent!</p>)
      if (formRef.current) {
        formRef.current.reset()
      }
    }
    if (sendEmailState.error) {
      showToast('error', <p>Something went wrong, try again.</p>)
    }
  }, [sendEmailState])

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-bold mb-2 text-gray-900 dark:text-white' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full p-2 border border-gray-300 text-gray-900 dark:text-gray-100 dark:bg-gray-700 rounded'
            type='text'
            id='name'
            name='name'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-bold mb-2 text-gray-900 dark:text-white' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full p-2 border border-gray-300 text-gray-900 dark:text-gray-100 dark:bg-gray-700 rounded'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-bold mb-2 text-gray-900 dark:text-white' htmlFor='message'>
            Message
          </label>
          <textarea
            className='w-full p-2 border border-gray-300 text-gray-900 dark:text-gray-100 dark:bg-gray-700 rounded'
            id='message'
            name='message'
            rows={4}
            required
          ></textarea>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <button className='w-full lg:w-auto bg-blue-600 text-white px-4 py-2 rounded' type='submit' disabled={isButtonDisabled}>
            {isButtonDisabled ? 'Please wait...' : 'Send'}
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm