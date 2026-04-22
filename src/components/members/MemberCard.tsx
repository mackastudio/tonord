import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { Member } from "@/types";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group">
      <div className="overflow-hidden mb-4">
        {member.photoPath ? (
          <Image
            src={member.photoPath}
            alt={member.name}
            width={600}
            height={600}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <PlaceholderImage name={member.name} />
        )}
      </div>

      <div>
        <h2 className="font-display text-2xl font-light text-ink leading-tight">
          {member.name}
        </h2>
        <p className="text-sm text-ink-muted tracking-wide mt-0.5 mb-3">
          {member.role}
        </p>
        <p className="text-sm text-ink leading-relaxed">
          {member.bio}
        </p>

        {(member.website || member.instagram) && (
          <div className="flex gap-4 mt-4">
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline underline-offset-2 tracking-wide"
              >
                Webbplats
              </a>
            )}
            {member.instagram && (
              <a
                href={`https://instagram.com/${member.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline underline-offset-2 tracking-wide"
              >
                Instagram
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
