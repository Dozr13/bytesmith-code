'use client'
import { useState, useEffect, useRef } from 'react'
import { sendEmail } from '@/actions/emailAction'
import { showToast } from '@/ui/helpers/toast'

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sendEmailState, setSendEmailState] = useState<{ error: string | null; success: boolean }>({
    error: null,
    success: false,
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(formRef.current!)
    const result = await sendEmail(formData)
    setSendEmailState(result)
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
      <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
      <p className='text-lg mb-4'>
        We&apos;d love to hear from you! Whether you have a question about our services, need a consultation, or just
        want to say hello, feel free to reach out.
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full p-2 border border-gray-300 text-black rounded'
            type='text'
            id='name'
            name='name'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full p-2 border border-gray-300 text-black rounded'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-bold mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            className='w-full p-2 border border-gray-300 text-black rounded'
            id='message'
            name='message'
            rows={4}
            required
          ></textarea>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded' type='submit'>
          Send
        </button>
      </form>
    </>
  )
}
