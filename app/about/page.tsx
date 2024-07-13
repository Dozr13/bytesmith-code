import MyStorySection from '@/components/about/MyStorySection'
import ProfileSection from '@/components/about/ProfileSection'
import WhyByteSmithSection from '@/components/about/WhyByteSmithSection'
import WorkTogetherSection from '@/components/about/WorkTogetherSection'
import Hero from '@/components/common/Hero'

export default function About() {
  return (
    <>
      <Hero
        title='About ByteSmith Code'
        subtitle='At ByteSmith Code, we are dedicated to helping small businesses establish a strong online presence.'
      />
      <ProfileSection />
      <MyStorySection />
      <WhyByteSmithSection />
      <WorkTogetherSection />
    </>
  )
}
