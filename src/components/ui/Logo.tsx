import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="font-display text-2xl font-light tracking-[0.15em] uppercase text-ink hover:text-accent transition-colors">
      ToNord
    </Link>
  );
}
