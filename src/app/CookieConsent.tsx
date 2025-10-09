"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "assets/components/ui/button";

type ConsentChoice = "accepted" | "rejected" | "customized";

const STORAGE_KEY = "cookie-consent-choice";

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

  const saveChoice = (choice: ConsentChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
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
        className="flex w-full max-w-[1000px] items-center justify-between gap-6 rounded-2xl border border-[#1E1D21] bg-[#0F0F10] p-8 shadow-[0_4px_32px_-4px_rgba(111,111,111,0.4)]"
        role="dialog"
        aria-live="polite"
        aria-label="Cookie consent"
      >
        <div className="text-white/90">
          <div className="mb-2 text-lg font-semibold">
          <img className="inline-block mr-2" src="/Ilustration Wrapp.svg" alt="Ilustration Wrapp" />
          Our website uses cookies</div>
          <p className="text-sm leading-relaxed text-white/80">
            We’re not talking about the crunchy, tasty kind. These cookies help us keep our website safe, give you a better experience and show more relevant ads. We won’t turn them on unless you accept. Want to know more or{" "}
            <Link href="#" className="underline underline-offset-2 hover:text-white">Adjust your preferences</Link>?
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Button onClick={() => saveChoice("rejected")}>Reject all</Button>
          <Button variant="default-white" onClick={() => saveChoice("accepted")}>Accept all</Button>
        </div>
      </div>
    </div>
  );
}


