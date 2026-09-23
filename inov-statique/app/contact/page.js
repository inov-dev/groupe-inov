import Link from "next/link";

export const metadata = {
  title: "Contact | Groupe INOV",
  description: "Contactez le Groupe INOV pour une question professionnelle, un partenariat ou un projet.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="gi-page-hero gi-contact-hero"><div className="gi-wrap">
        <p className="gi-eyebrow"><span /> Groupe INOV · Contact</p>
        <h1>Parlons de <em>votre projet.</em></h1>
        <p>Une question professionnelle, un partenariat ou une proposition de collaboration ? Écrivez-nous.</p>
      </div></section>
      <section className="gi-section"><div className="gi-wrap gi-contact-grid">
        <div className="gi-contact-info">
          <p className="gi-section-kicker">Échanger avec le groupe</p>
          <h2>Nous sommes à votre écoute.</h2>
          <p>Pour joindre un centre au sujet d’un examen ou d’un rendez-vous, utilisez les coordonnées de sa page dédiée.</p>
          <Link className="gi-inline-link" href="/centres">Voir les centres ↗</Link>
          <div style={{ marginTop: 38 }}><strong>Groupe INOV</strong><p>3 rue Mably<br />18000 Bourges</p><a href="mailto:contact@groupe-inov.com">contact@groupe-inov.com</a></div>
        </div>
        <form className="gi-contact-form" action="https://formsubmit.co/anoyelle.inov@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Nouveau message depuis groupe-inov.com" />
          <input type="hidden" name="_next" value="https://groupe-inov.com/contact/merci" />
          <input type="hidden" name="_template" value="table" />
          <div className="gi-honeypot" aria-hidden="true"><label>Ne pas remplir ce champ<input type="text" name="_honey" tabIndex="-1" autoComplete="off" /></label></div>
          <div className="gi-form-row"><label>Nom et prénom<input type="text" name="nom" autoComplete="name" required maxLength="100" /></label><label>Adresse e-mail<input type="email" name="email" autoComplete="email" required maxLength="160" /></label></div>
          <label>Organisation <span style={{ fontWeight: 400 }}>(facultatif)</span><input type="text" name="organisation" autoComplete="organization" maxLength="120" /></label>
          <label>Objet<input type="text" name="objet" required maxLength="160" /></label>
          <label>Votre message<textarea name="message" required minLength="10" maxLength="3000" /></label>
          <label className="gi-form-consent"><input type="checkbox" required /> Je confirme que mon message ne contient pas de données médicales. J’ai lu les <Link href="/mentions-legales">informations sur le formulaire</Link>.</label>
          <p className="gi-form-notice">Le formulaire est protégé par une vérification antirobot et un champ de contrôle invisible.</p>
          <button className="gi-btn gi-btn-primary" type="submit">Envoyer le message <span aria-hidden="true">↗</span></button>
        </form>
      </div></section>
    </main>
  );
}
