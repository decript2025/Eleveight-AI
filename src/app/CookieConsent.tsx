"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // No decision yet, open on first render
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  const saveChoice = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setIsOpen(false);
  };

  const containerClasses = useMemo(() => {
    return [
      "fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6 sm:px-6 sm:pb-8",
      isOpen ? "pointer-events-auto" : "pointer-events-none",
    ].join(" ");
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div className={containerClasses}>
      <div
        className="flex w-full max-w-[800px] items-center justify-between gap-6 rounded-2xl border border-[#1E1D21] bg-[#0F0F10] p-8 shadow-[0_4px_32px_-4px_rgba(111,111,111,0.4)]"
        role="dialog"
        aria-live="polite"
        aria-label="Cookie consent"
      >
        <div className="text-white/90">
          <div className="mb-2 text-sm font-semibold">
          <Image className="inline-block mr-2" src="/Ilustration Wrapp.svg" alt="Ilustration Wrapp" width={24} height={24} />
            We use cookies to improve our website and your experience.</div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Button variant="default-white" size="sm" onClick={() => saveChoice()}>Ok</Button>
        </div>
      </div>
    </div>
  );
}


