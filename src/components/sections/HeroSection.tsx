"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "@/components/ui/Container";
import GlassButton from "@/components/ui/GlassButton";

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
        .from(".hero-kicker", { y: 12, opacity: 0, duration: 0.45 }, "-=0.2")
        .from(".hero-title", { y: 22, opacity: 0, duration: 0.7 }, "-=0.25")
        .from(".hero-side", { y: 18, opacity: 0, duration: 0.55 }, "-=0.4")
        .from(".hero-pills", { y: 14, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-bar", { y: 20, opacity: 0, duration: 0.6 }, "-=0.25");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue/20 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute right-[-4rem] top-32 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl md:right-12" />

      <Container>
        <div className="hero-pill mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/70 px-2.5 py-1.5 text-[11px] text-navy/70 shadow-sm backdrop-blur-xl sm:mb-8 sm:gap-2.5 sm:px-3 sm:text-sm">
          <span className="flex shrink-0 -space-x-1.5">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-sky-300 to-blue-500 ring-2 ring-white sm:h-5 sm:w-5" />
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-violet-300 to-indigo-500 ring-2 ring-white sm:h-5 sm:w-5" />
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-200 to-orange-400 ring-2 ring-white sm:h-5 sm:w-5" />
          </span>
          <span className="min-w-0 leading-tight">YaltLab · Your alternative lab</span>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12 xl:gap-16">
          <div>
            <p className="hero-kicker mb-3 text-xs uppercase tracking-[0.18em] text-blue sm:mb-4 sm:text-sm">
              Your alternative lab
            </p>
            <h1 className="hero-title font-display text-[2rem] font-semibold leading-[1.18] tracking-tight text-navy sm:text-[2.6rem] md:text-[3.15rem] md:leading-[1.12]">
              Build
              <span className="icon-tile icon-tile-silver mx-1.5 mb-1 inline-grid align-middle text-[10px] font-bold text-navy sm:mx-2 sm:text-xs">
                {"</>"}
              </span>
              <br className="sm:hidden" />
              and ship in 14 days
              <span className="icon-tile icon-tile-green ml-1.5 mb-1 inline-grid align-middle text-xs sm:ml-2 sm:text-sm">
                🚀
              </span>
            </h1>
          </div>

          <div className="hero-side max-w-md lg:justify-self-end lg:pb-1">
            <p className="text-[15px] leading-relaxed text-navy/60 sm:text-base">
              Agencies take months. We are the other option — design, build, and a live product in
              two weeks.
            </p>
            <GlassButton
              href="/contact"
              variant="solid"
              className="mt-5 w-full !px-7 !py-3.5 text-base sm:mt-6 sm:w-auto"
            >
              Book a Call
              <span className="grid h-6 w-6 place-items-center rounded-md bg-white/20 text-xs">
                ↗
              </span>
            </GlassButton>
          </div>
        </div>

        <div className="hero-pills mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
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
