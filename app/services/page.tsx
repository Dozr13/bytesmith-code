import Hero from '@/components/common/Hero'
import ServicesListSection from '@/components/common/ServicesListSection'
import HowWeWorkSection from '@/components/services/HowWeWorkSection'
import FAQSection from '@/components/services/FAQSection'
import CallToActionSection from '@/components/common/CallToActionSection'
import { getFaqs } from '@/actions/getFaqs'
import { getServices } from '@/actions/getServices'
import { FAQ, Service } from '@/types/data'

export const revalidate = 60

const Services = async () => {
  const faqs: FAQ[] = await getFaqs()
  const services: Service[] = await getServices()

  return (
    <>
      <Hero
        title='Our Services'
        subtitle='ByteSmith Code offers a range of services to help your business thrive online.'
      />
      <ServicesListSection services={services} shortVersion={false} />
      <HowWeWorkSection />
      <FAQSection faqs={faqs} />
      <CallToActionSection />
    </>
  )
}

export default Services
