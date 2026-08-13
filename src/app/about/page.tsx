import type { Metadata } from "next";
import { about, process, stats } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/effects/Reveal";
import CloseCTASection from "@/components/sections/CloseCTASection";

export const metadata: Metadata = {
  title: "About",
  description: "YaltLab is a product studio that ships MVPs in 14 days.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={about.headline} copy={about.story} />

      <section className="relative pb-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="px-6 py-8 text-center">
                <p className="font-display text-3xl font-semibold text-navy">{stat.value}</p>
                <p className="mt-1 text-sm text-navy/55">{stat.label}</p>
              </GlassCard>
            ))}
          </div>

          <Reveal>
            <GlassCard className="mt-8 p-5 sm:p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">How we work</p>
              <p className="font-display mt-4 max-w-3xl text-xl leading-snug text-navy sm:text-2xl md:text-3xl">
                {about.method}
              </p>
            </GlassCard>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <GlassCard className="h-full p-5 sm:p-7">
                  <p className="text-sm text-blue">Days {step.days}</p>
                  <h2 className="font-display mt-2 text-2xl font-semibold text-navy">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm text-navy/60">{step.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CloseCTASection />
    </>
  );
}
