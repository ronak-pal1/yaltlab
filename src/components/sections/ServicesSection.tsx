import Link from "next/link";
import { services } from "@/lib/content";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal, { SplitHeading } from "@/components/effects/Reveal";
import GlassButton from "@/components/ui/GlassButton";

export default function ServicesSection() {
  return (
    <section className="relative py-14 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">Services</p>
            <SplitHeading
              text="Every surface a product needs."
              className="font-display mt-3 max-w-xl text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl"
            />
          </div>
          <GlassButton href="/services" className="w-full shrink-0 sm:w-auto">
            All services
          </GlassButton>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link href={`/services#${service.slug}`} className="block h-full">
                <GlassCard hover className="flex h-full min-w-0 flex-col p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-navy/45">
                    {service.eyebrow}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/60">
                    {service.summary}
                  </p>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
