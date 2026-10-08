import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PageHero from "@/components/sections/PageHero";
import ProductRow from "@/components/sections/ProductRow";
import CtaBand from "@/components/sections/CtaBand";
import { advancedProducts, batteryProducts, img } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Talnode™ green battery anodes and Talphite™ / Talphene™ graphitic materials and graphene additives.",
};

const initiatives = [
  {
    title: "EU Project NoVOC",
    text: "Cutting volatile organic compounds in battery production through solvent-free electrodes. Talga supplies graphite and silicon-carbon anode materials for wet and dry electrode processes.",
  },
  {
    title: "LIFE GRAPhiREC",
    text: "An EU pilot for industrial-scale recycling of graphite from battery waste to reduce Europe's import dependence. Talga leads the graphite post-processing work.",
  },
  {
    title: "UK Battery Centre of Excellence",
    text: "Our Cambridge facility for battery material development — including next-generation silicon and solid-state anodes and conductive additives for cathodes.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Green battery and advanced materials"
        intro="Mined and refined in Sweden from our own natural graphite using renewable energy — for more sustainable batteries and consumer products."
        image={img("2023/12/13134013/Battery-materials-header-1160x416.jpg")}
      />

      <section id="battery-materials" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Battery materials"
            title="Talnode™ battery anodes"
            intro="Anode is the active negative half of a lithium-ion battery. Low-CO₂ anode supplied from within the EU can dramatically reduce the emissions of making electric vehicles."
          />
          <div className="space-y-20 md:space-y-28">
            {batteryProducts.map((p, i) => (
              <ProductRow key={p.name} product={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <section className="lattice bg-graphite py-20 md:py-28">
        <Container>
          <SectionHeader
            dark
            eyebrow="Research & partnerships"
            title="Developing the next generation"
          />
          <ul className="grid gap-px overflow-hidden rounded-lg bg-graphite-line md:grid-cols-3">
            {initiatives.map((i) => (
              <li key={i.title} className="bg-graphite-2 p-8">
                <h3 className="font-display text-xl font-medium text-on-dark">{i.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">{i.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="advanced-materials" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Advanced materials"
            title="Graphitic materials & graphene additives"
            intro="Our in-house technology converts high-grade natural graphite into functionalised graphene — making concrete, coatings, plastics and energy storage stronger, longer-lasting, more conductive and lighter."
          />
          <div className="space-y-20 md:space-y-28">
            {advancedProducts.map((p, i) => (
              <ProductRow key={p.name} product={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Find your solution with us"
        text="Interested in Talnode™, Talphite™ or Talphene™? Our commercial team is ready to help."
        href="/contact"
        label="Contact sales"
      />
    </>
  );
}
