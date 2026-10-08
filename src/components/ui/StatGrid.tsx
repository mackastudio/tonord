import type { Stat } from "@/types";
import { cn } from "@/lib/utils";

export default function StatGrid({
  stats,
  dark = false,
}: {
  stats: Stat[];
  dark?: boolean;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 border-t lg:grid-cols-4",
        dark ? "border-graphite-line" : "border-line"
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col border-b py-8 pr-4 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0",
            dark ? "border-graphite-line" : "border-line"
          )}
        >
          <dt
            className={cn(
              "order-2 mt-2 text-sm leading-snug",
              dark ? "text-on-dark-muted" : "text-ink-muted"
            )}
          >
            {stat.label}
          </dt>
          <dd
            className={cn(
              "order-1 font-display text-4xl font-medium tracking-tight md:text-5xl",
              dark ? "text-on-dark" : "text-ink"
            )}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
