import type { Metadata } from "next";
import Image from "next/image";
import { works } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/effects/Reveal";
import CloseCTASection from "@/components/sections/CloseCTASection";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product and interface work from YaltLab.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="A few things that made it out of the building."
        copy="Product slices and interfaces we designed and shipped. Each one had a deadline — and a founder on the other side of it."
      />

      <section className="relative pb-8">
        <Container className="grid gap-6 md:grid-cols-2">
          {works.map((work, i) => (
            <Reveal key={work.slug} delay={i * 0.06}>
              <GlassCard hover className="overflow-hidden p-3">
                <div className="relative h-52 overflow-hidden rounded-[20px] sm:h-72 md:h-80">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-navy/45">
                    {work.category}
                  </p>
                  <h2 className="font-display mt-2 text-2xl font-semibold text-navy sm:text-3xl">
                    {work.title}
                  </h2>
                  <p className="mt-3 text-navy/60">{work.result}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </Container>
      </section>

      <CloseCTASection />
    </>
  );
}
