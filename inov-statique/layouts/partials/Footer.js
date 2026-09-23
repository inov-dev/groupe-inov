import Link from "next/link";
import { Brand } from "./Header";

export default function Footer() {
  return (
    <footer className="gi-footer">
      <div className="gi-wrap gi-footer-top">
        <div>
          <Brand light />
          <p>Des centres de médecine nucléaire ancrés dans leurs territoires, réunis par une même exigence de qualité et de coordination.</p>
        </div>
        <div>
          <h2>Explorer</h2>
          <Link href="/centres">Nos centres</Link>
          <Link href="/services">Nos expertises</Link>
          <Link href="/equipe">Notre équipe</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2>Nos sites</h2>
          <Link href="/centres/saint-doulchard">Saint-Doulchard</Link>
          <Link href="/centres/bourges">Bourges — CHERMED</Link>
          <Link href="/centres/nevers">Nevers — CM2N</Link>
        </div>
        <div>
          <h2>Groupe INOV</h2>
          <p>3 rue Mably<br />18000 Bourges</p>
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
      </div>
      <div className="gi-wrap gi-footer-bottom"><span>© {new Date().getFullYear()} Groupe INOV</span><span>Précision médicale · Présence territoriale</span></div>
    </footer>
  );
}
