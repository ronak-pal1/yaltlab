import { pillars } from "@/lib/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/effects/Reveal";

const meshes = ["mesh-purple", "mesh-peach", "mesh-sky"];
const icons = ["🚀", "▣", "🔑"];

export default function OfferSection() {
  return (
    <section className="relative py-14 md:py-24">
      <Container>
        <Reveal>
          <span className="inline-flex rounded-full border border-navy/10 bg-white px-4 py-1.5 text-sm text-navy/70">
            Why the lab
          </span>
        </Reveal>

        <h2 className="font-display mt-6 max-w-3xl text-[1.65rem] font-semibold leading-[1.25] tracking-tight text-navy sm:text-3xl md:text-4xl">
          You do not need another agency.{" "}
          <span className="mt-3 block w-fit max-w-full rounded-xl bg-navy px-3 py-2 text-[0.92em] leading-snug text-white sm:mt-2 sm:inline-block sm:rounded-lg sm:py-1">
            You need a lab that ships.
          </span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_18px_44px_rgba(12,18,32,0.06)]">
                <div className={`relative h-28 sm:h-36 ${meshes[i]}`}>
                  <div className="pinstripe absolute inset-0" />
                  <span className="absolute left-4 top-4 icon-tile icon-tile-silver text-sm">
                    {icons[i]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{pillar.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
