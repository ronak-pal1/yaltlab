import { cn } from "@/lib/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
