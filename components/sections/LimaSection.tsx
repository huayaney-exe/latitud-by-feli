"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionLabel from "../primitives/SectionLabel";

const REASONS = [
  {
    title: "Ancestral",
    text: "Cuna de Caral, heredera de los Incas, tierra de civilizaciones que inventaron el futuro miles de años antes.",
  },
  {
    title: "Contemporánea",
    text: "Capital gastronómica del mundo, epicentro cultural, una metrópoli de 10 millones vibrando con creatividad.",
  },
  {
    title: "Tecnológica",
    text: "Hub fintech en expansión, ecosistema de startups creciente, talento técnico que ya compite a nivel global.",
  },
  {
    title: "Simbólica",
    text: "El punto de encuentro entre el Pacífico y los Andes. Donde lo ancestral y lo digital convergen naturalmente.",
  },
];

export default function LimaSection() {
  const { watch } = useScrollReveal();

  return (
    <section className="py-[var(--lat-section-py)] px-[var(--lat-section-px)]">
      <SectionLabel>La sede</SectionLabel>

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(4rem,8vh,8rem)]">
          <h2 className="font-[family-name:var(--lat-font-display)] text-[clamp(64px,12vw,180px)] text-[var(--lat-wh)] leading-[0.82]">
            Lima
          </h2>
          <div className="font-light text-[clamp(11px,0.85vw,13px)] tracking-[0.3em] text-[rgba(245,240,235,0.25)]">
            -12.0464, -77.0428
          </div>
        </div>

        <p
          ref={watch}
          className="font-light text-[clamp(14px,1.3vw,18px)] text-[var(--lat-text-secondary)] leading-relaxed max-w-[680px] mb-[clamp(4rem,8vh,8rem)] opacity-0"
          style={{ opacity: 0 }}
        >
          No elegíamos una ciudad. Elegíamos un símbolo. Lima es el lugar donde
          América Latina se mira al espejo y se reconoce: ancestral,
          contemporánea, imparable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(245,240,235,0.04)]">
          {REASONS.map((reason, i) => (
            <div
              key={i}
              ref={watch}
              className="bg-[var(--lat-bk)] p-[clamp(2rem,4vw,4rem)] opacity-0"
              style={{ opacity: 0 }}
            >
              <span className="font-[family-name:var(--lat-font-display)] text-[12px] tracking-[0.25em] text-[var(--lat-rd-text)] mb-4 block">
                {reason.title.toUpperCase()}
              </span>
              <p className="font-light text-base leading-relaxed text-[var(--lat-text-secondary)]">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
