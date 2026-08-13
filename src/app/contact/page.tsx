import type { Metadata } from "next";
import { site } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call with YaltLab for a 14-day product sprint.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Pick a time. Leave with a plan for fourteen days."
        copy="The calendar is live. Grab a slot and we will tell you if it fits a sprint."
      />

      <section className="relative pb-24">
        <Container className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col gap-4">
            <GlassCard className="p-5 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-navy/45">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block break-all text-lg text-navy sm:text-xl">
                {site.email}
              </a>
              <p className="mt-2 text-sm text-navy/50">Prefer writing first? We answer within 24 hours.</p>
            </GlassCard>
            <GlassCard variant="light" className="p-5 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-navy/45">Cadence</p>
              <p className="font-display mt-2 text-2xl">30 minutes, remote</p>
              <p className="mt-2 text-sm text-navy/60">
                Timezones handled. Video link in the invite. No on-site required.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="overflow-hidden p-3 sm:p-5">
            <h2 className="font-display px-2 pt-2 text-2xl font-semibold text-navy sm:px-3">
              Book a call
            </h2>
            <p className="mt-1 mb-3 px-2 text-sm text-navy/55 sm:px-3">
              Choose a slot that works. Confirmation lands in your inbox.
            </p>
            <CalEmbed />
          </GlassCard>
        </Container>
      </section>
    </>
  );
}
