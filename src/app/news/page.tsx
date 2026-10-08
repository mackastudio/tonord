import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";
import NewsCard from "@/components/sections/NewsCard";
import { INVESTORS_URL, news } from "@/data/site";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and news from Talga Group.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News & announcements"
        intro="Offtake agreements, permits, funding and milestones on the road to Europe's first natural graphite anode refinery."
      />
      <section className="py-20 md:py-28">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((item) => (
              <li key={item.href}>
                <NewsCard item={item} />
              </li>
            ))}
          </ul>
          <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink-muted">
              Looking for presentations, company reports or the full ASX
              announcement archive?
            </p>
            <ArrowLink href={INVESTORS_URL} variant="button">
              Investor centre
            </ArrowLink>
          </div>
        </Container>
      </section>
    </>
  );
}
