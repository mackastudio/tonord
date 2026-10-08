import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeader from "@/components/ui/SectionHeader";
import PageHero from "@/components/sections/PageHero";
import ImageCard from "@/components/sections/ImageCard";
import { img } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Help us build the future. Join Talga in sustainability, technology and innovation.",
};

const why = [
  {
    title: "About Talga",
    description: "A vertically integrated company from Swedish graphite to green anode.",
    href: "/about",
    image: img("2023/12/13164436/About-news-item.jpg"),
  },
  {
    title: "Sustainability",
    description: "Sustainability is at the core of everything we do.",
    href: "/sustainability",
    image: img("2023/12/13164415/Sustainability-news-item.jpg"),
  },
  {
    title: "Our locations",
    description: "Sweden, the United Kingdom, Germany and Australia.",
    href: "/contact",
    image: img("2021/09/14021116/perth-1160x650.jpg"),
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help us build the future"
        intro="Do you care about sustainability, technology and innovation — and enjoy working in a global, multicultural team? We'd love to hear from you."
        image={img("2023/12/13141824/Website-headers-1160x416.jpg")}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Working at Talga</Eyebrow>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Practical solutions to new and long-standing problems
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-6 lg:col-start-7">
            <p>
              We focus on finding practical solutions, and we&apos;re looking for
              people who collaborate well and thrive in a fast-paced
              environment.
            </p>
            <div className="rounded-lg border border-line bg-surface/60 p-6">
              <h3 className="font-display text-xl font-medium text-ink">Current vacancies</h3>
              <p className="mt-2 text-base">
                All genuine openings are published on our website. Check
                back regularly for new roles across Sweden, the UK, Germany
                and Australia.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface/50 py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow="Why Talga?" title="Get to know us" />
          <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
            {why.map((c) => (
              <li key={c.title}>
                <ImageCard card={c} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-lg border-l-4 border-accent bg-accent/5 p-6 md:p-8">
            <h2 className="font-display text-xl font-medium">Beware of recruitment scams</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
              Talga never asks for money, fund transfers or fees during
              recruitment, and neither do the agencies we work with. Official
              recruitment emails only come from a talgagroup.com address, and
              we never contact candidates by SMS or messaging apps such as
              WhatsApp.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
