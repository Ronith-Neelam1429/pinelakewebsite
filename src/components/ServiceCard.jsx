import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div
        className="service-card__image"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="service-card__body">
        <h5 className="service-card__title">{service.title}</h5>
        <div className="service-card__actions">
          <a href={siteConfig.phoneLink} className="btn btn--primary">
            Call Us
          </a>
          <Link
            to={`/services/${service.slug}`}
            className="btn btn--outline"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
