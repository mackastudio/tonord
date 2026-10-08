import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PageHero from "@/components/sections/PageHero";
import { offices } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talga offices in Sweden, Australia, the United Kingdom and Germany.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Talga operates across four countries. Reach the team closest to you."
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow="Offices" title="Where to find us" />
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {offices.map((o) => (
              <li key={o.city} className="flex flex-col bg-paper p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {o.country}
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-tight">{o.city}</h3>
                {o.note && <p className="mt-1 text-sm text-ink-muted">{o.note}</p>}
                <address className="mt-6 flex-1 text-sm not-italic leading-relaxed">
                  <span className="font-medium">{o.entity}</span>
                  {o.address.map((line) => (
                    <span key={line} className="block text-ink-muted">
                      {line}
                    </span>
                  ))}
                </address>
                <div className="mt-6 space-y-1 border-t border-line pt-6 text-sm">
                  {o.phone && (
                    <a href={`tel:${o.phone.replace(/[^+\d]/g, "").replace("+460", "+46")}`} className="block hover:text-accent">
                      {o.phone}
                    </a>
                  )}
                  {o.email && (
                    <a href={`mailto:${o.email}`} className="block text-accent hover:text-ink">
                      {o.email}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/50 py-20">
        <Container className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-medium">Postal address</h2>
            <p className="mt-3 text-sm text-ink-muted">PO Box 720, West Perth, WA 6872, Australia</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium">Share registry</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Automic Group
              <br />
              Level 5, 191 St Georges Terrace, Perth WA 6000
              <br />
              1300 288 664 (within Australia)
              <br />
              +61 (0) 2 9698 5414 (international)
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium">Feedback &amp; complaints</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Switchboard: +46 (0) 10-303 71 00
              <br />
              <a href="mailto:info.se@talgagroup.com" className="text-accent">
                info.se@talgagroup.com
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
