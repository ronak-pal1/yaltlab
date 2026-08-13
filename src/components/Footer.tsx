import Link from "next/link";
import { nav, site, socials } from "@/lib/content";
import Container from "@/components/ui/Container";
import GlassButton from "@/components/ui/GlassButton";
import GlassCard from "@/components/ui/GlassCard";

export default function Footer() {
  return (
    <footer className="relative z-10 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8">
      <Container>
        <GlassCard className="overflow-hidden p-5 sm:p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-blue sm:text-sm">
                Ready when you are
              </p>
              <h2 className="font-display mt-3 text-[1.75rem] font-semibold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
                Let’s ship the next fourteen days.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/60 sm:text-base">
                Tell us what you are building. We will tell you if it fits a sprint — and how we would launch it.
              </p>
            </div>
            <GlassButton href="/contact" variant="solid" className="w-full shrink-0 !px-8 !py-3.5 sm:w-auto">
              Book a Call
            </GlassButton>
          </div>
        </GlassCard>

        <div className="mt-10 flex flex-col gap-8 px-2 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-navy">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-navy/50">{site.description}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-blue hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-navy/40">Studio</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-navy/70">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-navy">
                    {item.name}
                  </Link>
                ))}
                <Link href="/contact" className="hover:text-navy">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-navy/40">Social</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-navy/70">
                {socials.map((item) => (
                  <a key={item.name} href={item.href} className="hover:text-navy">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 px-2 text-xs text-navy/35">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
