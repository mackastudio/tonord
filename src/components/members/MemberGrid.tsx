import MemberCard from "@/components/members/MemberCard";
import type { Member } from "@/types";

export default function MemberGrid({ members }: { members: Member[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
