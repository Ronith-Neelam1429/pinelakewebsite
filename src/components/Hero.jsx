import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
    >
      <div className="hero__content">
        <div className="hero__dots">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <h1 className="hero__title">{siteConfig.name}</h1>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <div className="hero__actions">
          <a href={siteConfig.phoneLink} className="hero__phone">
            {siteConfig.phone}
          </a>
          <Link to="/contact-us" className="btn btn--primary">
            ✉ Send Message
          </Link>
          <a href={siteConfig.phoneLink} className="btn btn--outline">
            📞 Call
          </a>
        </div>
      </div>
    </section>
  );
}
