"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Hem", href: "/" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Medlemmar", href: "/medlemmar" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-6 md:gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "text-sm tracking-wide transition-colors",
                pathname === item.href
                  ? "text-accent underline underline-offset-4 decoration-1"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
