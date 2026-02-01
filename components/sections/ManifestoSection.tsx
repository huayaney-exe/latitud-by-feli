"use client";

import useScrollReveal from "../hooks/useScrollReveal";

export default function ManifestoSection() {
  const { watch } = useScrollReveal();

  return (
    <section
      id="manifiesto"
      className="relative bg-[var(--lat-wh)] text-[var(--lat-bk)] py-[clamp(6rem,14vh,14rem)] px-[clamp(2rem,8vw,10rem)] overflow-hidden"
    >
      {/* Ghost LAT watermark */}
      <div
        className="absolute top-1/2 right-[-8%] -translate-y-1/2 -rotate-[4deg] font-[family-name:var(--lat-font-display)] text-[clamp(280px,45vw,720px)] text-[rgba(10,10,10,0.035)] leading-[0.78] pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        LAT
      </div>

      {/* Manifesto body */}
      <div
        ref={watch}
        className="relative z-[1] max-w-[1100px] opacity-0"
        style={{ opacity: 0 }}
      >
        {/* Giant red quotation mark */}
        <p
          className="font-[family-name:var(--lat-font-display)] text-[clamp(80px,13vw,200px)] text-[var(--lat-rd)] leading-[0.45] mb-[-0.05em] ml-[-0.06em]"
          aria-hidden="true"
        >
          &ldquo;
        </p>

        <p className="font-[family-name:var(--lat-font-display)] text-[clamp(34px,5vw,72px)] leading-[1.06] text-[var(--lat-bk)]">
          Durante siglos,
        </p>
        <p className="font-[family-name:var(--lat-font-display)] text-[clamp(34px,5vw,72px)] leading-[1.06] text-[var(--lat-bk)]">
          nos dijeron que el futuro
        </p>
        <p className="font-[family-name:var(--lat-font-display)] text-[clamp(64px,13vw,210px)] leading-[0.88] text-[var(--lat-rd)] my-[0.06em] ml-[-0.03em] whitespace-nowrap max-md:whitespace-normal max-md:text-[clamp(50px,16vw,120px)]">
          SE INVENTABA
        </p>
        <p className="font-[family-name:var(--lat-font-display)] text-[clamp(34px,5vw,72px)] leading-[1.06] text-[var(--lat-bk)]">
          en otro lugar.&rdquo;
        </p>
      </div>

      {/* Footer echo */}
      <div className="relative z-[1] mt-[clamp(4rem,8vh,8rem)]">
        <div className="w-[clamp(40px,5vw,70px)] h-0.5 bg-[var(--lat-rd)] mb-7" />
        <p className="font-light text-[clamp(13px,1.2vw,17px)] text-[rgba(10,10,10,0.50)] tracking-[0.05em]">
          Pero el <span className="font-[family-name:var(--lat-font-display)] text-[var(--lat-rd)] text-[1.1em] tracking-[0.02em]">LAT</span>ido nunca se detuvo.
        </p>
      </div>
    </section>
  );
}
