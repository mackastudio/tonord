import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Talga — home"
      className={cn("inline-flex items-center gap-2.5 text-on-dark", className)}
    >
      <svg viewBox="0 0 28 32" className="h-7 w-auto" aria-hidden="true">
        <path
          d="M14 1 27 8.5v15L14 31 1 23.5v-15z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M14 9.5 20.5 13v7L14 23.5 7.5 20v-7z" className="fill-accent-bright" />
      </svg>
      <span className="font-display text-2xl font-semibold tracking-tight lowercase">
        talga
      </span>
    </Link>
  );
}
