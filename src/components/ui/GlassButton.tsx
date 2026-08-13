import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "ghost" | "dark";
  type?: "button" | "submit";
  onClick?: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "children" | "className">;

export default function GlassButton({
  href,
  children,
  className,
  variant = "glass",
  type = "button",
  onClick,
  ...rest
}: Props) {
  const styles = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide",
    variant === "glass" && "glass-button",
    variant === "solid" && "btn-gloss",
    variant === "dark" && "btn-dark",
    variant === "ghost" &&
      "border border-navy/10 bg-white/50 text-navy/80 backdrop-blur-xl transition hover:bg-white/80",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        <span className="inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} {...rest}>
      <span className="inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
