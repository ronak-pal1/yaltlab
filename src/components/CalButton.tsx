"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import GlassButton from "@/components/ui/GlassButton";
import { site } from "@/lib/content";

const NAMESPACE = "book";
const calLink = process.env.NEXT_PUBLIC_CAL_LINK ?? site.calLink;

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "ghost" | "dark";
};

export default function CalButton({ children, className, variant = "solid" }: Props) {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#2f6bff" },
          dark: { "cal-brand": "#2f6bff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <GlassButton
      variant={variant}
      className={className}
      data-cal-namespace={NAMESPACE}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"light"}'
    >
      {children}
    </GlassButton>
  );
}
