"use client";

import { useEffect, useRef, useState } from "react";

export default function StyleValidation() {
  const [scrollY, setScrollY] = useState(0);
  const observed = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("S-in")),
      { threshold: 0.06 }
    );
    observed.current.forEach((el) => el && obs.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const watch = (el: HTMLElement | null) => {
    if (el && !observed.current.includes(el)) observed.current.push(el);
  };

  return (
    <div className="S">

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* HERO — Donda floor. Red spotlight. Type IS the poster.       */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-hero">
        {/* Massive atmospheric spotlight — stadium floor glow */}
        <div className="S-spot" aria-hidden="true" />
        {/* Grain over entire hero */}
        <div className="S-grain" aria-hidden="true" />

        {/* Background type layer — Scher diagonal layer */}
        <div
          className="S-hero-bg"
          aria-hidden="true"
          style={{ transform: `translateY(${scrollY * 0.05}px) rotate(-8deg)` }}
        >
          FUTURO<br />ANCESTRAL
        </div>

        {/* Year — rotated 90deg on right edge */}
        <div className="S-hero-year" aria-hidden="true">&rsquo;26</div>

        {/* Vertical side text */}
        <div className="S-hero-side" aria-hidden="true">LATIDO SUMMIT</div>

        {/* Location whisper */}
        <div className="S-hero-loc">
          <span>LIMA</span>
          <span className="S-sep">·</span>
          <span>PERU</span>
          <span className="S-sep">·</span>
          <span>MAYO 2026</span>
        </div>

        {/* LAT — edge-to-edge, bleeding, THE identity */}
        <div
          className="S-hero-lat"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          LAT
        </div>

        {/* Tagline — overlapping, asymmetric, right-aligned */}
        <div className="S-hero-tag">
          El continente<br />vuelve a <em>latir</em>.
        </div>

        {/* Scroll pulse */}
        <div className="S-hero-scroll">
          <div className="S-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* MANIFESTO — White breath. Scher scale jumps.                 */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-manif">
        <div className="S-manif-ghost" aria-hidden="true">LAT</div>

        <div className="S-manif-body" ref={watch}>
          <p className="S-manif-q" aria-hidden="true">&ldquo;</p>
          <p className="S-manif-sm">Durante siglos,</p>
          <p className="S-manif-sm">nos dijeron que el futuro</p>
          <p className="S-manif-xl">SE INVENTABA</p>
          <p className="S-manif-sm">en otro lugar.&rdquo;</p>
        </div>

        <div className="S-manif-foot">
          <div className="S-manif-rule" />
          <p className="S-manif-echo">
            Pero el{" "}
            <span className="S-lat-mark">LAT</span>
            <span className="S-lat-fade">ido</span> nunca se detuvo.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* STATS — Numbers that PUNCH. Asymmetric alignment.            */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-stats">
        <div className="S-stat" ref={watch}>
          <div className="S-stat-n">200,000</div>
          <div className="S-stat-meta">
            <span className="S-stat-lbl">HABITANTES</span>
            <span className="S-stat-d">
              Tenochtitlan. Más grande
              <br />
              que cualquier ciudad europea.
            </span>
          </div>
        </div>

        <div className="S-stat S-stat--alt" ref={watch}>
          <div className="S-stat-n S-stat-n--red">
            30,000<span className="S-stat-u">km</span>
          </div>
          <div className="S-stat-meta">
            <span className="S-stat-lbl">QHAPAQ ÑAN</span>
            <span className="S-stat-d">
              La red vial más avanzada
              <br />
              del mundo pre-moderno.
            </span>
          </div>
        </div>

        <div className="S-stat" ref={watch}>
          <div className="S-stat-n">5,000</div>
          <div className="S-stat-meta">
            <span className="S-stat-lbl">AÑOS</span>
            <span className="S-stat-d">Caral. Contemporánea con Egipto.</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* POSTER — Pure Scher: dense, overlapping, rotated, RED.       */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-poster">
        <div className="S-poster-bg1" aria-hidden="true">
          NO PEDIMOS
          <br />
          PERMISO
        </div>
        <div className="S-poster-bg2" aria-hidden="true">CONSTRUIMOS</div>
        <div className="S-poster-main">FUTURO</div>
        <div className="S-poster-cap">
          650 millones de razones para latir.
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* SCALE DRAMA — The core Scher lesson                          */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-drama">
        <div className="S-drama-yr" aria-hidden="true">2026</div>
        <div className="S-drama-big" ref={watch}>
          FUTURO
        </div>
        <div className="S-drama-sm" ref={watch}>
          ancestral
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* FRAGMENTS — The LAT DNA system                               */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-frags" ref={watch}>
        <div className="S-frags-head">
          <span className="S-frags-lbl">El sistema</span>
          <span className="S-frags-lat">LAT</span>
        </div>
        <div className="S-frags-g">
          {[
            { w: "ido", m: "El pulso" },
            { w: "inoamérica", m: "El continente" },
            { w: "itud", m: "La posición" },
          ].map((f) => (
            <div className="S-frag" key={f.w}>
              <div className="S-frag-w">
                <span className="S-lat-mark">LAT</span>
                <span className="S-lat-fade">{f.w}</span>
              </div>
              <div className="S-frag-m">{f.m}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TYPE SPECIMEN                                                 */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-spec" ref={watch}>
        <div className="S-lbl">Tipografía</div>
        <div className="S-spec-row">
          <span className="S-spec-tag">900</span>
          <span className="S-spec-disp">NO PEDIMOS PERMISO.</span>
        </div>
        <div className="S-spec-row">
          <span className="S-spec-tag">700</span>
          <span className="S-spec-bold">
            Tecnología con memoria. Innovación con raíz.
          </span>
        </div>
        <div className="S-spec-row">
          <span className="S-spec-tag">300</span>
          <span className="S-spec-light">
            650 millones de razones para latir. El código tiene acento.
          </span>
        </div>
        <div className="S-spec-row">
          <span className="S-spec-tag">100</span>
          <span className="S-spec-thin">
            -12.0464, -77.0428 — Lima, Perú — Mayo 2026
          </span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* PALETTE                                                       */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-pal" ref={watch}>
        <div className="S-lbl">Paleta</div>
        <div className="S-pal-grid">
          <div className="S-sw S-sw--bk">
            <span className="S-sw-hex">#0A0A0A</span>
            <span className="S-sw-name">Silencio</span>
          </div>
          <div className="S-sw S-sw--rd">
            <span className="S-sw-hex">#D42020</span>
            <span className="S-sw-name">Latido</span>
          </div>
          <div className="S-sw S-sw--wh">
            <span className="S-sw-hex">#F5F0EB</span>
            <span className="S-sw-name">Respiro</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* INTERACTIONS                                                  */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-act" ref={watch}>
        <div className="S-lbl">Interacciones</div>
        <div className="S-act-row">
          <button className="S-btn S-btn--f">UNIRME AL LATIDO &rarr;</button>
          <button className="S-btn S-btn--o">PRE-REGISTRO</button>
          <a href="#" className="S-link">
            Ver agenda completa &rarr;
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* FINAL BEAT — Full atmospheric close                          */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="S-final">
        <div className="S-spot S-spot--end" aria-hidden="true" />
        <div className="S-grain" aria-hidden="true" />
        <div className="S-final-lat" ref={watch}>
          LAT
        </div>
        <div className="S-final-sub" ref={watch}>
          El continente vuelve a latir.
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* STYLES                                                        */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@100;200;300;400;500;700;900&display=swap");

        :root {
          --bk: #0a0a0a;
          --wh: #f5f0eb;
          --rd: #d42020;
          --rd-dk: #b81a1a;
          --D: "Anton", Impact, "Arial Black", sans-serif;
          --B: "Inter", system-ui, sans-serif;
          --beat: 1.8s;
          --ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ═══ RESET ═══ */
        .S {
          background: var(--bk);
          color: var(--wh);
          font-family: var(--B);
          overflow-x: hidden;
          position: relative;
          -webkit-font-smoothing: antialiased;
        }
        .S *,
        .S *::before,
        .S *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ═══ KEYFRAMES ═══ */
        @keyframes heartbeat {
          0%,28%,100% { transform: scale(1); }
          7% { transform: scale(1.018); }
          21% { transform: scale(1.008); }
        }
        @keyframes redGlow {
          0%,28%,100% { text-shadow: 0 0 0 transparent; }
          7% { text-shadow: 0 0 80px rgba(212,32,32,0.5), 0 0 200px rgba(212,32,32,0.15); }
          21% { text-shadow: 0 0 40px rgba(212,32,32,0.25); }
        }
        @keyframes spotBreath {
          0%,28%,100% { opacity: 0.9; transform: translate(-50%,0) scaleY(1); }
          7% { opacity: 1; transform: translate(-50%,0) scaleY(1.06); }
          21% { opacity: 0.94; transform: translate(-50%,0) scaleY(1.03); }
        }
        @keyframes dotPulse {
          0%,28%,100% { opacity: 0.12; box-shadow: none; }
          7% { opacity: 1; box-shadow: 0 0 20px 6px rgba(212,32,32,0.5); }
          21% { opacity: 0.4; box-shadow: 0 0 8px 2px rgba(212,32,32,0.15); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(14px); opacity: 0.6; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ═══ SCROLL REVEAL ═══ */
        .S-in { animation: slideUp 0.7s var(--ease) forwards !important; }

        /* ═══ SHARED ═══ */
        .S-lat-mark {
          font-family: var(--D);
          color: var(--rd);
          font-size: 1.1em;
          letter-spacing: 0.02em;
        }
        .S-lat-fade { font-weight: 200; color: rgba(245,240,235,0.18); }
        .S-lbl {
          font-weight: 100; font-size: 9px;
          letter-spacing: 0.6em; text-transform: uppercase;
          color: rgba(245,240,235,0.07);
          margin-bottom: clamp(2.5rem, 5vh, 5rem);
          padding-left: clamp(2rem, 5vw, 6rem);
        }
        .S-sep { color: var(--rd); font-size: 1.3em; }
        .S-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--rd);
          animation: dotPulse var(--beat) ease-in-out infinite;
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* HERO                                                          */
        /* ══════════════════════════════════════════════════════════════ */
        .S-hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          overflow: hidden;
        }

        /* ─── ATMOSPHERIC SPOTLIGHT — Donda stadium floor ─── */
        .S-spot {
          position: absolute;
          bottom: -8%;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 55vh;
          pointer-events: none;
          z-index: 1;
          animation: spotBreath var(--beat) ease-in-out infinite;
          background:
            radial-gradient(ellipse 30% 50% at 50% 90%, rgba(212,32,32,0.7) 0%, rgba(212,32,32,0) 70%),
            radial-gradient(ellipse 50% 55% at 50% 80%, rgba(212,32,32,0.28) 0%, transparent 70%),
            radial-gradient(ellipse 85% 65% at 50% 95%, rgba(212,32,32,0.09) 0%, transparent 65%);
        }
        .S-spot--end {
          height: 65vh;
          bottom: -10%;
        }

        /* ─── GRAIN TEXTURE ─── */
        .S-grain {
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
          mix-blend-mode: overlay;
          opacity: 0.3;
          pointer-events: none;
          z-index: 2;
        }

        /* ─── BACKGROUND TYPE — Scher diagonal ─── */
        .S-hero-bg {
          position: absolute;
          top: 6%; left: -5%;
          font-family: var(--D);
          font-size: clamp(110px, 17vw, 260px);
          line-height: 0.85;
          color: rgba(245,240,235,0.018);
          transform-origin: top left;
          white-space: nowrap;
          pointer-events: none; z-index: 0;
        }

        /* ─── YEAR rotated on right edge ─── */
        .S-hero-year {
          position: absolute;
          right: clamp(1rem, 3vw, 3.5rem); top: 50%;
          transform: translateY(-50%) rotate(90deg);
          font-family: var(--D);
          font-size: clamp(56px, 8vw, 110px);
          color: rgba(245,240,235,0.025);
          z-index: 0;
        }

        /* ─── VERTICAL SIDE TEXT ─── */
        .S-hero-side {
          position: absolute;
          left: clamp(0.8rem, 2vw, 2.5rem); top: 50%;
          font-family: var(--D); font-size: 11px;
          color: rgba(245,240,235,0.035);
          writing-mode: vertical-rl;
          letter-spacing: 0.6em;
          white-space: nowrap; z-index: 0;
        }

        /* ─── LOCATION ─── */
        .S-hero-loc {
          position: relative; z-index: 3;
          display: flex; gap: 0.8rem; align-items: center;
          font-weight: 200; font-size: 9px;
          letter-spacing: 0.5em;
          color: rgba(245,240,235,0.12);
          margin-bottom: clamp(1.5rem, 3.5vh, 3.5rem);
        }

        /* ─── LAT — massive, bleeding, THE poster ─── */
        .S-hero-lat {
          position: relative; z-index: 3;
          font-family: var(--D);
          font-size: clamp(260px, 58vw, 900px);
          color: var(--rd);
          line-height: 0.72;
          letter-spacing: -0.02em;
          width: 100vw; text-align: center;
          animation: heartbeat var(--beat) ease-in-out infinite,
                     redGlow var(--beat) ease-in-out infinite;
        }

        /* ─── TAGLINE ─── */
        .S-hero-tag {
          position: relative; z-index: 3;
          font-weight: 200;
          font-size: clamp(14px, 1.5vw, 21px);
          color: rgba(245,240,235,0.2);
          letter-spacing: 0.06em; line-height: 1.65;
          margin-top: clamp(-0.5rem, -1vh, 0);
          text-align: right;
          padding-right: clamp(2rem, 10vw, 14rem);
          align-self: flex-end;
        }
        .S-hero-tag em {
          font-style: normal; font-weight: 500;
          color: rgba(212,32,32,0.55);
        }

        .S-hero-scroll {
          position: absolute;
          bottom: clamp(1.5rem, 3vh, 3rem);
          z-index: 3;
          animation: float 3s ease-in-out infinite;
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* MANIFESTO                                                     */
        /* ══════════════════════════════════════════════════════════════ */
        .S-manif {
          position: relative;
          background: var(--wh); color: var(--bk);
          padding: clamp(6rem, 14vh, 14rem) clamp(2rem, 8vw, 10rem);
          overflow: hidden;
        }
        .S-manif-ghost {
          position: absolute;
          top: 50%; right: -8%;
          transform: translateY(-50%) rotate(-4deg);
          font-family: var(--D);
          font-size: clamp(280px, 45vw, 720px);
          color: rgba(10,10,10,0.035);
          line-height: 0.78;
          pointer-events: none; white-space: nowrap;
        }
        .S-manif-body {
          position: relative; z-index: 1;
          max-width: 1100px;
        }
        .S-manif-q {
          font-family: var(--D);
          font-size: clamp(80px, 13vw, 200px);
          color: var(--rd);
          line-height: 0.45;
          margin-bottom: -0.05em;
          margin-left: -0.06em;
        }
        .S-manif-sm {
          font-family: var(--D);
          font-size: clamp(34px, 5vw, 72px);
          line-height: 1.06; color: var(--bk);
        }
        .S-manif-xl {
          font-family: var(--D);
          font-size: clamp(64px, 13vw, 210px);
          line-height: 0.88; color: var(--rd);
          margin: 0.06em 0;
          margin-left: -0.03em;
          white-space: nowrap;
        }
        .S-manif-foot {
          position: relative; z-index: 1;
          margin-top: clamp(4rem, 8vh, 8rem);
        }
        .S-manif-rule {
          width: clamp(40px, 5vw, 70px);
          height: 2px; background: var(--rd);
          margin-bottom: 1.8rem;
        }
        .S-manif-echo {
          font-weight: 200;
          font-size: clamp(13px, 1.2vw, 17px);
          color: rgba(10,10,10,0.25);
          letter-spacing: 0.05em;
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* STATS                                                         */
        /* ══════════════════════════════════════════════════════════════ */
        .S-stats {
          padding: clamp(6rem, 12vh, 14rem) clamp(2rem, 6vw, 8rem);
          max-width: 1400px; margin: 0 auto;
        }
        .S-stat {
          position: relative;
          padding: clamp(2rem, 4vh, 4.5rem) 0;
          border-bottom: 1px solid rgba(245,240,235,0.025);
        }
        .S-stat-n {
          font-family: var(--D);
          font-size: clamp(90px, 20vw, 300px);
          line-height: 0.78;
          letter-spacing: -0.02em;
          color: var(--wh);
        }
        .S-stat-n--red { color: var(--rd); }
        .S-stat-u {
          font-size: 0.22em;
          color: rgba(245,240,235,0.15);
          margin-left: 0.08em;
        }
        .S-stat-meta {
          display: flex; flex-direction: column;
          gap: 0.4rem;
          margin-top: clamp(0.5rem, 1vh, 1rem);
          padding-left: clamp(0px, 1vw, 1rem);
        }
        .S-stat-lbl {
          font-family: var(--D); font-size: 11px;
          letter-spacing: 0.25em;
          color: rgba(245,240,235,0.3);
        }
        .S-stat-d {
          font-weight: 200;
          font-size: clamp(11px, 0.95vw, 14px);
          color: rgba(245,240,235,0.1);
          line-height: 1.6;
        }
        .S-stat--alt { text-align: right; }
        .S-stat--alt .S-stat-meta {
          align-items: flex-end;
          padding-left: 0;
          padding-right: clamp(0px, 1vw, 1rem);
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* POSTER — Scher: dense, overlapping, rotated, RED             */
        /* ══════════════════════════════════════════════════════════════ */
        .S-poster {
          position: relative;
          height: clamp(420px, 72vh, 720px);
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          background: var(--rd);
        }
        .S-poster-bg1 {
          position: absolute;
          font-family: var(--D);
          font-size: clamp(80px, 14vw, 220px);
          color: rgba(10,10,10,0.12);
          top: 5%; left: -3%;
          line-height: 0.88;
          transform: rotate(-3deg);
          white-space: nowrap;
          pointer-events: none;
        }
        .S-poster-bg2 {
          position: absolute;
          font-family: var(--D);
          font-size: clamp(60px, 10vw, 160px);
          color: rgba(245,240,235,0.06);
          bottom: 10%; right: -2%;
          transform: rotate(2deg);
          white-space: nowrap;
          pointer-events: none;
        }
        .S-poster-main {
          font-family: var(--D);
          font-size: clamp(150px, 30vw, 480px);
          color: var(--wh);
          line-height: 0.76;
          z-index: 1;
        }
        .S-poster-cap {
          position: absolute;
          bottom: clamp(2rem, 4vh, 4rem);
          left: clamp(2rem, 5vw, 6rem);
          font-weight: 200;
          font-size: clamp(11px, 1vw, 14px);
          color: rgba(245,240,235,0.28);
          letter-spacing: 0.05em;
          z-index: 2;
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* SCALE DRAMA                                                   */
        /* ══════════════════════════════════════════════════════════════ */
        .S-drama {
          position: relative; text-align: center;
          padding: clamp(8rem, 16vh, 18rem) 0;
          overflow: hidden;
        }
        .S-drama-yr {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--D);
          font-size: clamp(200px, 50vw, 800px);
          color: rgba(245,240,235,0.01);
          pointer-events: none; white-space: nowrap;
        }
        .S-drama-big {
          font-family: var(--D);
          font-size: clamp(140px, 36vw, 600px);
          line-height: 0.76;
          letter-spacing: 0.02em;
          color: var(--wh);
          position: relative; z-index: 1;
        }
        .S-drama-sm {
          font-weight: 100;
          font-size: clamp(10px, 1vw, 14px);
          letter-spacing: 0.9em;
          text-transform: lowercase;
          color: rgba(245,240,235,0.05);
          margin-top: 2rem;
          position: relative; z-index: 1;
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* FRAGMENTS                                                     */
        /* ══════════════════════════════════════════════════════════════ */
        .S-frags { padding: clamp(5rem, 10vh, 10rem) 0; }
        .S-frags-head {
          display: flex; align-items: baseline; gap: 1.5rem;
          padding: 0 clamp(2rem, 5vw, 6rem);
          margin-bottom: clamp(3rem, 5vh, 5rem);
        }
        .S-frags-lbl {
          font-weight: 100; font-size: 10px;
          letter-spacing: 0.5em; text-transform: uppercase;
          color: rgba(245,240,235,0.08);
        }
        .S-frags-lat {
          font-family: var(--D);
          font-size: clamp(48px, 7vw, 100px);
          color: var(--rd); line-height: 0.8;
        }
        .S-frags-g {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(245,240,235,0.04);
        }
        .S-frag {
          padding: clamp(3rem, 6vh, 7rem) clamp(2rem, 3vw, 4rem);
          border-right: 1px solid rgba(245,240,235,0.04);
          transition: background 0.5s;
        }
        .S-frag:last-child { border-right: none; }
        .S-frag:hover { background: rgba(212,32,32,0.02); }
        .S-frag-w {
          font-size: clamp(32px, 4.5vw, 68px);
          line-height: 1; margin-bottom: 2rem;
        }
        .S-frag-m {
          font-weight: 100; font-size: 9px;
          letter-spacing: 0.4em; text-transform: uppercase;
          color: rgba(245,240,235,0.06);
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* TYPE SPECIMEN                                                 */
        /* ══════════════════════════════════════════════════════════════ */
        .S-spec {
          padding: clamp(5rem, 10vh, 10rem) clamp(2rem, 5vw, 6rem);
          max-width: 1300px; margin: 0 auto;
        }
        .S-spec-row {
          padding: clamp(1.5rem, 2.5vh, 3rem) 0;
          border-bottom: 1px solid rgba(245,240,235,0.02);
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 2rem; align-items: baseline;
        }
        .S-spec-tag {
          font-weight: 200; font-size: 9px;
          letter-spacing: 0.2em;
          color: rgba(245,240,235,0.05);
        }
        .S-spec-disp {
          font-family: var(--D);
          font-size: clamp(44px, 7vw, 100px);
          line-height: 0.92;
          letter-spacing: -0.01em;
        }
        .S-spec-bold {
          font-weight: 700;
          font-size: clamp(20px, 2.8vw, 40px);
          line-height: 1.15;
        }
        .S-spec-light {
          font-weight: 300;
          font-size: clamp(14px, 1.3vw, 18px);
          color: rgba(245,240,235,0.35);
          line-height: 1.7; max-width: 600px;
        }
        .S-spec-thin {
          font-weight: 100;
          font-size: clamp(9px, 0.85vw, 12px);
          letter-spacing: 0.3em;
          color: rgba(245,240,235,0.1);
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* PALETTE                                                       */
        /* ══════════════════════════════════════════════════════════════ */
        .S-pal {
          padding: clamp(5rem, 10vh, 10rem) clamp(2rem, 5vw, 6rem);
        }
        .S-pal-grid {
          display: grid;
          grid-template-columns: 2fr 3fr 2fr;
          height: clamp(180px, 28vh, 380px);
          gap: 3px;
        }
        .S-sw {
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 1.8rem; position: relative; overflow: hidden;
        }
        .S-sw--bk { background: var(--bk); border: 1px solid rgba(245,240,235,0.03); }
        .S-sw--rd { background: var(--rd); animation: heartbeat var(--beat) ease-in-out infinite; }
        .S-sw--wh { background: var(--wh); }
        .S-sw-hex { font-weight: 300; font-size: 12px; letter-spacing: 0.08em; }
        .S-sw-name {
          font-weight: 100; font-size: 8px;
          letter-spacing: 0.35em; text-transform: uppercase;
          margin-top: 0.35rem;
        }
        .S-sw--bk .S-sw-hex, .S-sw--rd .S-sw-hex { color: rgba(245,240,235,0.4); }
        .S-sw--bk .S-sw-name, .S-sw--rd .S-sw-name { color: rgba(245,240,235,0.12); }
        .S-sw--wh .S-sw-hex { color: rgba(10,10,10,0.3); }
        .S-sw--wh .S-sw-name { color: rgba(10,10,10,0.15); }

        /* ══════════════════════════════════════════════════════════════ */
        /* INTERACTIONS                                                  */
        /* ══════════════════════════════════════════════════════════════ */
        .S-act {
          padding: clamp(3rem, 5vh, 5rem) clamp(2rem, 5vw, 6rem);
        }
        .S-act-row {
          display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;
        }
        .S-btn {
          font-family: var(--B); font-size: 11px;
          letter-spacing: 0.14em; cursor: pointer;
          transition: all 0.3s;
        }
        .S-btn--f {
          background: var(--rd); color: var(--wh);
          border: none; font-weight: 600;
          padding: 1.1rem 2.8rem;
        }
        .S-btn--f:hover {
          background: var(--rd-dk);
          box-shadow: 0 0 60px rgba(212,32,32,0.35);
          transform: translateY(-1px);
        }
        .S-btn--o {
          background: transparent;
          color: rgba(245,240,235,0.35);
          border: 1px solid rgba(245,240,235,0.06);
          font-weight: 300;
          padding: 1rem 2.4rem;
        }
        .S-btn--o:hover {
          border-color: var(--rd); color: var(--rd);
          box-shadow: 0 0 30px rgba(212,32,32,0.06);
        }
        .S-link {
          font-weight: 300; font-size: 12px;
          color: rgba(245,240,235,0.18);
          text-decoration: none;
          letter-spacing: 0.05em;
          position: relative;
          transition: color 0.3s;
        }
        .S-link::after {
          content: ''; position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: var(--rd);
          transition: width 0.4s var(--ease);
        }
        .S-link:hover { color: var(--rd); }
        .S-link:hover::after { width: 100%; }

        /* ══════════════════════════════════════════════════════════════ */
        /* FINAL BEAT                                                    */
        /* ══════════════════════════════════════════════════════════════ */
        .S-final {
          position: relative; min-height: 90vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          overflow: hidden;
        }
        .S-final-lat {
          position: relative; z-index: 3;
          font-family: var(--D);
          font-size: clamp(280px, 62vw, 960px);
          color: var(--rd);
          line-height: 0.72;
          letter-spacing: -0.02em;
          animation: heartbeat var(--beat) ease-in-out infinite,
                     redGlow var(--beat) ease-in-out infinite;
        }
        .S-final-sub {
          position: relative; z-index: 3;
          font-weight: 200;
          font-size: clamp(12px, 1.1vw, 16px);
          color: rgba(245,240,235,0.15);
          letter-spacing: 0.25em;
          margin-top: clamp(2rem, 4vh, 4rem);
        }

        /* ══════════════════════════════════════════════════════════════ */
        /* RESPONSIVE                                                    */
        /* ══════════════════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          .S-hero-lat { font-size: clamp(180px, 62vw, 400px); }
          .S-hero-side, .S-hero-year, .S-hero-bg { display: none; }
          .S-hero-tag {
            text-align: center; align-self: center; padding-right: 0;
          }
          .S-manif-xl {
            font-size: clamp(50px, 16vw, 120px); white-space: normal;
          }
          .S-stat--alt { text-align: left !important; }
          .S-stat--alt .S-stat-meta { align-items: flex-start; }
          .S-frags-g { grid-template-columns: 1fr; }
          .S-frag {
            border-right: none;
            border-bottom: 1px solid rgba(245,240,235,0.04);
          }
          .S-frag:last-child { border-bottom: none; }
          .S-pal-grid { grid-template-columns: 1fr; height: auto; }
          .S-sw { min-height: 100px; }
          .S-spec-row { grid-template-columns: 1fr; gap: 0.4rem; }
          .S-spec-tag { display: none; }
          .S-poster { height: clamp(300px, 55vh, 480px); }
          .S-poster-bg1 { font-size: clamp(50px, 18vw, 120px); }
          .S-poster-bg2 { font-size: clamp(40px, 14vw, 100px); }
          .S-poster-main { font-size: clamp(100px, 38vw, 260px); }
          .S-final-lat { font-size: clamp(180px, 62vw, 400px); }
        }
      `}</style>
    </div>
  );
}
