import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-[rgba(245,240,235,0.02)] border border-[rgba(245,240,235,0.04)] p-[clamp(1.5rem,3vw,2.5rem)] transition-all duration-500 ${hover ? "hover:bg-[rgba(212,32,32,0.02)] hover:border-[rgba(212,32,32,0.12)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
