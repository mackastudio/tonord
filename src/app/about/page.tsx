import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeader from "@/components/ui/SectionHeader";
import StatGrid from "@/components/ui/StatGrid";
import PageHero from "@/components/sections/PageHero";
import ImageCard from "@/components/sections/ImageCard";
import PersonList from "@/components/sections/PersonList";
import CtaBand from "@/components/sections/CtaBand";
import { board, img, keyFigures, management, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Talga develops green graphite battery anode products, technology and advanced materials — controlling the chain from graphite resources to anode production in northern Sweden.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Talga"
        title="A cleaner future powered by graphitic innovation"
        intro="Talga develops green graphite battery anode products, technology and advanced materials for a cleaner, more sustainable world."
        image={img("2023/12/13140643/About-header-1160x416.jpg")}
      />

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Talga in short</Eyebrow>
            <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
              <p className="text-ink">
                By controlling the value chain from natural graphite resources
                to anode production in northern Sweden, Talga offers a clean,
                ethical and secure supply of battery materials.
              </p>
              <p>
                With in-house mining and materials technologies, we provide a
                range of graphitic materials for batteries, consumer products
                and industrial applications. The group is headquartered in
                Perth, Australia, with operations in Sweden, Germany and the
                United Kingdom.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface">
            <Image
              src={img("2021/09/17070526/about-us-talga-in-short.jpg")}
              alt="Talga operations in northern Sweden"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
        <Container className="mt-20">
          <StatGrid stats={keyFigures} />
        </Container>
      </section>

      <section className="border-t border-line bg-surface/50 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Graphite projects"
            title="Three projects in northern Sweden"
            intro="Mineral resource fact sheets are available for each project."
          />
          <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
            {projects.map((p) => (
              <li key={p.title}>
                <ImageCard card={p} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="leadership" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="Board & Management"
            intro="Experienced leadership across geoscience, battery technology, finance and public policy."
          />
          <h3 className="mb-6 font-display text-2xl font-medium tracking-tight">
            Board of Directors
          </h3>
          <PersonList people={board} />
          <h3 className="mb-6 mt-16 font-display text-2xl font-medium tracking-tight">
            Executive Management
          </h3>
          <PersonList people={management} />
        </Container>
      </section>

      <CtaBand
        title="Join us in building the future"
        text="We're looking for people who care about sustainability, technology and innovation."
        href="/careers"
        label="Careers at Talga"
      />
    </>
  );
}
