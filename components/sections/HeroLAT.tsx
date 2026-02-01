"use client";

import { useEffect, useState } from "react";
import Spotlight from "../primitives/Spotlight";
import GrainOverlay from "../primitives/GrainOverlay";

export default function HeroLAT() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Atmospheric spotlight */}
      <Spotlight size="md" intensity="normal" />
      <GrainOverlay />

      {/* Background diagonal type — Scher layer */}
      <div
        className="absolute top-[6%] left-[-5%] font-[family-name:var(--lat-font-display)] text-[clamp(110px,17vw,260px)] leading-[0.85] text-[rgba(245,240,235,0.018)] origin-top-left whitespace-nowrap pointer-events-none z-0 hidden md:block"
        aria-hidden="true"
        style={{ transform: `translateY(${scrollY * 0.05}px) rotate(-8deg)` }}
      >
        FUTURO<br />ANCESTRAL
      </div>

      {/* Year rotated on right edge */}
      <div
        className="absolute right-[clamp(1rem,3vw,3.5rem)] top-1/2 -translate-y-1/2 rotate-90 font-[family-name:var(--lat-font-display)] text-[clamp(56px,8vw,110px)] text-[rgba(245,240,235,0.025)] z-0 hidden md:block"
        aria-hidden="true"
      >
        &rsquo;26
      </div>

      {/* Vertical side text */}
      <div
        className="absolute left-[clamp(0.8rem,2vw,2.5rem)] top-1/2 font-[family-name:var(--lat-font-display)] text-[11px] text-[rgba(245,240,235,0.035)] [writing-mode:vertical-rl] tracking-[0.6em] whitespace-nowrap z-0 hidden md:block"
        aria-hidden="true"
      >
        LATIDO SUMMIT
      </div>

      {/* Location whisper */}
      <div className="relative z-[4] flex gap-3 items-center font-light text-[11px] tracking-[0.5em] text-[rgba(245,240,235,0.35)] mb-[clamp(1.5rem,3.5vh,3.5rem)]">
        <span>LIMA</span>
        <span className="text-[var(--lat-rd)] text-[1.3em]">·</span>
        <span>PERU</span>
        <span className="text-[var(--lat-rd)] text-[1.3em]">·</span>
        <span>MAYO 2026</span>
      </div>

      {/* LAT — massive, bleeding, THE poster */}
      <div
        className="relative z-[3] font-[family-name:var(--lat-font-display)] text-[clamp(180px,48vw,750px)] text-[var(--lat-rd)] leading-[0.72] tracking-[-0.02em] w-screen text-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          animation: `lat-heartbeat var(--lat-beat) ease-in-out infinite, lat-red-glow var(--lat-beat) ease-in-out infinite`,
        }}
      >
        LAT
      </div>

      {/* Tagline */}
      <div className="relative z-[3] font-light text-[clamp(14px,1.5vw,21px)] text-[rgba(245,240,235,0.45)] tracking-[0.06em] leading-[1.65] mt-[clamp(-0.5rem,-1vh,0px)] text-right pr-[clamp(2rem,10vw,14rem)] self-end">
        El continente<br />vuelve a <em className="not-italic font-medium text-[rgba(212,32,32,0.55)]">latir</em>.
      </div>

      {/* Scroll pulse */}
      <div
        className="absolute bottom-[clamp(1.5rem,3vh,3rem)] z-[3]"
        style={{ animation: "lat-float 3s ease-in-out infinite" }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-[var(--lat-rd)]"
          style={{ animation: "lat-dot-pulse var(--lat-beat) ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
