import { clients, stats } from "@/lib/content";
import Container from "@/components/ui/Container";
import Reveal, { SplitHeading } from "@/components/effects/Reveal";

const cards = [
  { icon: "🚀", pattern: "stripe-card", ...stats[0] },
  { icon: "◆", pattern: "wave-card", ...stats[1] },
  { icon: "★", pattern: "stripe-card", ...stats[2] },
];

export default function ProofSection() {
  const loop = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-14 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <span className="glow-cyan inline-flex rounded-full border border-navy/10 bg-white px-4 py-1.5 text-sm text-navy/70">
            Trusted by founders
          </span>
        </Reveal>

        <SplitHeading
          text="Trusted by startups, first-time founders, and teams who need it live."
          className="font-display mt-6 max-w-2xl text-[1.65rem] font-semibold tracking-tight text-navy text-balance sm:text-3xl md:text-4xl"
        />

        <div className="mt-10 grid w-full gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.08}>
              <div className={`rounded-2xl border border-navy/10 bg-white p-6 text-left shadow-[0_16px_40px_rgba(12,18,32,0.05)] ${card.pattern}`}>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-navy/5 text-sm">
                  {card.icon}
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-navy">
                  {card.value} {card.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="marquee-mask mt-12 w-full overflow-hidden">
          <div className="animate-marquee flex w-max gap-12">
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm font-semibold tracking-[0.18em] text-navy/35 uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-2 px-1">
            <div className="flex items-center justify-center gap-3">
              <span className="icon-tile icon-tile-green shrink-0 text-xs font-bold text-navy">
                {"</>"}
              </span>
              <p className="text-base font-semibold leading-snug sm:text-lg">
                <span className="text-green">Faster delivery</span>
                <span className="text-navy"> than a traditional team</span>
              </p>
            </div>
            <p className="text-sm text-navy/50">Our fastest launch: 14 days. That is the sprint.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
