import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import SectionHeader from "@/components/ui/SectionHeader";
import StatGrid from "@/components/ui/StatGrid";
import ImageCard from "@/components/sections/ImageCard";
import NewsCard from "@/components/sections/NewsCard";
import CtaBand from "@/components/sections/CtaBand";
import { exploreTiles, impactFigures, img, news } from "@/data/site";

const valueChain = [
  {
    step: "01",
    title: "Mine",
    place: "Vittangi, Sweden",
    text: "High-grade natural graphite from the fully permitted Nunasvaara South mine.",
    href: "/operations/vittangi",
  },
  {
    step: "02",
    title: "Refine",
    place: "Luleå, Sweden",
    text: "Coated anode production powered by renewable Swedish electricity.",
    href: "/operations/lulea",
  },
  {
    step: "03",
    title: "Innovate",
    place: "Cambridge, UK · Rudolstadt, DE",
    text: "In-house battery and graphene technology from lab to scale-up.",
    href: "/products",
  },
  {
    step: "04",
    title: "Supply",
    place: "Europe & beyond",
    text: "Low-CO₂ anode and advanced materials for batteries and products.",
    href: "/markets",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-graphite">
        <Image
          src={img("2025/04/16174911/Lulea-Hero_V6_600x336.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="lattice absolute inset-0 -z-10 bg-gradient-to-t from-graphite via-graphite/85 to-graphite/50"
        />
        <Container className="flex min-h-[78vh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <Eyebrow dark>Battery anode &amp; advanced materials</Eyebrow>
          <h1 className="max-w-5xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance text-on-dark sm:text-6xl lg:text-8xl">
            A vertically integrated innovation materials company
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-dark/85 md:text-xl">
            Talga is accelerating the global transition to sustainable growth.
            Our ambition is to enable the world&apos;s most sustainable battery
            and consumer products — through vertical integration, a strategic
            location and innovative processes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ArrowLink href="/about" variant="button" dark>
              Discover Talga
            </ArrowLink>
            <ArrowLink href="/news" dark>
              Latest news
            </ArrowLink>
          </div>
        </Container>
      </section>

      {/* Latest news */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Latest from Talga"
            title="News & announcements"
            action={<ArrowLink href="/news">All news</ArrowLink>}
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {news.slice(0, 4).map((item) => (
              <li key={item.href}>
                <NewsCard item={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Intro */}
      <section className="border-t border-line py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="font-display text-3xl font-medium tracking-tight text-balance md:text-5xl">
              A cleaner future powered by graphitic innovation
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-6 lg:col-start-7">
            <p className="text-ink">
              Talga develops high-performance natural graphite battery anode and
              advanced graphitic materials that will help shift the world to a
              sustainable future.
            </p>
            <p>
              Our Tier 1 mine in northern Sweden is one of the highest-grade
              graphite resources in Europe and a secure source of battery-grade
              natural graphite. The mine is fully permitted and complemented by
              our coated anode production facility — the EVA Plant in Luleå —
              in operation since 2022, producing anode for customer
              qualification.
            </p>
            <p>
              Talga intends to phase up production from the EVA plant to a
              commercial, full-scale anode refinery.
            </p>
            <ArrowLink href="/about">More about Talga</ArrowLink>
          </div>
        </Container>
      </section>

      {/* Value chain */}
      <section className="lattice bg-graphite py-20 md:py-28">
        <Container>
          <SectionHeader
            dark
            eyebrow="From mine to anode"
            title="One integrated value chain"
            intro="Controlling every step — from natural graphite resources to anode production — gives our customers a clean, ethical and secure European supply."
          />
          <ol className="grid gap-px overflow-hidden rounded-lg bg-graphite-line sm:grid-cols-2 lg:grid-cols-4">
            {valueChain.map((s) => (
              <li key={s.step} className="bg-graphite-2">
                <Link href={s.href} className="group flex h-full flex-col p-8 transition-colors hover:bg-graphite">
                  <span className="font-display text-sm text-accent-bright">{s.step}</span>
                  <h3 className="mt-10 font-display text-3xl font-medium tracking-tight text-on-dark">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-on-dark-muted">
                    {s.place}
                  </p>
                  <p className="mt-6 flex-1 text-sm leading-relaxed text-on-dark-muted">
                    {s.text}
                  </p>
                  <span aria-hidden="true" className="mt-8 text-accent-bright transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-16">
            <StatGrid stats={impactFigures} dark />
            <p className="mt-4 text-xs text-on-dark-muted">
              *According to Talga&apos;s Life Cycle Assessment of production at
              the Luleå Anode Refinery.
            </p>
          </div>
        </Container>
      </section>

      {/* Explore */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow="Explore" title="Discover more about Talga" />
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {exploreTiles.map((tile) => (
              <li key={tile.title}>
                <ImageCard card={tile} aspect="aspect-[4/5]" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Find your solution with us"
        text="Talk to our team about green anode and graphene solutions for your products."
        href="/contact"
        label="Get in touch"
      />
    </>
  );
}
