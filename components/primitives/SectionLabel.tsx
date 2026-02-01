interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`font-[family-name:var(--lat-font-body)] font-light text-[11px] tracking-[0.2em] uppercase text-[var(--lat-text-tertiary)] mb-[clamp(2.5rem,5vh,5rem)] px-[var(--lat-section-px)] ${className}`}
    >
      {children}
    </div>
  );
}
