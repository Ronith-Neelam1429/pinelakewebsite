import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

export default function CookieBanner() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("cookiesAccepted")
  );

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  return (
    <div className="cookie-banner">
      <button
        className="cookie-banner__close"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        ×
      </button>
      <p className="cookie-banner__title">We respect your privacy</p>
      <p className="cookie-banner__text">
        By continuing to use our website, you agree to our cookies policy.
      </p>
      <div className="cookie-banner__actions">
        <button className="btn btn--primary" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
