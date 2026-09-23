import Link from "next/link";
import CenterCard from "@layouts/components/CenterCard";
import { centres } from "@lib/centres";

export const metadata = {
  title: "Nos centres | Groupe INOV",
  description: "Coordonnées et itinéraires des centres du Groupe INOV à Saint-Doulchard, Bourges et Nevers.",
};

export default function CentresPage() {
  return (
    <main>
      <section className="gi-page-hero">
        <div className="gi-wrap">
          <p className="gi-eyebrow"><span /> Groupe INOV · Nos centres</p>
          <h1>Trois sites. <em>Un accès simple.</em></h1>
          <p>Choisissez votre centre pour retrouver son activité, ses coordonnées et préparer votre venue.</p>
        </div>
      </section>
      <section className="gi-section gi-centres-section gi-directory">
        <div className="gi-wrap">
          <div className="gi-centre-grid">{centres.map((centre, index) => <CenterCard key={centre.slug} centre={centre} index={index} />)}</div>
          <div className="gi-direction-note"><strong>Un doute sur votre lieu d’examen ?</strong><p>Le lieu exact figure sur votre convocation. Pour une scintigraphie à Saint-Doulchard ou un TEP Scanner à Bourges, contactez directement le centre concerné.</p><Link className="gi-inline-link" href="/contact">Contacter le groupe <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
