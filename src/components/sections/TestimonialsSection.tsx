import { testimonials } from "@/lib/content";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal, { SplitHeading } from "@/components/effects/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="relative py-14 md:py-28">
      <Container>
        <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">Clients</p>
        <SplitHeading
          text="They came for a lab, not a slide deck."
          className="font-display mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-5 sm:p-7">
                <p className="flex-1 text-base leading-relaxed text-navy/75">{item.quote}</p>
                <div className="mt-8">
                  <p className="font-display text-lg font-semibold text-navy">{item.name}</p>
                  <p className="text-sm text-navy/50">{item.role}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
