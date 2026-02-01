"use client";

import { useState, useEffect } from "react";
import LatMark from "../primitives/LatMark";
import Button from "../primitives/Button";

const NAV_LINKS = [
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(10,10,10,0.92)] backdrop-blur-md border-b border-[rgba(245,240,235,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-[clamp(1.5rem,4vw,4rem)] h-16">
        {/* Logo + heartbeat dot */}
        <a href="#" className="no-underline flex items-center gap-2.5">
          <LatMark suffix="" size="sm" />
          <div
            className="w-1.5 h-1.5 rounded-full bg-[var(--lat-rd)]"
            style={{
              animation:
                "lat-dot-pulse var(--lat-beat) ease-in-out infinite",
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--lat-font-body)] text-[12px] font-light tracking-[0.14em] uppercase text-[var(--lat-text-secondary)] hover:text-[var(--lat-rd)] transition-colors duration-300 no-underline"
            >
              {link.label}
            </a>
          ))}
          <Button variant="filled" href="#registro">
            Registro &rarr;
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-[var(--lat-wh)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[var(--lat-wh)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[var(--lat-bk)] z-40 flex flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--lat-font-display)] text-3xl text-[var(--lat-wh)] hover:text-[var(--lat-rd)] transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <Button variant="filled" href="#registro">
            Registro &rarr;
          </Button>
        </div>
      )}
    </nav>
  );
}
