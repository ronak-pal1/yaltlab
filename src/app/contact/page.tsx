import type { Metadata } from "next";
import { site } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call with YaltLab — 14-day product sprints.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want live in fourteen days."
        copy="A short brief is enough. We reply within a day with whether it fits a sprint — and a time to talk."
      />

      <section className="relative pb-24">
        <Container className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-4">
            <GlassCard className="p-5 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-navy/45">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block break-all text-lg text-navy sm:text-xl">
                {site.email}
              </a>
              <p className="mt-2 text-sm text-navy/50">We answer within 24 hours.</p>
            </GlassCard>
            <GlassCard variant="light" className="p-5 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-navy/45">Cadence</p>
              <p className="font-display mt-2 text-2xl">Remote, worldwide</p>
              <p className="mt-2 text-sm text-navy/60">
                Calls on your calendar. Builds you can click. No on-site required.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-5 sm:p-7 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-navy">Book a call</h2>
            <p className="mt-2 mb-6 text-sm text-navy/55">
              Opens your mail client with the brief filled in. Swap in a calendar link whenever you have one.
            </p>
            <ContactForm />
          </GlassCard>
        </Container>
      </section>
    </>
  );
}
