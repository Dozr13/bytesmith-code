interface TestimonialProps {
  text: string
  author: string
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => (
  <blockquote className='p-4 italic border-l-4 bg-neutral-100 dark:bg-gray-800 text-neutral-600 dark:text-neutral-300 border-neutral-500 dark:border-neutral-400 quote'>
    &quot;{text}&quot;
    <span className='block text-right font-bold text-gray-900 dark:text-white'>- {author}</span>
  </blockquote>
)

export default Testimonial
