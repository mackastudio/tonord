import Link from "next/link";
import MemberGrid from "@/components/members/MemberGrid";
import { members } from "@/data/members";

export default function HemPage() {
  const featuredMembers = members.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-32">
        <p className="text-xs tracking-[0.25em] uppercase text-ink-muted mb-8">
          Föreningen ToNord
        </p>
        {/* TODO: real tagline */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-ink leading-none mb-10 max-w-3xl">
          Musik.<br />Konst.<br />Gemenskap.
        </h1>
        {/* TODO: real description */}
        <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-xl mb-12">
          ToNord är en förening för musiker och multidisciplinära konstnärer.
          Vi skapar tillsammans och delar vår konst med världen.
        </p>
        <Link
          href="/om-oss"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-accent border border-accent px-6 py-3 hover:bg-accent hover:text-bg transition-colors"
        >
          Läs mer om oss →
        </Link>
      </section>

      {/* Member teaser */}
      {featuredMembers.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-3xl font-light text-ink">
                Medlemmar
              </h2>
              <Link
                href="/medlemmar"
                className="text-sm text-accent hover:underline underline-offset-4 tracking-wide"
              >
                Se alla →
              </Link>
            </div>
            <MemberGrid members={featuredMembers} />
          </div>
        </section>
      )}
    </>
  );
}
