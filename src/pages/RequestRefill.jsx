import { useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

/** Redirects to RxLocal patient portal (same as easternspharmacy.com). */
export default function RequestRefill() {
  useEffect(() => {
    window.location.replace(siteConfig.rxLocalUrl);
  }, []);

  return (
    <div className="page-header">
      <h2>Request Refill</h2>
      <p style={{ marginTop: "12px", color: "var(--text-muted)" }}>
        Redirecting you to RxLocal to request your refill…{" "}
        <a href={siteConfig.rxLocalUrl}>Continue to RxLocal</a>
      </p>
    </div>
  );
}
