import ContactFormSection from '@/components/contact/ContactFormSection'
import OtherWaysToReachUsSection from '@/components/contact/OtherWaysToReachUsSection'
import ThankYouSection from '@/components/contact/ThankYouSection'
import Hero from '@/components/common/Hero'

export default function Contact() {
  return (
    <>
      <Hero
        title='Get in Touch'
        subtitle='We&apos;re excited to hear from you! Whether you&apos;re ready to start a new project or just want to learn more about our services, we&apos;re here to help.'
      />
      <ContactFormSection />
      <ThankYouSection />
      <OtherWaysToReachUsSection />
    </>
  )
}
