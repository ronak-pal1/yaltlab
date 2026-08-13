"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { site } from "@/lib/content";

const NAMESPACE = "contact";
const calLink = process.env.NEXT_PUBLIC_CAL_LINK ?? site.calLink;

export default function CalEmbed() {
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
    <div className="h-[680px] w-full overflow-hidden sm:h-[740px]">
      <Cal
        namespace={NAMESPACE}
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
