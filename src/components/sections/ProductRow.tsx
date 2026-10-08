import Image from "next/image";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

export default function ProductRow({
  product,
  reverse = false,
}: {
  product: Product;
  reverse?: boolean;
}) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      <div
        className={cn(
          "relative aspect-[3/2] overflow-hidden rounded-lg bg-surface",
          reverse && "md:order-2"
        )}
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {product.tagline}
        </p>
        <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
          {product.name}
        </h3>
        <p className="mt-5 leading-relaxed text-ink-muted">{product.description}</p>
        <ul className="mt-6 space-y-3 border-t border-line pt-6">
          {product.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
