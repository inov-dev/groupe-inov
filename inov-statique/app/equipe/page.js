import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "L'équipe | Groupe INOV", description: "Découvrez la direction médicale et la direction générale déléguée du Groupe INOV." };

const team = [
  { name: "Dr Hugo Lemasle", role: "Médecin nucléaire · co-gérant de la SELARL INOV", photo: "/images/Hugo-Lemasle.jpeg" },
  { name: "Dr Victor Arnould", role: "Médecin nucléaire · co-gérant de la SELARL INOV", photo: "/images/Victor-Arnould.png" },
  { name: "Antonin Noyelle", role: "Directeur général délégué du Groupe INOV", photo: "/images/Antonin-Noyelle.png" },
];

export default function EquipePage() {
  return <main>
    <section className="gi-page-hero"><div className="gi-wrap"><p className="gi-eyebrow"><span /> Groupe INOV · Équipe</p><h1>Des compétences réunies <em>autour d’un même projet.</em></h1><p>La coordination du groupe s’appuie sur des praticiens engagés et une direction proche des équipes de terrain.</p></div></section>
    <section className="gi-section"><div className="gi-wrap"><p className="gi-section-kicker">Direction</p><div className="gi-team-grid">{team.map((member) => <article key={member.name}><div className="gi-team-photo"><Image src={member.photo} alt={`Portrait de ${member.name}`} fill sizes="(max-width: 900px) 100vw, 33vw" /></div><div className="gi-team-info"><h2>{member.name}</h2><p>{member.role}</p></div></article>)}</div><p className="gi-team-note">Les équipes médicales, techniques et administratives de chaque centre contribuent au fonctionnement quotidien du réseau.</p><Link className="gi-inline-link" href="/centres">Découvrir nos centres ↗</Link></div></section>
  </main>;
}
