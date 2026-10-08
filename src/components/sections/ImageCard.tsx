import Image from "next/image";
import Link from "next/link";
import type { Card } from "@/types";
import { cn } from "@/lib/utils";

export default function ImageCard({
  card,
  dark = false,
  aspect = "aspect-[16/10]",
}: {
  card: Card;
  dark?: boolean;
  aspect?: string;
}) {
  const body = (
    <>
      <div className={cn("relative overflow-hidden rounded-lg bg-surface", aspect)}>
        <Image
          src={card.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3
        className={cn(
          "mt-5 font-display text-xl font-medium tracking-tight",
          dark ? "text-on-dark" : "text-ink"
        )}
      >
        {card.title}
        {card.href && (
          <span aria-hidden="true" className="ml-2 inline-block text-accent transition-transform group-hover:translate-x-1">
            {card.href.startsWith("http") ? "↗" : "→"}
          </span>
        )}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          dark ? "text-on-dark-muted" : "text-ink-muted"
        )}
      >
        {card.description}
      </p>
    </>
  );

  if (!card.href) return <div>{body}</div>;
  return card.href.startsWith("http") ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer" className="group block">
      {body}
    </a>
  ) : (
    <Link href={card.href} className="group block">
      {body}
    </Link>
  );
}
