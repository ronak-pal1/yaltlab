"use client";

import { FormEvent, useState } from "react";
import { projectTypes, site } from "@/lib/content";
import GlassButton from "@/components/ui/GlassButton";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const type = String(data.get("type") || "");
    const brief = String(data.get("brief") || "");

    const subject = encodeURIComponent(`YaltLab sprint — ${name} (${type})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject: ${type}\n\n${brief}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="py-6 text-center">
        <p className="font-display text-2xl text-navy">Your mail client should be open.</p>
        <p className="mt-2 text-sm text-navy/60">
          If nothing happened, write us at{" "}
          <a className="text-blue-bright underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-navy/70">
          Name
          <input name="name" required className="field" placeholder="Ada Lovelace" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-navy/70">
          Email
          <input
            name="email"
            type="email"
            required
            className="field"
            placeholder="ada@company.com"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-navy/70">
        Project type
        <select name="type" className="field appearance-none" defaultValue={projectTypes[0]}>
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-navy text-white">
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm text-navy/70">
        Brief
        <textarea
          name="brief"
          required
          rows={6}
          className="field resize-none"
          placeholder="What are you shipping, and by when?"
        />
      </label>
      <GlassButton type="submit" variant="solid" className="mt-2 w-full">
        Send & book a call
      </GlassButton>
    </form>
  );
}
