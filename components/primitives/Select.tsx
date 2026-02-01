"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className = "", id, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={selectId}
            className="font-[family-name:var(--lat-font-body)] text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--lat-text-secondary)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`w-full appearance-none bg-[rgba(245,240,235,0.03)] border border-[rgba(245,240,235,0.06)] text-[var(--lat-wh)] font-[family-name:var(--lat-font-body)] text-sm font-light px-5 py-3.5 pr-12 transition-all duration-300 focus:outline-none focus:border-[var(--lat-rd)] focus:shadow-[0_0_20px_rgba(212,32,32,0.08)] ${error ? "border-[var(--lat-rd)]" : ""} ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" className="bg-[var(--lat-bk)]">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[var(--lat-bk)]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className="text-[rgba(245,240,235,0.2)]"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
        {error && (
          <span className="text-[var(--lat-rd-text)] text-[11px] font-light tracking-[0.05em]">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
