import React from 'react'
import { faqs } from '@/data/faqs'

const FAQSection: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 flex-grow py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white'>Frequently Asked Questions</h2>
        <div className='space-y-4'>
          {faqs.map((faq) => (
            <div key={faq.question} className='bg-white dark:bg-gray-700 p-6 rounded shadow'>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>{faq.question}</h3>
              <p className='text-gray-600 dark:text-gray-300'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
