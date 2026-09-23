import Link from "next/link";

export const metadata = { title: "Message envoyé | Groupe INOV" };

export default function MerciPage() {
  return <main><section className="gi-page-hero"><div className="gi-wrap"><p className="gi-eyebrow"><span /> Groupe INOV · Contact</p><h1>Merci pour <em>votre message.</em></h1><p>Nous reviendrons vers vous dès que possible.</p><Link className="gi-btn gi-btn-primary" href="/">Retour à l’accueil ↗</Link></div></section></main>;
}
