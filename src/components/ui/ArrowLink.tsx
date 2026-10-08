import Link from "next/link";
import { cn } from "@/lib/utils";

const isExternal = (href: string) => /^https?:\/\//.test(href);

export default function ArrowLink({
  href,
  children,
  variant = "link",
  dark = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "link" | "button";
  dark?: boolean;
  className?: string;
}) {
  const external = isExternal(href);
  const classes = cn(
    "group inline-flex items-center gap-2 text-sm font-medium transition-colors",
    variant === "button"
      ? dark
        ? "rounded-full bg-accent-bright px-6 py-3 text-graphite hover:bg-on-dark"
        : "rounded-full bg-graphite px-6 py-3 text-on-dark hover:bg-accent"
      : dark
        ? "text-accent-bright hover:text-on-dark"
        : "text-accent hover:text-ink",
    className
  );
  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        {external ? "↗" : "→"}
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
