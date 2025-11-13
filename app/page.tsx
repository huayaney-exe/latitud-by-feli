import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PricingSection from '@/components/PricingSection'
import SpeakerShowcase from '@/components/SpeakerShowcase'
import AgendaSection from '@/components/AgendaSection'
import SocialProof from '@/components/SocialProof'
import FAQSection from '@/components/FAQSection'
import PartnerShowcase from '@/components/PartnerShowcase'
import ROICalculator from '@/components/ROICalculator'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <Hero />
        <SocialProof />
        <PricingSection />
        <SpeakerShowcase />
        <AgendaSection />
        <ROICalculator />
        <FAQSection />
        <PartnerShowcase />
      </main>
    </>
  )
}
