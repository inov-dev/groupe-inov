"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Brand({ light = false }) {
  return (
    <Link href="/" className={`gi-brand${light ? " gi-brand-light" : ""}`} aria-label="Groupe INOV — accueil">
      <span className="gi-brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="17.5" stroke="currentColor" strokeWidth="4" />
          <path d="M10 34C18 16 31 10 43 11" stroke="#9e292b" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="38.5" cy="10" r="4" fill="#9e292b" />
          <circle cx="24" cy="24" r="4" fill="currentColor" />
        </svg>
      </span>
      <span className="gi-brand-words"><strong>INOV</strong><small>GROUPE</small></span>
    </Link>
  );
}

const links = [
  { label: "Le groupe", href: "/#groupe" },
  { label: "Expertises", href: "/#expertises" },
  { label: "Nos centres", href: "/centres" },
  { label: "Équipe", href: "/equipe" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="gi-header">
      <nav className="gi-nav" aria-label="Navigation principale">
        <Brand />
        <button className="gi-menu-toggle" type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="gi-menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <div id="gi-menu" className={`gi-nav-links${open ? " is-open" : ""}`}>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href || (href === "/centres" && pathname.startsWith("/centres")) ? "is-active" : ""} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" className="gi-nav-contact" onClick={() => setOpen(false)}>Nous contacter <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  );
}
