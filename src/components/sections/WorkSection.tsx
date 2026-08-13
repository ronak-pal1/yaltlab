"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/lib/content";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";
import Reveal, { SplitHeading } from "@/components/effects/Reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WorkSection() {
  const root = useRef<HTMLElement>(null);
  const featured = works[0];
  const rest = works.slice(1);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.fromTo(
          ".work-featured",
          { clipPath: "inset(16% 10% 16% 10% round 28px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            ease: "none",
            scrollTrigger: {
              trigger: ".work-featured",
              start: "top 85%",
              end: "top 28%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          ".work-featured-img",
          { scale: 1.14 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".work-featured",
              start: "top 85%",
              end: "top 28%",
              scrub: 1,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
        gsap.fromTo(
          card,
          { clipPath: "inset(100% 0% 0% 0% round 28px)", y: 48 },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-14 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">Selected work</p>
            <SplitHeading
              text="Built to convert, then to last."
              className="font-display mt-3 text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl"
            />
          </div>
          <Reveal className="w-full sm:w-auto">
            <GlassButton href="/work" className="w-full sm:w-auto">
              View all work
            </GlassButton>
          </Reveal>
        </div>

        <Link href="/work" className="group mt-12 block">
          <div className="work-featured relative h-[58vw] max-h-[640px] min-h-[220px] overflow-hidden rounded-[22px] sm:min-h-[280px] sm:rounded-[28px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="100vw"
              className="work-featured-img object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 to-transparent p-4 sm:p-6 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                {featured.category}
              </p>
              <h3 className="font-display mt-1 text-xl font-semibold text-white sm:text-3xl md:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-xs text-white/75 sm:mt-2 sm:text-sm md:text-base">
                {featured.result}
              </p>
            </div>
          </div>
        </Link>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((work) => (
            <Link key={work.slug} href="/work" className="group block">
              <GlassCard className="work-card overflow-hidden p-3">
                <div className="relative h-44 overflow-hidden rounded-[20px] sm:h-48 md:h-56">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-3 py-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-navy/45">
                    {work.category}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-semibold text-navy">
                    {work.title}
                  </h3>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
