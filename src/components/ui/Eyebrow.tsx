import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em]",
        dark ? "text-accent-bright" : "text-accent"
      )}
    >
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}
