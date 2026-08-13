import Container from "@/components/ui/Container";
import Reveal from "@/components/effects/Reveal";

export default function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="relative pt-28 pb-10 sm:pt-32 md:pt-40 md:pb-16">
      <Container>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-blue sm:text-sm">{eyebrow}</p>
          <h1 className="font-display mt-3 max-w-3xl text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-navy text-balance sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy/60 sm:mt-5 sm:text-lg">
            {copy}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
