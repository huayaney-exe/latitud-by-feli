'use client'

import { useState } from 'react'
import CountdownBanner from '@/components/CountdownBanner'
import TechPartnersBanner from '@/components/TechPartnersBanner'
import Navigation from '@/components/Navigation'
import HeroCentro from '@/components/HeroCentro'
import HistoriaSection from '@/components/HistoriaSection'
import BrechaSection from '@/components/BrechaSection'
import PricingSection from '@/components/PricingSection'
import SpeakerShowcase from '@/components/SpeakerShowcase'
import AgendaSection from '@/components/AgendaSection'
import SocialProof from '@/components/SocialProof'
import FAQSection from '@/components/FAQSection'
import PartnerShowcase from '@/components/PartnerShowcase'
import ROICalculator from '@/components/ROICalculator'
import WaitlistModal from '@/components/WaitlistModal'
import SponsorQualifier from '@/components/SponsorQualifier'

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isSponsorOpen, setIsSponsorOpen] = useState(false)

  return (
    <>
      <CountdownBanner />
      <Navigation
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
        onOpenSponsor={() => setIsSponsorOpen(true)}
      />
      <main className="min-h-screen bg-[#0f0a05]">
        {/* 1. Pain + Promise */}
        <HeroCentro onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        {/* 2. Problem Amplification */}
        <BrechaSection />
        {/* 3. WHO teaches (credibility) */}
        <SpeakerShowcase onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        {/* 4. WHAT you learn (value) */}
        <AgendaSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        {/* 5. Social Validation */}
        <SocialProof onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <TechPartnersBanner />
        {/* 6. Quantify Value */}
        <ROICalculator />
        {/* 7. NOW show price (they understand value) */}
        <PricingSection />
        {/* 8. Handle Objections */}
        <FAQSection />
        {/* 9. Nice-to-have story */}
        <HistoriaSection />
        {/* 10. Footer + Partners */}
        <PartnerShowcase onOpenSponsor={() => setIsSponsorOpen(true)} />
      </main>

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
      <SponsorQualifier
        isOpen={isSponsorOpen}
        onClose={() => setIsSponsorOpen(false)}
      />
    </>
  )
}
