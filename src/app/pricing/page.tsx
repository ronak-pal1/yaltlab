import type { Metadata } from "next";
import { plans, faqs } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import CalButton from "@/components/CalButton";
import Reveal from "@/components/effects/Reveal";
import CloseCTASection from "@/components/sections/CloseCTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Launchpad from $2,499, or a custom 14-day product sprint.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear numbers. No theater."
        copy="Launchpad is a one-time site engagement. Custom is a scoped product sprint, web, mobile, or both, with a senior team."
      />

      <section className="relative pb-16">
        <Container className="grid gap-5 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-5 sm:p-8 md:p-10">
                {plan.featured && (
                  <span className="mb-4 w-fit rounded-full bg-blue/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-blue">
                    Most booked
                  </span>
                )}
                <p className="text-sm text-navy/50">{plan.name}</p>
                <p className="font-display mt-2 text-3xl font-semibold text-navy sm:text-5xl">
                  {plan.price}
                </p>
                <p className="text-sm text-navy/45">{plan.cadence}</p>
                <p className="mt-4 text-navy/65">{plan.description}</p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-navy/75">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-blue">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <CalButton
                  variant={plan.featured ? "solid" : "glass"}
                  className="mt-10 w-full"
                >
                  Book a Call
                </CalButton>
              </GlassCard>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="relative pb-8">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Good to know</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.slice(0, 4).map((item) => (
              <GlassCard key={item.q} className="p-6">
                <h3 className="font-display text-lg font-semibold text-navy">{item.q}</h3>
                <p className="mt-2 text-sm text-navy/60">{item.a}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <CloseCTASection />
    </>
  );
}
