import type { Metadata } from "next";
import PageHeading from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Om oss – ToNord",
  description: "Läs om ToNord, en förening för musiker och multidisciplinära konstnärer.",
};

export default function OmOssPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <PageHeading>Om oss</PageHeading>

      <div className="max-w-2xl space-y-8 text-base leading-relaxed text-ink">
        {/* TODO: real copy */}
        <p>
          ToNord är en förening grundad av konstnärer för konstnärer. Vi samlar
          musiker, kompositörer och multidisciplinära skapare under ett gemensamt
          tak — med målet att stärka varandra och göra vår konst tillgänglig för fler.
        </p>

        <blockquote className="font-display text-3xl md:text-4xl font-light text-ink leading-snug border-l-2 border-accent pl-8 py-2 my-12">
          {/* TODO: real quote */}
          "Vi tror på konsten som ett gemensamt språk."
        </blockquote>

        <p>
          Föreningen är baserad i norra Sverige och är öppen för konstnärer inom
          alla discipliner. Våra medlemmar arbetar inom musik, komposition, ljudkonst,
          visuell konst och performance.
        </p>

        <p>
          {/* TODO: contact info or membership process */}
          Vill du veta mer om föreningen eller ansöka om medlemskap?
          Hör av dig till oss så berättar vi mer.
        </p>
      </div>
    </div>
  );
}
