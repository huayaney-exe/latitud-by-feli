export default function PosterSection() {
  return (
    <section className="relative h-[clamp(420px,72vh,720px)] overflow-hidden flex items-center justify-center bg-[var(--lat-rd)]">
      {/* Background layer 1 — rotated text */}
      <div
        className="absolute font-[family-name:var(--lat-font-display)] text-[clamp(80px,14vw,220px)] text-[rgba(10,10,10,0.12)] top-[5%] left-[-3%] leading-[0.88] -rotate-3 whitespace-nowrap pointer-events-none"
        aria-hidden="true"
      >
        NO PEDIMOS PERMISO<br />
        NO PEDIMOS PERMISO<br />
        NO PEDIMOS PERMISO
      </div>

      {/* Background layer 2 — counter-rotated */}
      <div
        className="absolute font-[family-name:var(--lat-font-display)] text-[clamp(60px,10vw,160px)] text-[rgba(245,240,235,0.06)] bottom-[10%] right-[-2%] rotate-2 whitespace-nowrap pointer-events-none"
        aria-hidden="true"
      >
        CONSTRUIMOS<br />
        CONSTRUIMOS
      </div>

      {/* Main word */}
      <div className="font-[family-name:var(--lat-font-display)] text-[clamp(150px,30vw,480px)] text-[var(--lat-wh)] leading-[0.76] z-[1]">
        FUTURO
      </div>

      {/* Caption */}
      <div className="absolute bottom-[clamp(2rem,4vh,4rem)] left-[clamp(2rem,5vw,6rem)] font-extralight text-[clamp(11px,1vw,14px)] text-[rgba(245,240,235,0.28)] tracking-[0.05em] z-[2]">
        LATIDO &mdash; El continente vuelve a latir.
      </div>
    </section>
  );
}
