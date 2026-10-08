import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeader from "@/components/ui/SectionHeader";
import PageHero from "@/components/sections/PageHero";
import ImageCard from "@/components/sections/ImageCard";
import { img, sustainabilityResources } from "@/data/site";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Sustainability is at the core of Talga's strategy — from low-CO₂ anode to net biodiversity gain.",
};

const pillars = [
  {
    title: "A smaller footprint",
    text: "Very high-grade ore and efficient industrial processes give our mine a much smaller physical footprint than traditional graphite mines.",
  },
  {
    title: "Lower emissions",
    text: "An independent Life Cycle Assessment by Minviro confirmed the low greenhouse gas profile of Talnode™-C — enabled by Swedish hydropower, localised production and in-house expertise.",
  },
  {
    title: "Restored landscapes",
    text: "We are committed to restoring the land once our operations are complete.",
  },
];

const climbPartners = [
  "Vattenfall",
  "LKAB",
  "Boliden",
  "Skellefteå Kraft",
  "Svenska kraftnät",
  "Heidelberg Materials",
  "Skanska",
  "Specialfastigheter",
  "SBMI",
  "Talga",
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Sustainability is our strategy — not an add-on"
        intro="Since day one, sustainability has been at the core of Talga's mission: green anode for EVs and smartphones, and graphene that makes everyday goods stronger, lighter, longer-lasting and greener."
        image={img("2023/12/13134834/Sustainability-1160x416.jpg")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow="Our vision" title="Cleaner materials, from the ground up" />
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {pillars.map((p, i) => (
              <li key={p.title} className="bg-paper p-8">
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="lattice bg-graphite py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-graphite-2">
            <Image
              src={img("2023/05/22183310/CLIMB_landscape-1160x606.png")}
              alt="Northern Swedish landscape"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow dark>CLIMB · Biodiversity</Eyebrow>
            <h2 className="font-display text-3xl font-medium tracking-tight text-on-dark md:text-4xl">
              Measuring our way to net biodiversity gain
            </h2>
            <p className="mt-6 leading-relaxed text-on-dark-muted">
              Talga aims for net biodiversity gain where we operate. As a
              partner in the CLIMB project we help build a transparent method
              for assessing both the negative and positive biodiversity impacts
              of development and restoration.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {climbPartners.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-graphite-line px-3 py-1 text-xs text-on-dark-muted"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="How we're doing it"
            title="Policies, assessments & reports"
          />
          <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {sustainabilityResources.map((r) => (
              <li key={r.title}>
                <ImageCard card={r} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
