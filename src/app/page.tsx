import { Layout } from '@/components/layout/Layout'
import { HeroSection } from '@/components/sections/HeroSection'
import { UseCasesSection } from '@/components/sections/UseCasesSection'
import LogoCloud from '@/components/sections/LogoCloud'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { GiftCategoriesSection } from '@/components/sections/GiftCategoriesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <UseCasesSection />
      <LogoCloud />
      <HowItWorksSection />
      <GiftCategoriesSection />
      <TestimonialsSection />
    </Layout>
  )
} 