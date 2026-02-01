import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "red" | "muted";
  className?: string;
}

const variants = {
  default:
    "bg-[rgba(245,240,235,0.05)] text-[rgba(245,240,235,0.4)] border-[rgba(245,240,235,0.08)]",
  red: "bg-[rgba(212,32,32,0.08)] text-[var(--lat-rd-text)] border-[rgba(212,32,32,0.15)]",
  muted:
    "bg-transparent text-[var(--lat-text-tertiary)] border-[rgba(245,240,235,0.08)]",
};

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block font-[family-name:var(--lat-font-body)] text-[11px] font-medium tracking-[0.12em] uppercase border px-3 py-1 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
