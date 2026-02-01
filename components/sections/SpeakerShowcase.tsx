"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionLabel from "../primitives/SectionLabel";
import Button from "../primitives/Button";

export default function SpeakerShowcase() {
  const { watch } = useScrollReveal();

  return (
    <section id="speakers" className="py-[var(--lat-section-py)] px-[var(--lat-section-px)]">
      <SectionLabel>Speakers</SectionLabel>

      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-[family-name:var(--lat-font-display)] text-[clamp(48px,8vw,110px)] text-[var(--lat-wh)] leading-[0.88] mb-2">
          Operadores,
        </h2>
        <p className="font-[family-name:var(--lat-font-display)] text-[clamp(48px,8vw,110px)] text-[var(--lat-rd)] leading-[0.88] mb-[clamp(2rem,4vh,4rem)]">
          No Conferencistas.
        </p>
        <p
          ref={watch}
          className="font-light text-[clamp(14px,1.3vw,18px)] text-[var(--lat-text-secondary)] leading-relaxed max-w-[680px] mb-[clamp(4rem,8vh,8rem)] opacity-0"
          style={{ opacity: 0 }}
        >
          Gente que opera sistemas de IA en producción. No vendedores de cursos
          ni teóricos.
        </p>

        {/* Typographic mystery — single massive element */}
        <div
          ref={watch}
          className="relative flex items-center justify-center py-[clamp(4rem,10vh,10rem)] mb-[clamp(4rem,6vh,6rem)] border-y border-[rgba(245,240,235,0.025)] opacity-0"
          style={{ opacity: 0 }}
        >
          <div
            className="font-[family-name:var(--lat-font-display)] text-[clamp(160px,30vw,400px)] text-[rgba(212,32,32,0.04)] leading-[0.8] select-none"
            style={{
              animation:
                "lat-heartbeat var(--lat-beat) ease-in-out infinite, lat-red-glow var(--lat-beat) ease-in-out infinite",
            }}
          >
            ?
          </div>

          {/* Count — anchored bottom-left */}
          <div className="absolute bottom-[clamp(2rem,4vh,4rem)] left-0">
            <span className="font-[family-name:var(--lat-font-display)] text-[clamp(48px,8vw,90px)] text-[var(--lat-rd)] leading-[0.88]">
              20+
            </span>
            <span className="block font-[family-name:var(--lat-font-display)] text-[12px] tracking-[0.25em] text-[var(--lat-text-tertiary)] mt-2">
              OPERADORES CONFIRMANDOSE
            </span>
          </div>
        </div>

        {/* Company names */}
        <div ref={watch} className="opacity-0" style={{ opacity: 0 }}>
          <p className="font-[family-name:var(--lat-font-display)] text-[12px] tracking-[0.2em] text-[var(--lat-text-tertiary)] mb-4">
            DE EMPRESAS COMO
          </p>
          <p className="font-light text-base text-[var(--lat-text-secondary)] tracking-[0.03em] mb-8">
            Google Cloud · MercadoLibre · Rappi · Fintech LATAM · Startups de IA
          </p>
          <Button variant="outline" href="#registro">
            Notificarme cuando se anuncien
          </Button>
        </div>
      </div>
    </section>
  );
}
