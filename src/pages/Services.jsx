import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import ReviewsCarousel from "../components/ReviewsCarousel";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <div className="page-header">
        <h2>Services</h2>
      </div>

      <section className="section">
        <div className="container">
          <p className="section__subtitle">
            Our Pharmacy Solutions ({services.length})
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />
      <ContactForm />
    </>
  );
}
