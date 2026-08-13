import { cn } from "@/lib/cn";

type Variant = "default" | "dark" | "light";

export default function GlassCard({
  children,
  className,
  variant = "default",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  hover?: boolean;
}) {
  const surface =
    variant === "dark" ? "glass-dark" : variant === "light" ? "glass-light" : "glass";

  return (
    <div
      className={cn(
        surface,
        "min-w-0 rounded-[22px] sm:rounded-[28px]",
        hover && "transition-transform duration-500 ease-out hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
