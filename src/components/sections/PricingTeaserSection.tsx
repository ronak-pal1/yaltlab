import { plans } from "@/lib/content";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";
import Reveal, { SplitHeading } from "@/components/effects/Reveal";

export default function PricingTeaserSection() {
  return (
    <section className="relative py-14 md:py-28">
      <Container>
        <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">Pricing</p>
        <SplitHeading
          text="Start with a site. Or start with the product."
          className="font-display mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-5 sm:p-8">
                <p className="text-sm text-navy/50">{plan.name}</p>
                <p className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl">
                  {plan.price}
                </p>
                <p className="text-sm text-navy/45">{plan.cadence}</p>
                <p className="mt-4 text-sm text-navy/60">{plan.description}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-navy/70">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <GlassButton
                  href="/contact"
                  variant={plan.featured ? "solid" : "glass"}
                  className="mt-8 w-full"
                >
                  Book a Call
                </GlassButton>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
