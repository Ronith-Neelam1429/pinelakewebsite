import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={siteConfig.heroImage}
        alt=""
        aria-hidden="true"
      />
      <div className="hero__content">
        <p className="hero__eyebrow">{siteConfig.tagline}</p>
        <h1 className="hero__title">{siteConfig.heroHeadline}</h1>
        <h2 className="hero__subtitle">{siteConfig.heroSubheadline}</h2>
        <p className="hero__intro">{siteConfig.intro}</p>
        <div className="hero__actions">
          <a href={siteConfig.phoneLink} className="hero__phone">
            {siteConfig.phone}
          </a>
          <Link to="/contact-us" className="btn btn--primary">
            Send Message
          </Link>
          <a href={siteConfig.phoneLink} className="btn btn--outline">
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
