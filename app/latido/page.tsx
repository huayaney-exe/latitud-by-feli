import Navigation from "@/components/sections/Navigation";
import HeroLAT from "@/components/sections/HeroLAT";
import ManifestoSection from "@/components/sections/ManifestoSection";
import StatsSection from "@/components/sections/StatsSection";
import PosterSection from "@/components/sections/PosterSection";
import Divider from "@/components/primitives/Divider";
import SpeakerShowcase from "@/components/sections/SpeakerShowcase";
import AgendaSection from "@/components/sections/AgendaSection";
import PillarsSection from "@/components/sections/PillarsSection";
import LimaSection from "@/components/sections/LimaSection";
import FAQSection from "@/components/sections/FAQSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "LATIDO '26 | El continente vuelve a latir",
  description:
    "Durante siglos, nos dijeron que el futuro se inventaba en otro lugar. LATIDO nace para desafiar esa narrativa. Primera edición: IA Operacional. Mayo 2026, Lima.",
};

export default function LatidoPage() {
  return (
    <main className="bg-[var(--lat-bk)] text-[var(--lat-wh)] font-[family-name:var(--lat-font-body)] overflow-x-hidden -webkit-font-smoothing-antialiased">
      <Navigation />
      <HeroLAT />
      <Divider variant="dot" />
      <ManifestoSection />
      <StatsSection />
      <PosterSection />
      <Divider variant="line" />
      <SpeakerShowcase />
      <Divider variant="breath" />
      <AgendaSection />
      <Divider variant="dot" />
      <PillarsSection />
      <LimaSection />
      <Divider variant="line" />
      <FAQSection />
      <Divider variant="dot" />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
