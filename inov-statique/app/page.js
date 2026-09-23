import Image from "next/image";
import Link from "next/link";
import CenterCard from "@layouts/components/CenterCard";
import { centres } from "@lib/centres";

export const metadata = {
  title: "Groupe INOV | L'imagerie de précision, proche de vous",
  description: "Découvrez les centres du Groupe INOV à Saint-Doulchard, Bourges et Nevers. Médecine nucléaire, scintigraphie et TEP Scanner.",
};

export default function Home() {
  return (
    <main>
      <section className="gi-hero">
        <div className="gi-wrap gi-hero-grid">
          <div className="gi-hero-copy">
            <p className="gi-eyebrow"><span /> Groupe INOV · Médecine nucléaire</p>
            <h1>La précision médicale. <em>La proximité en plus.</em></h1>
            <p className="gi-hero-intro">Nous réunissons des équipes et des centres dédiés à l’imagerie médicale pour accompagner chaque parcours avec expertise, clarté et attention.</p>
            <div className="gi-hero-actions">
              <Link className="gi-btn gi-btn-primary" href="/centres">Trouver un centre <span aria-hidden="true">↗</span></Link>
              <Link className="gi-text-link" href="#groupe">Découvrir le groupe <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="gi-hero-proof"><span className="gi-proof-number">03</span><span>implantations à Saint-Doulchard,<br />Bourges et Nevers</span></div>
          </div>
          <div className="gi-hero-visual">
            <Image src="/images/scanner4.jpg" alt="Illustration d’une prise en charge en imagerie médicale" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="gi-hero-image-note"><span className="gi-note-line" /> Expertise médicale<br />&amp; coordination</div>
          </div>
        </div>
        <div className="gi-hero-bottom gi-wrap"><span>01 / 03</span><span>Soigner avec précision. Agir avec proximité.</span></div>
      </section>

      <section id="groupe" className="gi-section gi-intro-section">
        <div className="gi-wrap gi-intro-grid">
          <p className="gi-section-kicker">01 — Le groupe</p>
          <div>
            <h2>Une même exigence médicale, <span>plusieurs territoires.</span></h2>
            <p>Le Groupe INOV accompagne le développement et l’organisation de centres de médecine nucléaire. Son rôle : réunir les compétences médicales, les équipes de terrain et les moyens techniques autour d’une prise en charge lisible pour les patients et les professionnels de santé.</p>
            <Link className="gi-inline-link" href="/histoire">Découvrir notre histoire <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section id="centres" className="gi-section gi-centres-section">
        <div className="gi-wrap">
          <div className="gi-section-head">
            <div><p className="gi-section-kicker">02 — Nos implantations</p><h2>Le bon centre, <span>au bon endroit.</span></h2></div>
            <p>Retrouvez en quelques clics votre lieu d’examen, ses coordonnées et son itinéraire.</p>
          </div>
          <div className="gi-centre-grid">{centres.map((centre, index) => <CenterCard key={centre.slug} centre={centre} index={index} />)}</div>
          <Link className="gi-inline-link gi-all-centres" href="/centres">Tous nos centres <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section id="expertises" className="gi-section gi-expertise-section">
        <div className="gi-wrap">
          <div className="gi-section-head"><div><p className="gi-section-kicker">03 — Notre approche</p><h2>Une organisation au service <span>de la qualité des soins.</span></h2></div></div>
          <div className="gi-pillar-grid">
            <article><span className="gi-pillar-num">01</span><h3>Expertise médicale</h3><p>Des activités de scintigraphie, de cardiologie nucléaire et d’imagerie TEP portées par des équipes spécialisées.</p></article>
            <article><span className="gi-pillar-num">02</span><h3>Coordination</h3><p>Des centres et des partenaires qui travaillent ensemble pour rendre le parcours plus clair, de l’orientation à l’examen.</p></article>
            <article><span className="gi-pillar-num">03</span><h3>Présence locale</h3><p>Des implantations à Bourges, Saint-Doulchard et Nevers, au plus près des besoins de chaque territoire.</p></article>
          </div>
          <Link className="gi-inline-link gi-inline-light" href="/services">Explorer nos expertises <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="gi-section gi-cta-section"><div className="gi-wrap gi-cta-inner"><div><p className="gi-section-kicker">Groupe INOV</p><h2>Un projet, une question,<br /><span>un échange à initier ?</span></h2></div><Link className="gi-btn gi-btn-primary" href="/contact">Nous contacter <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
