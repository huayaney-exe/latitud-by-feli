"use client";

import { useEffect, useCallback, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ open, onClose, children, className = "" }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,10,10,0.85)] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-[var(--lat-bk)] border border-[rgba(245,240,235,0.06)] max-w-lg w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto ${className}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[rgba(245,240,235,0.2)] hover:text-[var(--lat-rd)] transition-colors cursor-pointer bg-transparent border-none text-lg z-10"
          aria-label="Cerrar"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
