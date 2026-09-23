import Link from "next/link";

export const metadata = { title: "Nos expertises | Groupe INOV", description: "Médecine nucléaire, imagerie TEP et organisation de centres de soins au sein du Groupe INOV." };

export default function ServicesPage() {
  return <main>
    <section className="gi-page-hero"><div className="gi-wrap"><p className="gi-eyebrow"><span /> Groupe INOV · Expertises</p><h1>La maîtrise médicale <em>à chaque étape.</em></h1><p>Des pratiques d’imagerie spécialisées, soutenues par une organisation attentive à la qualité du parcours.</p></div></section>
    <section className="gi-section"><div className="gi-wrap"><div className="gi-feature-list">
      <article><span>01 / Imagerie</span><div><h2>Scintigraphie</h2><p>Au centre INOV de Saint-Doulchard, les équipes réalisent des examens de scintigraphie et de cardiologie nucléaire pour explorer le fonctionnement des organes.</p><Link className="gi-inline-link" href="/centres/saint-doulchard">Découvrir Saint-Doulchard ↗</Link></div></article>
      <article><span>02 / Imagerie</span><div><h2>TEP Scanner</h2><p>À Bourges, CHERMED accueille les patients dans une unité dédiée aux examens TEP, en lien avec les médecins du Groupe INOV.</p><Link className="gi-inline-link" href="/centres/bourges">Découvrir Bourges ↗</Link></div></article>
      <article><span>03 / Territoires</span><div><h2>Coordination des centres</h2><p>Le groupe accompagne les centres dans leur organisation, leurs moyens techniques et la coordination des équipes médicales et opérationnelles.</p><Link className="gi-inline-link" href="/centres">Voir nos implantations ↗</Link></div></article>
    </div></div></section>
  </main>;
}
