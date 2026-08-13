"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";
import { SplitHeading } from "@/components/effects/Reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CloseCTASection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".close-cta-card", {
        scale: 0.9,
        y: 48,
        opacity: 0,
        duration: 1.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
        },
      });

      gsap.fromTo(
        ".close-cta-sheen",
        { xPercent: -120 },
        {
          xPercent: 120,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-12 md:py-20">
      <Container>
        <GlassCard className="close-cta-card relative overflow-hidden px-5 py-10 text-center sm:px-8 sm:py-14 md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,107,255,0.12),transparent_60%)]" />
          <div className="close-cta-sheen pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <p className="relative text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">
            Enter the lab
          </p>
          <SplitHeading
            text="Skip the agency. Start the sprint."
            className="font-display relative mx-auto mt-4 max-w-3xl text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl"
          />
          <p className="relative mx-auto mt-5 max-w-xl text-sm text-navy/60 sm:text-base">
            Thirty minutes. We will tell you if it fits two weeks.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <GlassButton href="/contact" variant="solid" className="w-full !px-8 !py-3.5 sm:w-auto">
              Book a Call
            </GlassButton>
            <GlassButton href="/pricing" className="w-full sm:w-auto">
              See pricing
            </GlassButton>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
