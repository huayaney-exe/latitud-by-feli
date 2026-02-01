"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className = "",
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div
      className={`border-b border-[rgba(245,240,235,0.04)] ${className}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 px-0 bg-transparent border-none cursor-pointer text-left group"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--lat-font-display)] text-[clamp(16px,2vw,22px)] text-[var(--lat-wh)] group-hover:text-[var(--lat-rd)] transition-colors duration-300">
          {title}
        </span>
        <span
          className={`text-[var(--lat-rd)] text-xl transition-transform duration-300 ml-4 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        style={{ height: height !== undefined ? `${height}px` : "auto", overflow: "hidden" }}
        className="transition-[height] duration-400 ease-[var(--lat-ease)]"
      >
        <div ref={contentRef} className="pb-6">
          <div className="font-[family-name:var(--lat-font-body)] text-base font-normal leading-relaxed text-[var(--lat-text-secondary)] max-w-[680px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
