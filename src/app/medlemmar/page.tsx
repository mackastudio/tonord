import type { Metadata } from "next";
import PageHeading from "@/components/ui/PageHeading";
import MemberGrid from "@/components/members/MemberGrid";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Medlemmar – ToNord",
  description: "Möt konstnärerna i ToNord.",
};

export default function MedlemmarPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <PageHeading>Medlemmar</PageHeading>
      <MemberGrid members={members} />
    </div>
  );
}
