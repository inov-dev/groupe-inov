import Link from "next/link";
import Image from "next/image";
import { mapHref } from "@lib/centres";

export default function CenterCard({ centre, index }) {
  return (
    <article className="gi-centre-card">
      <Link href={`/centres/${centre.slug}`} className="gi-centre-photo" aria-label={`Découvrir le centre de ${centre.name}`}>
        <Image src={centre.image} alt={centre.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="gi-photo-index">0{index + 1} / 03</span>
      </Link>
      <div className="gi-centre-card-body">
        <div className="gi-centre-meta"><span>{centre.entity}</span><span>{centre.type}</span></div>
        <h3><Link href={`/centres/${centre.slug}`}>{centre.name}</Link></h3>
        <p className="gi-centre-speciality">{centre.speciality}</p>
        <p className="gi-centre-address">{centre.address.slice(1).join(", ")}</p>
        <div className="gi-centre-actions">
          <Link href={`/centres/${centre.slug}`}>Voir le centre <span aria-hidden="true">↗</span></Link>
          <a href={mapHref(centre)} target="_blank" rel="noopener noreferrer">Itinéraire <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}
