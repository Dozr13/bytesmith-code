import Hero from '@/components/common/Hero'
import ServicesListSection from '@/components/common/ServicesListSection'
import TestimonialsSection from '@/components/main/TestimonialsSection'
import CallToActionSection from '@/components/common/CallToActionSection'

export default function Home() {
  return (
    <>
      <Hero
        title='Welcome to ByteSmith Code'
        subtitle='Elevate Your Online Presence with Stunning, Custom-Built Websites'
        buttonText='Get Started Today'
        buttonLink='/contact'
      />
      <ServicesListSection shortVersion={true} />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  )
}
