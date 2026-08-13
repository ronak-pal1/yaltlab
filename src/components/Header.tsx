"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { cn } from "@/lib/cn";
import CalButton from "@/components/CalButton";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4 md:px-6 md:pt-[max(1.25rem,env(safe-area-inset-top))]">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full px-3 py-2 glass-light sm:gap-3 sm:px-4",
          scrolled && "shadow-[0_16px_40px_rgba(47,107,255,0.12)]"
        )}
      >
        <Link href="/" className="font-display shrink-0 px-1 text-base font-semibold tracking-tight sm:text-lg">
          <span className="text-blue">Yalt</span>
          <span className="text-navy">Lab</span>
        </Link>

        <nav className="hidden items-center lg:flex">
          {nav.map((item, i) => {
            const active = pathname === item.href;
            return (
              <span key={item.href} className="flex items-center">
                {i > 0 && <span className="mx-1 h-1 w-1 rounded-full bg-navy/20" />}
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition",
                    active ? "text-navy" : "text-navy/55 hover:text-navy"
                  )}
                >
                  {item.name}
                </Link>
              </span>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CalButton variant="dark" className="!px-4 !py-2">
              Book a Call
              <span className="grid h-5 w-5 place-items-center rounded-[6px] bg-white/10 text-[11px]">
                ↗
              </span>
            </CalButton>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white/50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("h-px w-4 bg-navy transition", open && "translate-y-[3.5px] rotate-45")} />
              <span className={cn("h-px w-4 bg-navy transition", open && "-translate-y-[3.5px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto mx-auto mt-3 max-h-[calc(100svh-5.5rem)] max-w-5xl overflow-y-auto rounded-[28px] p-4 bg-white lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-navy/80 hover:bg-navy/5"
              >
                {item.name}
              </Link>
            ))}
            <CalButton variant="dark" className="mt-2 w-full">
              Book a Call
            </CalButton>
          </div>
        </div>
      )}
    </header>
  );
}
