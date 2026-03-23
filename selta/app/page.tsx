import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { WhySeltaSection } from "@/components/landing/why-selta-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: '#030712' }}>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <WhySeltaSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
