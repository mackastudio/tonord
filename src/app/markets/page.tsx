import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ImageCard from "@/components/sections/ImageCard";
import CtaBand from "@/components/sections/CtaBand";
import { img, markets } from "@/data/site";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Talga materials serve electric vehicles, consumer electronics, energy storage, consumer goods and industrial applications.",
};

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Materials for electric mobility and the green transition"
        intro="It's not only what we drive and use that matters, but how it is made. Talga materials lower the footprint of the products shaping a cleaner future."
        image={img("2021/09/21064654/solutions-1160x650.jpg")}
      />
      <section className="py-20 md:py-28">
        <Container>
          <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m) => (
              <li key={m.title}>
                <ImageCard card={m} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand
        title="Explore our product range"
        text="From Talnode™ battery anode to Talphene™ graphene additives."
        href="/products"
        label="View products"
      />
    </>
  );
}
