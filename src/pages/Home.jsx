import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import GetInTouch from "../components/GetInTouch";
import Availability from "../components/Availability";
import { siteConfig } from "../data/siteConfig";
import { aboutArticles } from "../data/aboutArticles";
import { services } from "../data/services";
import { images } from "../data/images";

const aboutImages = images.about;

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container">
        <div className="vaccine-banner">
          <h3>{siteConfig.vaccineBanner}</h3>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section__title">About Us</h2>
          <div className="about-grid">
            {aboutArticles.map((article, i) => (
              <div key={article.slug} className="about-card">
                <div
                  className="about-card__image"
                  style={{ backgroundImage: `url(${aboutImages[i]})` }}
                />
                <div className="about-card__body">
                  <h2 className="about-card__title">{article.title}</h2>
                  <p className="about-card__excerpt">{article.excerpt}</p>
                  <Link
                    to={`/about-us/${article.slug}`}
                    className="about-card__link"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Availability />

      <section className="section why-section">
        <div className="container">
          <p className="section__eyebrow">Why choose Pine Lake Pharmacy?</p>
          <h2 className="section__title">Local Care. Trusted Service.</h2>
          <p className="section__subtitle why-section__intro">
            {siteConfig.intro}
          </p>
          <div className="why-grid">
            <div className="why-cards">
              {siteConfig.whyChooseUs.map((item, index) => (
                <article key={item.title} className="why-card">
                  <span className="why-card__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="why-card__title">{item.title}</h3>
                    <p className="why-card__text">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="features-panel">
              <h3 className="features-panel__title">Our services</h3>
              <ul className="features-list">
                {siteConfig.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="features-panel__motto">{siteConfig.motto}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section more-section">
        <div className="container">
          <p className="section__eyebrow">More than a pharmacy</p>
          <h2 className="section__title">Everything you need, all in one place</h2>
          <div className="more-grid">
            {siteConfig.moreThanPharmacy.map((item) => (
              <div key={item} className="more-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />

      <section className="section section--gray">
        <div className="container">
          <h2 className="section__title">Services</h2>
          <p className="section__subtitle">
            Our Pharmacy Solutions ({services.length})
          </p>
          <div className="services-grid">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link to="/services" className="btn btn--primary">
              More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
