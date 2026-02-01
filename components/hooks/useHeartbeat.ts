"use client";

import { useEffect, useRef } from "react";

interface HeartbeatOptions {
  bpm?: number;
  onBeat?: () => void;
}

/**
 * Returns a ref callback that applies heartbeat animation to the element.
 * Optionally fires a callback on each beat cycle.
 */
export default function useHeartbeat({ bpm = 72, onBeat }: HeartbeatOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!onBeat) return;

    const ms = (60 / bpm) * 1000;
    intervalRef.current = setInterval(onBeat, ms);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [bpm, onBeat]);

  const ref = (el: HTMLElement | null) => {
    elementRef.current = el;
    if (!el) return;
    const duration = `${(60 / bpm).toFixed(2)}s`;
    el.style.animation = `lat-heartbeat ${duration} ease-in-out infinite`;
  };

  return { ref };
}
