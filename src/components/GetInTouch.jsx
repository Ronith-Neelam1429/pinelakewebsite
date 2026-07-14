import { siteConfig } from "../data/siteConfig";

const items = [
  {
    key: "location",
    label: "Location",
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`,
    value: siteConfig.address,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    key: "phone",
    label: "Give us a call",
    href: siteConfig.phoneLink,
    value: siteConfig.phone,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path
          d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.7 2 2 0 0 1 6.5 4.5z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "email",
    label: "Send us an email",
    href: siteConfig.emailLink,
    value: siteConfig.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7.5 7.5 6 7.5-6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function GetInTouch() {
  return (
    <section className="section get-in-touch-section">
      <div className="container">
        <p className="section__eyebrow">Contact</p>
        <h2 className="section__title">Get in Touch</h2>
        <p className="section__subtitle get-in-touch-section__intro">
          Stop by the pharmacy, call us, or send a message — we&apos;re here to
          help with your medication plan and everyday health needs.
        </p>
        <div className="contact-info-grid">
          {items.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="contact-info-item"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="contact-info-item__icon" aria-hidden="true">
                {item.icon}
              </span>
              <p className="contact-info-item__label">{item.label}</p>
              <p className="contact-info-item__value">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
