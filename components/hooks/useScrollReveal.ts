"use client";

import { useEffect, useRef, useCallback } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export default function useScrollReveal({
  threshold = 0.06,
  rootMargin = "0px",
  once = true,
}: ScrollRevealOptions = {}) {
  const refs = useRef<Set<HTMLElement>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lat-revealed");
            if (once) observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    refs.current.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [threshold, rootMargin, once]);

  const watch = useCallback((el: HTMLElement | null) => {
    if (!el || refs.current.has(el)) return;
    refs.current.add(el);
    observerRef.current?.observe(el);
  }, []);

  return { watch };
}
