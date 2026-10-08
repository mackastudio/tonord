import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <section className="lattice bg-graphite">
      <Container className="py-32">
        <Eyebrow dark>404</Eyebrow>
        <h1 className="font-display text-5xl font-medium tracking-tight text-on-dark">
          Page not found
        </h1>
        <p className="mt-4 text-on-dark-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <ArrowLink href="/" variant="button" dark className="mt-10">
          Back to home
        </ArrowLink>
      </Container>
    </section>
  );
}
