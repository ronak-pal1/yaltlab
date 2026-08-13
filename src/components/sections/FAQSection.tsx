"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import { SplitHeading } from "@/components/effects/Reveal";
import { cn } from "@/lib/cn";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-14 md:py-28">
      <Container>
        <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">FAQ</p>
        <SplitHeading
          text="Ask this before you book."
          className="font-display mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl"
        />

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <GlassCard key={item.q} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="font-display text-base font-semibold leading-snug text-navy sm:text-lg md:text-xl">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy/10 text-navy transition",
                      isOpen && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed text-navy/60 sm:px-6 sm:pb-5">
                      {item.a}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
