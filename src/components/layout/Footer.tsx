import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { INVESTORS_URL, socials } from "@/data/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Board & Management", href: "/about#leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Products", href: "/products" },
      { label: "Markets", href: "/markets" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Operations",
    links: [
      { label: "Luleå Anode Refinery", href: "/operations/lulea" },
      { label: "Vittangi Graphite Mine", href: "/operations/vittangi" },
      { label: "Investor centre ↗", href: INVESTORS_URL },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="lattice mt-auto bg-graphite text-on-dark-muted">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            A vertically integrated battery anode and advanced materials
            company — from Swedish graphite to green anode.
          </p>
          <address className="mt-6 text-sm not-italic leading-relaxed">
            Suite 3.03, Level 3, 46 Colin Street
            <br />
            West Perth, WA 6005, Australia
            <br />
            <a href="mailto:info@talgagroup.com" className="text-on-dark hover:text-accent-bright">
              info@talgagroup.com
            </a>
          </address>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-on-dark">
              {col.title}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-on-dark">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-on-dark">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-on-dark">
            Follow
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-on-dark">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-graphite-line">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© {year} Talga Group. All rights reserved.</p>
          <p>ASX: TLG</p>
        </Container>
      </div>
    </footer>
  );
}
