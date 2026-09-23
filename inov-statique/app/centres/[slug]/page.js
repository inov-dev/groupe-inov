import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { centreBySlug, centres, mapHref } from "@lib/centres";

export function generateStaticParams() {
  return centres.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const centre = centreBySlug(params.slug);
  if (!centre) return {};
  return { title: `${centre.entity} ${centre.name} | Groupe INOV`, description: centre.description };
}

export default function CentrePage({ params }) {
  const centre = centreBySlug(params.slug);
  if (!centre) notFound();
  const other = centres.filter((item) => item.slug !== centre.slug);

  return (
    <main>
      <section className="gi-centre-hero">
        <div className="gi-wrap">
          <Link className="gi-back-link" href="/centres">← Tous les centres</Link>
          <div className="gi-centre-hero-grid">
            <div>
              <div className={`gi-detail-logo gi-detail-logo--${centre.slug}`}><Image src={centre.logo} alt={centre.logoAlt} fill sizes="210px" /></div>
              <p className="gi-eyebrow"><span /> {centre.entity} · {centre.type}</p>
              <h1>{centre.name}<em>{centre.speciality}</em></h1>
              <p>{centre.description}</p>
              <div className="gi-hero-actions"><a className="gi-btn gi-btn-primary" href={mapHref(centre)} target="_blank" rel="noopener noreferrer">Préparer mon itinéraire <span aria-hidden="true">↗</span></a><a className="gi-text-link" href={`tel:${centre.phoneHref}`}>Appeler le centre <span aria-hidden="true">↗</span></a></div>
            </div>
            <figure><Image src={centre.image} alt={centre.imageAlt} fill sizes="(max-width: 900px) 100vw, 45vw" /><figcaption>{centre.imageCaption}</figcaption></figure>
          </div>
        </div>
      </section>
      <section className="gi-section gi-practical-section"><div className="gi-wrap">
        <div className="gi-section-head"><div><p className="gi-section-kicker">Informations pratiques</p><h2>Venir au centre <span>en toute simplicité.</span></h2></div></div>
        <div className="gi-practical-grid">
          <div className="gi-practical-card"><span className="gi-practical-icon" aria-hidden="true">⌁</span><h3>Adresse</h3><address>{centre.address.map((line) => <span key={line}>{line}<br /></span>)}</address><a href={mapHref(centre)} target="_blank" rel="noopener noreferrer">Ouvrir l’itinéraire ↗</a></div>
          <div className="gi-practical-card"><span className="gi-practical-icon" aria-hidden="true">↗</span><h3>Contacter</h3><p>{centre.phoneNote && <span className="gi-small-note">{centre.phoneNote}<br /></span>}<a className="gi-phone" href={`tel:${centre.phoneHref}`}>{centre.phone}</a></p>{centre.email && <a href={`mailto:${centre.email}`}>{centre.email}</a>}{centre.hours && <p className="gi-small-note">{centre.hours}</p>}</div>
          <div className="gi-practical-card"><span className="gi-practical-icon" aria-hidden="true">→</span><h3>Votre venue</h3><p>{centre.access}</p></div>
        </div>
        <div className="gi-centre-website">
          <div><span className="gi-section-kicker">Site du centre</span><h3>{centre.websiteDisplay}</h3><p>{centre.websiteReady ? "Retrouvez les informations et les démarches propres à ce centre sur son site dédié." : "Le site dédié de ce centre est en préparation. Les informations pratiques restent disponibles sur cette page."}</p></div>
          {centre.websiteReady && <a className="gi-btn gi-btn-primary" href={centre.website} target="_blank" rel="noopener noreferrer">Visiter le site du centre <span aria-hidden="true">↗</span></a>}
        </div>
        <p className="gi-centre-note">{centre.note}</p>
      </div></section>
      <section className="gi-section gi-other-centres"><div className="gi-wrap"><div className="gi-section-head"><div><p className="gi-section-kicker">Le réseau INOV</p><h2>Explorer les autres sites</h2></div><Link className="gi-inline-link" href="/centres">Voir les trois centres ↗</Link></div><div className="gi-other-grid">{other.map((item) => <Link key={item.slug} href={`/centres/${item.slug}`}><span>{item.entity}</span><strong>{item.name}</strong><small>{item.speciality}</small><i aria-hidden="true">↗</i></Link>)}</div></div></section>
    </main>
  );
}
