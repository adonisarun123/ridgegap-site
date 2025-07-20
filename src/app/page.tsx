import { Layout } from '@/components/layout/Layout'
import { HeroSection } from '@/components/sections/HeroSection'
import { LearnCardsSection } from '@/components/sections/LearnCardsSection'
import { UseCasesSection } from '@/components/sections/UseCasesSection'
import { BestProductSection } from '@/components/sections/BestProductSection'
import { AssistanceSection } from '@/components/sections/AssistanceSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { MagazineSection } from '@/components/sections/MagazineSection'
import LogoCloud from '@/components/sections/LogoCloud'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LearnCardsSection />
      <UseCasesSection />
      <BestProductSection />
      <AssistanceSection />
      <ServicesSection />
      <MagazineSection />
      <LogoCloud />
      <TestimonialsSection />
    </Layout>
  )
} 