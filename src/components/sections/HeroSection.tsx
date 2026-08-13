"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "@/components/ui/Container";
import GlassButton from "@/components/ui/GlassButton";
import CalButton from "@/components/CalButton";

gsap.registerPlugin(useGSAP);

const surfaces = [
  { label: "Web apps", glow: "glow-pill-purple" },
  { label: "Mobile", glow: "glow-pill-peach" },
  { label: "Product UI", glow: "glow-pill-blue" },
  { label: "AI features", glow: "glow-pill-lime" },
];

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-pill", { y: 10, opacity: 0, duration: 0.5 })
        .from(".hero-kicker", { y: 14, opacity: 0, duration: 0.5 }, "-=0.22")
        .from(".hero-title", { y: 28, opacity: 0, duration: 0.75 }, "-=0.28")
        .from(".hero-side", { y: 18, opacity: 0, duration: 0.55 }, "-=0.4")
        .from(".hero-pills", { y: 14, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-bar", { y: 20, opacity: 0, duration: 0.6 }, "-=0.25");
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-24"
    >
      <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-blue/25 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute right-[-5rem] top-24 h-64 w-64 rounded-full bg-sky-300/35 blur-3xl md:right-8 md:h-80 md:w-80" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />

      <Container>
        <div className="hero-pill mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[11px] text-navy/70 shadow-sm backdrop-blur-xl sm:mb-9 sm:px-3.5 sm:text-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green/70 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          <span className="min-w-0 leading-tight">Now booking the next 14-day sprint</span>
        </div>

        <p className="hero-kicker font-display text-[1.05rem] font-medium tracking-tight text-navy/45 sm:text-xl md:text-2xl">
          Your
          <span className="mx-2 text-navy/20 sm:mx-2.5">·</span>
          <span className="text-blue">alternative</span>
          <span className="mx-2 text-navy/20 sm:mx-2.5">·</span>
          lab
        </p>

        <div className="mt-4 grid items-end gap-8 lg:mt-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14 xl:gap-20">
          <h1 className="hero-title font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.05]">
            Build and ship
            <br />
            in{" "}
              <span className="text-blue">14 days</span>
          </h1>

          <div className="hero-side max-w-md lg:justify-self-end lg:pb-2">
            <p className="text-[15px] leading-relaxed text-navy/60 sm:text-base md:text-[17px]">
              Agencies take months. We are the other option: design, build, and a live product in
              two weeks.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
              <CalButton variant="solid" className="w-full !px-7 !py-3.5 text-base sm:w-auto">
                Book a Call
                <span className="grid h-6 w-6 place-items-center rounded-md bg-white/20 text-xs">
                  ↗
                </span>
              </CalButton>
              <GlassButton href="/work" className="w-full sm:w-auto">
                See work
              </GlassButton>
            </div>
          </div>
        </div>

        <div className="hero-pills mt-9 flex flex-wrap gap-2 sm:mt-12 sm:gap-3">
          {surfaces.map((item) => (
            <span
              key={item.label}
              className={`glow-pill ${item.glow} rounded-full px-3.5 py-2 text-xs font-medium text-navy sm:px-4 sm:text-sm`}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="hero-bar mt-10 rounded-[24px] px-4 py-4 glass sm:mt-14 sm:px-5 md:rounded-full md:px-6 md:py-3.5">
          <div className="grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-navy/10">
            <div className="flex items-center gap-3 py-3 sm:px-2 sm:py-0">
              <span className="icon-tile icon-tile-green shrink-0 text-xs">⏱</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-navy">Two-week sprints</p>
                <p className="hidden text-xs text-navy/45 md:block">Concept to live product</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-t border-navy/8 py-3 sm:border-t-0 sm:px-2 sm:py-0">
              <span className="icon-tile icon-tile-blue shrink-0 text-xs">✦</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-navy">You own the product</p>
                <p className="hidden text-xs text-navy/45 md:block">Repos, domains, the lot</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-t border-navy/8 py-3 sm:border-t-0 sm:px-2 sm:py-0">
              <span className="icon-tile icon-tile-yellow shrink-0 text-xs">▣</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-navy">Senior-built stack</p>
                <p className="hidden text-xs text-navy/45 md:block">Ready to grow after launch</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
