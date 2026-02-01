"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "filled" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "filled", children, className = "", href, ...props }, ref) => {
    const base =
      "font-[family-name:var(--lat-font-body)] text-[12px] tracking-[0.14em] cursor-pointer transition-all duration-300 uppercase";

    const variants: Record<ButtonVariant, string> = {
      filled:
        "bg-[var(--lat-rd)] text-[var(--lat-wh)] border-none font-semibold px-[2.8rem] py-[1.1rem] hover:bg-[var(--lat-rd-dk)] hover:shadow-[0_0_60px_rgba(212,32,32,0.35)] hover:-translate-y-px",
      outline:
        "bg-transparent text-[var(--lat-text-secondary)] border border-[rgba(245,240,235,0.06)] font-light px-[2.4rem] py-[1rem] hover:border-[var(--lat-rd)] hover:text-[var(--lat-rd)] hover:shadow-[0_0_30px_rgba(212,32,32,0.06)]",
      ghost:
        "bg-transparent text-[rgba(245,240,235,0.45)] border-none font-light text-xs tracking-[0.05em] relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-[var(--lat-rd)] after:transition-[width] after:duration-400 hover:text-[var(--lat-rd)] hover:after:w-full p-0",
    };

    if (href) {
      return (
        <a
          href={href}
          className={`${base} ${variants[variant]} inline-block no-underline ${className}`}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
