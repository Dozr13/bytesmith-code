import Hero from '@/components/common/Hero'
import ServicesListSection from '@/components/common/ServicesListSection'
import HowWeWorkSection from '@/components/services/HowWeWorkSection'
import FAQSection from '@/components/services/FAQSection'
import CallToActionSection from '@/components/common/CallToActionSection'

export default function Services() {
  return (
    <>
      <Hero
        title='Our Services'
        subtitle='ByteSmith Code offers a range of services to help your business thrive online.'
      />
      <ServicesListSection shortVersion={false} />
      <HowWeWorkSection />
      <FAQSection />
      <CallToActionSection />
    </>
  )
}
