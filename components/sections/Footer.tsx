import LatMark from "../primitives/LatMark";

const LINKS = [
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "FAQ", href: "#faq" },
  { label: "Registro", href: "#registro" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(245,240,235,0.04)] px-[var(--lat-section-px)] py-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <div>
          <LatMark suffix="ido" size="md" />
          <p className="font-light text-[11px] text-[rgba(245,240,235,0.25)] tracking-[0.2em] mt-3">
            LIMA · PERÚ · MAYO 2026
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-light text-[12px] tracking-[0.1em] uppercase text-[var(--lat-text-tertiary)] hover:text-[var(--lat-rd)] transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1400px] mx-auto mt-12 pt-6 border-t border-[rgba(245,240,235,0.02)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-light text-[11px] text-[rgba(245,240,235,0.20)] tracking-[0.2em]">
          &copy; 2026 LATIDO SUMMIT
        </p>
        <p className="font-light text-[11px] text-[rgba(245,240,235,0.20)] tracking-[0.2em]">
          El continente vuelve a latir.
        </p>
      </div>
    </footer>
  );
}
