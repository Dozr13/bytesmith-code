import React from 'react'
import Testimonial from './Testimonial'
import { testimonials } from '@/data/testimonials'

const TestimonialsSection: React.FC = () => {
  return (
    <section className='bg-white dark:bg-gray-900 flex-grow py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white'>What Our Clients Say</h2>
        <div className='space-y-4'>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} text={testimonial.text} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
