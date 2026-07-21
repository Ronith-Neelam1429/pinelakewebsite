import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
  { to: "/contact-us", label: "Contact Us" },
  {
    to: siteConfig.rxLocalUrl,
    label: "Request Refill",
    external: true,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="address-bar">
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.address}
        </a>
      </div>
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="logo">
            <div className="logo__icon">
              <img src="/logo.png" alt={`${siteConfig.name} logo`} />
            </div>
            <div className="logo__text">
              <span className="logo__script">{siteConfig.shortName}</span>
              <span className="logo__pharmacy">PHARMACY</span>
            </div>
          </Link>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="nav__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `nav__link${isActive ? " active" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
