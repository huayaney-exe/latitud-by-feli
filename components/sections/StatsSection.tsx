"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionLabel from "../primitives/SectionLabel";

const STATS = [
  {
    number: "200,000",
    unit: "+",
    label: "TENOCHTITLÁN",
    detail: "Más grande que cualquier ciudad europea de su época.",
    red: false,
    alt: false,
  },
  {
    number: "30,000",
    unit: "km",
    label: "QHAPAQ ÑAN",
    detail: "La red vial más avanzada del mundo premoderno.",
    red: true,
    alt: true,
  },
  {
    number: "5,000",
    unit: "años",
    label: "CARAL",
    detail: "La civilización más antigua de América, contemporánea de Egipto.",
    red: false,
    alt: false,
  },
];

export default function StatsSection() {
  const { watch } = useScrollReveal();

  return (
    <section className="py-[var(--lat-section-py)] px-[clamp(2rem,6vw,8rem)] max-w-[1400px] mx-auto">
      <SectionLabel>Antes de 1492</SectionLabel>

      {STATS.map((stat, i) => (
        <div
          key={i}
          ref={watch}
          className={`relative py-[clamp(2rem,4vh,4.5rem)] border-b border-[rgba(245,240,235,0.025)] opacity-0 ${stat.alt ? "text-right" : ""}`}
          style={{ opacity: 0 }}
        >
          <div
            className={`font-[family-name:var(--lat-font-display)] text-[clamp(90px,20vw,300px)] leading-[0.78] tracking-[-0.02em] ${stat.red ? "text-[var(--lat-rd)]" : "text-[var(--lat-wh)]"}`}
          >
            {stat.number}
            <span className="text-[0.22em] text-[rgba(245,240,235,0.30)] ml-[0.08em]">
              {stat.unit}
            </span>
          </div>
          <div
            className={`flex flex-col gap-1.5 mt-[clamp(0.5rem,1vh,1rem)] ${stat.alt ? "items-end pr-[clamp(0px,1vw,1rem)]" : "pl-[clamp(0px,1vw,1rem)]"}`}
          >
            <span className="font-[family-name:var(--lat-font-display)] text-[12px] tracking-[0.25em] text-[rgba(245,240,235,0.45)]">
              {stat.label}
            </span>
            <span className="font-light text-[clamp(13px,0.95vw,16px)] text-[rgba(245,240,235,0.40)] leading-relaxed">
              {stat.detail}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
