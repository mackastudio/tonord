import Image from "next/image";
import type { NewsItem } from "@/types";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-paper transition-colors hover:border-ink"
    >
      <div className="relative aspect-[16/9] bg-surface">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-5">
        <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink">
          {item.title}
        </h3>
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
          Read release <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );
}
