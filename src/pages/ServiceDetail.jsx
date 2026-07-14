import { useParams, Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { siteConfig } from "../data/siteConfig";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const related = services.filter((s) => s.slug !== slug);

  if (!service) {
    return (
      <div className="not-found">
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn--primary">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="page-header">
        <h1>{service.title}</h1>
      </div>

      <div className="detail-content">
        <img src={service.image} alt={service.title} className="detail-image" />
        <div className="detail-actions">
          <a href={siteConfig.phoneLink} className="btn btn--primary">
            Call Us
          </a>
        </div>
        <p>{service.intro}</p>
        <h3>Key Features of Our {service.title} Service:</h3>
        <ul>
          {service.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <p>{service.closing}</p>
      </div>

      <section className="related-services">
        <div className="container">
          <h5>Related services</h5>
          <div className="services-grid">
            {related.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
      <ContactForm />
    </>
  );
}
