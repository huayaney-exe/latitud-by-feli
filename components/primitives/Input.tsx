"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="font-[family-name:var(--lat-font-body)] text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--lat-text-secondary)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`bg-[rgba(245,240,235,0.03)] border border-[rgba(245,240,235,0.06)] text-[var(--lat-wh)] font-[family-name:var(--lat-font-body)] text-sm font-light px-5 py-3.5 transition-all duration-300 placeholder:text-[rgba(245,240,235,0.12)] focus:outline-none focus:border-[var(--lat-rd)] focus:shadow-[0_0_20px_rgba(212,32,32,0.08)] ${error ? "border-[var(--lat-rd)]" : ""} ${className}`}
          {...props}
        />
        {error && (
          <span className="text-[var(--lat-rd-text)] text-[11px] font-light tracking-[0.05em]">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
