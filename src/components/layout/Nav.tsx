"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { INVESTORS_URL, navItems } from "@/data/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Highlight a top-level item for any page within its first path segment
  const isActive = (href: string) => {
    const section = "/" + href.split("#")[0].split("/")[1];
    return pathname === section || pathname.startsWith(section + "/");
  };

  return (
    <>
      {/* Desktop */}
      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "block rounded-full px-3.5 py-2 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-accent-bright"
                    : "text-on-dark-muted hover:text-on-dark"
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-60 rounded-lg border border-graphite-line bg-graphite-2 p-2 shadow-2xl">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-on-dark-muted hover:bg-graphite hover:text-on-dark"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li className="ml-3">
            <a
              href={INVESTORS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-graphite-line px-4 py-2 text-sm text-on-dark transition-colors hover:border-accent-bright hover:text-accent-bright"
            >
              Investors ↗
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile */}
      <button
        type="button"
        className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-on-dark lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" />
          )}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-graphite-line bg-graphite px-4 pb-8 pt-2 sm:px-6 lg:hidden"
        >
          <ul className="divide-y divide-graphite-line">
            {navItems.map((item) => (
              <li key={item.href} className="py-3">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 font-display text-xl text-on-dark"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 space-y-1 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm text-on-dark-muted"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-3">
              <a
                href={INVESTORS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 font-display text-xl text-accent-bright"
              >
                Investors ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
