interface DividerProps {
  className?: string;
  variant?: "line" | "dot" | "breath";
}

export default function Divider({ className = "", variant = "line" }: DividerProps) {
  if (variant === "dot") {
    return (
      <div className={`flex justify-center py-16 ${className}`}>
        <div
          className="w-1.5 h-1.5 rounded-full bg-[var(--lat-rd)]"
          style={{ animation: "lat-dot-pulse var(--lat-beat) ease-in-out infinite" }}
        />
      </div>
    );
  }

  if (variant === "breath") {
    return (
      <div className={`flex items-center justify-center gap-6 py-16 ${className}`}>
        <div
          className="flex-1 h-px bg-[var(--lat-rd)]"
          style={{ animation: "lat-divider-pulse var(--lat-beat) ease-in-out infinite" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full bg-[var(--lat-rd)]"
          style={{ animation: "lat-dot-pulse var(--lat-beat) ease-in-out infinite" }}
        />
        <div
          className="flex-1 h-px bg-[var(--lat-rd)]"
          style={{ animation: "lat-divider-pulse var(--lat-beat) ease-in-out infinite" }}
        />
      </div>
    );
  }

  return (
    <div className={`px-[var(--lat-section-px)] py-16 ${className}`}>
      <div
        className="h-px bg-[var(--lat-rd)]"
        style={{ animation: "lat-divider-pulse var(--lat-beat) ease-in-out infinite" }}
      />
    </div>
  );
}
