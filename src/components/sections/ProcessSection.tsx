"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { process } from "@/lib/content";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import { SplitHeading } from "@/components/effects/Reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProcessSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      const dots = gsap.utils.toArray<HTMLElement>(".process-dot");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        steps.forEach((step, i) => {
          gsap.set(step, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 24,
            pointerEvents: i === 0 ? "auto" : "none",
          });
        });
        dots.forEach((dot, i) => {
          gsap.set(dot, { backgroundColor: i === 0 ? "#2f6bff" : "rgba(12,18,32,0.15)" });
        });
        gsap.set(".process-bar", { scaleX: 1 / steps.length });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".process-pin",
            start: "top 18%",
            end: `+=${steps.length * 90}%`,
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
          },
        });

        steps.forEach((_, i) => {
          if (i === 0) return;
          const at = (i - 1) * 2;

          tl.to({}, { duration: 0.55 }, at);
          tl.to(
            steps[i - 1],
            { opacity: 0, y: -20, pointerEvents: "none", duration: 0.7, ease: "power2.inOut" },
            at + 0.55
          );
          tl.to(
            steps[i],
            { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.7, ease: "power2.inOut" },
            at + 0.55
          );
          tl.to(
            dots[i - 1],
            { backgroundColor: "rgba(12,18,32,0.15)", duration: 0.4 },
            at + 0.55
          );
          tl.to(dots[i], { backgroundColor: "#2f6bff", duration: 0.4 }, at + 0.55);
          tl.to(
            ".process-bar",
            { scaleX: (i + 1) / steps.length, duration: 0.7, ease: "none" },
            at + 0.55
          );
        });

        tl.to({}, { duration: 0.6 });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-14 md:py-28">
      <Container>
        <div className="process-pin grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">The method</p>
            <SplitHeading
              text="Three moves. Fourteen days. Then it is live."
              className="font-display mt-3 text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl"
            />
            <p className="mt-5 text-navy/60">
              No waterfall, no black box. You see working software every day of the sprint.
            </p>
            <div className="mt-8 hidden items-center gap-3 lg:flex">
              {process.map((step, i) => (
                <span
                  key={step.title}
                  className="process-dot h-2.5 w-2.5 rounded-full bg-navy/15"
                  aria-label={step.title}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative lg:h-[380px]">
              {process.map((step, i) => (
                <GlassCard
                  key={step.title}
                  className={`process-step p-5 sm:p-7 md:p-10 lg:absolute lg:inset-0 ${
                    i > 0 ? "mt-5 lg:mt-0" : ""
                  }`}
                >
                  <p className="text-sm text-navy/45">0{i + 1} / 03</p>
                  <div className="mt-4 flex items-baseline justify-between gap-3 sm:mt-5 sm:gap-4">
                    <h3 className="font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
                      {step.title}
                    </h3>
                    <span className="shrink-0 text-sm text-blue">Days {step.days}</span>
                  </div>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-navy/60">
                    {step.body}
                  </p>
                </GlassCard>
              ))}
            </div>
            <div className="mt-5 hidden h-1 overflow-hidden rounded-full bg-navy/10 lg:block">
              <div className="process-bar h-full origin-left scale-x-0 bg-blue" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
