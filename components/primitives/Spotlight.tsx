interface SpotlightProps {
  size?: "sm" | "md" | "lg";
  intensity?: "subtle" | "normal" | "strong";
  className?: string;
}

const sizeMap = {
  sm: "h-[30vh] w-[120%]",
  md: "h-[55vh] w-[150%]",
  lg: "h-[65vh] w-[150%]",
};

const intensityMap = {
  subtle: {
    inner: "rgba(212,32,32,0.4)",
    mid: "rgba(212,32,32,0.15)",
    outer: "rgba(212,32,32,0.05)",
  },
  normal: {
    inner: "rgba(212,32,32,0.7)",
    mid: "rgba(212,32,32,0.28)",
    outer: "rgba(212,32,32,0.09)",
  },
  strong: {
    inner: "rgba(212,32,32,0.9)",
    mid: "rgba(212,32,32,0.4)",
    outer: "rgba(212,32,32,0.14)",
  },
};

export default function Spotlight({
  size = "md",
  intensity = "normal",
  className = "",
}: SpotlightProps) {
  const c = intensityMap[intensity];

  return (
    <div
      className={`absolute bottom-[-8%] left-1/2 -translate-x-1/2 pointer-events-none z-[1] ${sizeMap[size]} ${className}`}
      style={{
        animation: `lat-spot-breath var(--lat-beat) ease-in-out infinite`,
        background: `
          radial-gradient(ellipse 30% 50% at 50% 90%, ${c.inner} 0%, rgba(212,32,32,0) 70%),
          radial-gradient(ellipse 50% 55% at 50% 80%, ${c.mid} 0%, transparent 70%),
          radial-gradient(ellipse 85% 65% at 50% 95%, ${c.outer} 0%, transparent 65%)
        `,
      }}
      aria-hidden="true"
    />
  );
}
