import type { Metadata } from "next";
import { services } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import CalButton from "@/components/CalButton";
import Reveal from "@/components/effects/Reveal";
import CloseCTASection from "@/components/sections/CloseCTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web, iOS, Android, desktop, UI/UX, and applied AI. Senior product work on a 14-day cadence.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Pick a surface. We still ship the product."
        copy="Whether you need a site, a native app, or an AI feature inside an existing stack: the same studio, the same 14-day discipline."
      />

      <section className="relative pb-16">
        <Container className="flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.04}>
              <GlassCard className="scroll-mt-28 p-5 sm:p-8 md:p-10">
                <div
                  id={service.slug}
                  className="scroll-mt-32 grid gap-6 md:grid-cols-[0.4fr_1fr] md:items-start md:gap-8"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-navy/45">
                      {service.eyebrow}
                    </p>
                    <h2 className="font-display mt-2 text-2xl font-semibold text-navy sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-navy/65 sm:text-base">{service.body}</p>
                    <CalButton variant="glass" className="mt-6 w-full sm:w-auto">
                      Start this engagement
                    </CalButton>
                  </div>
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
