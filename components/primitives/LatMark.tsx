interface LatMarkProps {
  suffix?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "text-lg",
  md: "text-3xl",
  lg: "text-6xl",
  xl: "text-[clamp(100px,20vw,300px)]",
};

export default function LatMark({ suffix = "ido", className = "", size = "md" }: LatMarkProps) {
  return (
    <span
      className={`font-[family-name:var(--lat-font-display)] leading-[0.8] tracking-[0.02em] ${sizes[size]} ${className}`}
    >
      <span className="text-[var(--lat-rd)]">LAT</span>
      {suffix && (
        <span className="font-[family-name:var(--lat-font-body)] font-extralight text-[rgba(245,240,235,0.18)] text-[0.55em]">
          {suffix}
        </span>
      )}
    </span>
  );
}
