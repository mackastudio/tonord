import Eyebrow from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  dark = false,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
        <h2
          className={cn(
            "font-display text-3xl font-medium tracking-tight text-balance md:text-5xl",
            dark ? "text-on-dark" : "text-ink"
          )}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              dark ? "text-on-dark-muted" : "text-ink-muted"
            )}
          >
            {intro}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
