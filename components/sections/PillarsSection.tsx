"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionLabel from "../primitives/SectionLabel";
import Card from "../primitives/Card";
import Badge from "../primitives/Badge";

const PILLARS = [
  {
    title: "Raíces Digitales",
    subtitle: "Tecnología + Herencia",
    description:
      "AI, blockchain, biotech — construidos desde la cosmovisión latinoamericana. No importamos soluciones; las cultivamos desde nuestras raíces.",
  },
  {
    title: "Builders Sin Fronteras",
    subtitle: "Producto + Ecosistema",
    description:
      "Fundadores, ingenieros, diseñadores que construyen desde y para América Latina. Productos globales con ADN local.",
  },
  {
    title: "Capital & Convicción",
    subtitle: "Inversión + Visión",
    description:
      "Venture capital con tesis latinoamericana. Inversores que entienden que el retorno más alto viene de apostar por lo propio.",
  },
  {
    title: "Cultura & Código",
    subtitle: "Arte + Tecnología",
    description:
      "Donde el diseño, la música, la narrativa y el código se cruzan. La cultura como sistema operativo de la innovación.",
  },
  {
    title: "El Futuro Que Nos Toca",
    subtitle: "Impacto + Escala",
    description:
      "Climatetech, govtech, healthtech para los problemas reales de la región. Innovación que no pide permiso para transformar.",
  },
];

export default function PillarsSection() {
  const { watch } = useScrollReveal();

  return (
    <section className="py-[var(--lat-section-py)] px-[var(--lat-section-px)]">
      <SectionLabel>Pilares temáticos</SectionLabel>

      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-[family-name:var(--lat-font-display)] text-[clamp(48px,8vw,110px)] text-[var(--lat-wh)] leading-[0.88] mb-4">
          Cinco ejes.
        </h2>
        <p className="font-[family-name:var(--lat-font-display)] text-[clamp(48px,8vw,110px)] text-[var(--lat-rd)] leading-[0.88] mb-[clamp(4rem,8vh,8rem)]">
          Un latido.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(245,240,235,0.04)]">
          {PILLARS.map((pillar, i) => (
            <div key={i} ref={watch} className="opacity-0" style={{ opacity: 0 }}>
              <Card className="h-full bg-[var(--lat-bk)]">
                <Badge variant="red" className="mb-6">
                  {pillar.subtitle}
                </Badge>
                <h3 className="font-[family-name:var(--lat-font-display)] text-[clamp(24px,3vw,36px)] text-[var(--lat-wh)] mb-4">
                  {pillar.title}
                </h3>
                <p className="font-light text-base leading-relaxed text-[var(--lat-text-secondary)]">
                  {pillar.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
