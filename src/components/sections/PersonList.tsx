import type { Person } from "@/types";

export default function PersonList({ people }: { people: Person[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
      {people.map((p) => (
        <li key={p.name + p.role} className="bg-paper p-6 md:p-8">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-graphite font-display text-sm font-medium text-accent-bright"
            >
              {p.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <div>
              <h4 className="font-display text-lg font-medium tracking-tight">{p.name}</h4>
              <p className="text-sm text-accent">{p.role}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">{p.bio}</p>
        </li>
      ))}
    </ul>
  );
}
