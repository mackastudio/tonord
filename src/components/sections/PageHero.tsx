import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-graphite">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/30"
          />
        </>
      )}
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl font-medium tracking-tight text-balance text-on-dark sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark/85">
              {intro}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
