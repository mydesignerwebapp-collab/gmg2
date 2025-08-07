import { Navigation } from '@/components/layout/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { FAQSection } from '@/components/sections/NewsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 