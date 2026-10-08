import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";

export default function CtaBand({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-accent">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-white/80">{text}</p>
        </div>
        <ArrowLink href={href} variant="button" className="shrink-0 self-start md:self-auto">
          {label}
        </ArrowLink>
      </Container>
    </section>
  );
}
