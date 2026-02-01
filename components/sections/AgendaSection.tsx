"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SectionLabel from "../primitives/SectionLabel";
import Card from "../primitives/Card";
import Badge from "../primitives/Badge";

/* Tocapu-inspired geometric icons — nested forms, no emoji */
const TrackIcon = ({ variant }: { variant: "ops" | "gen" | "fin" | "lead" }) => {
  const icons = {
    ops: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="8" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="12" width="4" height="4" fill="currentColor" />
      </svg>
    ),
    gen: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    fin: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <line x1="14" y1="2" x2="14" y2="26" stroke="currentColor" strokeWidth="1.5" />
        <line x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="6" width="16" height="16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    lead: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <polygon points="14,2 26,26 2,26" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="18" r="3" fill="currentColor" />
      </svg>
    ),
  };

  return (
    <div className="text-[var(--lat-rd)] mb-4">
      {icons[variant]}
    </div>
  );
};

const TRACKS: { name: string; description: string; icon: "ops" | "gen" | "fin" | "lead"; topics: string[] }[] = [
  {
    name: "IA Operacional",
    description: "Implementación real, no teoría",
    icon: "ops",
    topics: ["De piloto a producción", "Infraestructura a escala", "ROI medible"],
  },
  {
    name: "IA Generativa",
    description: "LLMs en productos reales",
    icon: "gen",
    topics: ["RAG en producción", "Fine-tuning enterprise", "Costos y optimización"],
  },
  {
    name: "Fintech & IA",
    description: "Casos de LATAM",
    icon: "fin",
    topics: ["Detección de fraude", "Credit scoring", "Automatización KYC"],
  },
  {
    name: "Liderazgo",
    description: "Para CTOs y Heads of AI",
    icon: "lead",
    topics: ["Construir equipos de IA", "Presupuestos y priorización", "Governance"],
  },
];

const SCHEDULE = [
  { time: "09:00", activity: "Registro y networking", type: "general" },
  { time: "09:30", activity: "Keynote principal", type: "main" },
  { time: "10:30", activity: "Tracks paralelos (3 sesiones)", type: "tracks" },
  { time: "12:00", activity: "Panel de operadores", type: "main" },
  { time: "13:00", activity: "Almuerzo y networking", type: "general" },
  { time: "14:30", activity: "Workshops prácticos", type: "workshop" },
  { time: "16:00", activity: "Casos de estudio", type: "tracks" },
  { time: "17:00", activity: "Networking estructurado", type: "general" },
];

export default function AgendaSection() {
  const { watch } = useScrollReveal();

  return (
    <section id="agenda" className="py-[var(--lat-section-py)] px-[var(--lat-section-px)]">
      <SectionLabel>Agenda</SectionLabel>

      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-[family-name:var(--lat-font-display)] text-[clamp(48px,8vw,110px)] text-[var(--lat-wh)] leading-[0.88] mb-2">
          2 Días.
        </h2>
        <p className="font-[family-name:var(--lat-font-display)] text-[clamp(28px,4vw,52px)] text-[var(--lat-rd)] leading-[0.88] mb-2">
          Mayo 7–8, 2026
        </p>
        <p className="font-light text-[clamp(14px,1.3vw,18px)] text-[var(--lat-text-secondary)] leading-relaxed max-w-[680px] mb-[clamp(4rem,8vh,8rem)]">
          Workshops prácticos, paneles con operadores reales, y networking
          estructurado.
        </p>

        {/* Tracks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(245,240,235,0.04)] mb-[clamp(4rem,8vh,8rem)]">
          {TRACKS.map((track, i) => (
            <div key={i} ref={watch} className="opacity-0" style={{ opacity: 0 }}>
              <Card className="h-full bg-[var(--lat-bk)]">
                <TrackIcon variant={track.icon} />
                <h3 className="font-[family-name:var(--lat-font-display)] text-lg text-[var(--lat-wh)] mb-1">
                  {track.name}
                </h3>
                <p className="font-normal text-base text-[rgba(245,240,235,0.45)] mb-5">
                  {track.description}
                </p>
                <div className="flex flex-col gap-2">
                  {track.topics.map((topic, j) => (
                    <Badge key={j} variant="muted">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div>
          <h3 className="font-[family-name:var(--lat-font-display)] text-base tracking-[0.2em] text-[rgba(245,240,235,0.45)] mb-8">
            FORMATO DEL DÍA
          </h3>
          {SCHEDULE.map((item, i) => (
            <div
              key={i}
              className="flex items-baseline gap-6 py-4 border-b border-[rgba(245,240,235,0.025)]"
            >
              <span className="font-[family-name:var(--lat-font-display)] text-base text-[var(--lat-rd-text)] w-16 shrink-0">
                {item.time}
              </span>
              <span className="font-normal text-base text-[var(--lat-text-secondary)]">
                {item.activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
