import Link from "next/link";
import CenterCard from "@layouts/components/CenterCard";
import { centres } from "@lib/centres";

export const metadata = { title: "Implantations et projets | Groupe INOV" };

export default function ProjetsPage() {
  return <main>
    <section className="gi-page-hero"><div className="gi-wrap"><p className="gi-eyebrow"><span /> Groupe INOV · Territoires</p><h1>Des centres inscrits <em>dans leur territoire.</em></h1><p>Découvrez les trois implantations présentées sur ce site et les informations pratiques de chaque lieu.</p></div></section>
    <section className="gi-section gi-centres-section"><div className="gi-wrap"><div className="gi-centre-grid">{centres.map((centre, index) => <CenterCard key={centre.slug} centre={centre} index={index} />)}</div><Link className="gi-inline-link gi-all-centres" href="/centres">Accéder à l’annuaire des centres ↗</Link></div></section>
  </main>;
}
