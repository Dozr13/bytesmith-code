import Hero from '@/components/common/Hero'
import ServicesListSection from '@/components/common/ServicesListSection'
import TestimonialsSection from '@/components/main/TestimonialSection'
import CallToActionSection from '@/components/common/CallToActionSection'
import { getServices } from '@/actions/getServices'
import { getTestimonials } from '@/actions/getTestimonials'
import { Service, Testimonial } from '@/types/data'

export const revalidate = 60

const Home = async () => {
  const services: Service[] = await getServices()
  const testimonials: Testimonial[] = await getTestimonials()

  return (
    <>
      <Hero
        title='Welcome to ByteSmith Code'
        subtitle='Elevate Your Online Presence with Stunning, Custom-Built Websites'
        buttonText='Get Started Today'
        buttonLink='/contact'
      />
      <ServicesListSection services={services} shortVersion={true} />
      <TestimonialsSection testimonials={testimonials} />
      <CallToActionSection />
    </>
  )
}

export default Home
