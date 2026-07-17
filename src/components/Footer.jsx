import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name">{siteConfig.name}</p>
          <p className="footer__motto">{siteConfig.motto}</p>
        </div>

        <div className="footer__block">
          <p className="footer__label">Visit</p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.address}
          </a>
          <a href={siteConfig.phoneLink}>{siteConfig.phone}</a>
          <a href={siteConfig.emailLink}>{siteConfig.email}</a>
          <a href={siteConfig.websiteUrl} target="_blank" rel="noopener noreferrer">
            {siteConfig.website}
          </a>
        </div>

        <div className="footer__block">
          <p className="footer__label">Hours</p>
          <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
          <p>Saturday: 10:00 AM – 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer__block">
          <p className="footer__label">Follow</p>
          <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer">
            Facebook {siteConfig.facebookHandle}
          </a>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
            Instagram {siteConfig.instagramHandle}
          </a>
          <div className="footer__links">
            <Link to="/merchant-policies">Merchant Policies</Link>
            <Link to="/legal-notice">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
