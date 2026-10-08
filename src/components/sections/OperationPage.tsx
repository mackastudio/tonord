import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import SectionHeader from "@/components/ui/SectionHeader";
import PageHero from "@/components/sections/PageHero";
import ImageCard from "@/components/sections/ImageCard";
import type { Card } from "@/types";

type Fact = { label: string; text: string };

export default function OperationPage({
  eyebrow,
  title,
  intro,
  heroImage,
  overviewTitle,
  overview,
  overviewImage,
  factsTitle,
  facts,
  eia,
  updates,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  overviewTitle: string;
  overview: string[];
  overviewImage: string;
  factsTitle: string;
  facts: Fact[];
  eia: { text: string; href: string };
  updates: Card[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} image={heroImage} />

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="font-display text-3xl font-medium tracking-tight text-balance md:text-4xl">
              {overviewTitle}
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink-muted">
              {overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface">
            <Image src={overviewImage} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="lattice bg-graphite py-20 md:py-28">
        <Container>
          <SectionHeader dark eyebrow="In brief" title={factsTitle} />
          <dl className="grid gap-px overflow-hidden rounded-lg bg-graphite-line sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="bg-graphite-2 p-8">
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
                  {f.label}
                </dt>
                <dd className="mt-4 leading-relaxed text-on-dark">{f.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow="Updates" title="Latest milestones" />
          <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
            {updates.map((u) => (
              <li key={u.title}>
                <ImageCard card={u} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/50 py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Environmental Impact Assessment</Eyebrow>
            <p className="leading-relaxed text-ink-muted">{eia.text}</p>
            <ArrowLink href={eia.href} className="mt-6">
              Read the full assessment
            </ArrowLink>
          </div>
          <div>
            <Eyebrow>Feedback, questions &amp; complaints</Eyebrow>
            <p className="leading-relaxed text-ink-muted">
              Comments and complaints can be submitted by phone, email or
              online form — anonymously if you prefer. Every submission is
              handled through a defined process.
            </p>
            <p className="mt-6 space-y-1 text-sm">
              <a href="tel:+46103037100" className="block text-ink hover:text-accent">
                +46 (0) 10-303 71 00
              </a>
              <a href="mailto:info.se@talgagroup.com" className="block text-ink hover:text-accent">
                info.se@talgagroup.com
              </a>
            </p>
            <ArrowLink href="https://www.talgagroup.com/klagomalshantering/" className="mt-6">
              Online form
            </ArrowLink>
          </div>
        </Container>
      </section>
    </>
  );
}
