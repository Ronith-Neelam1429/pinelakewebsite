import { siteConfig } from "../data/siteConfig";

export default function LegalNotice() {
  return (
    <>
      <div className="page-header">
        <h2>Legal Notice</h2>
      </div>

      <div className="legal-content">
        <dl>
          <dt>Business Name</dt>
          <dd>{siteConfig.name}</dd>

          <dt>Address</dt>
          <dd>{siteConfig.address}, United States</dd>

          <dt>Registered Company Name</dt>
          <dd>{siteConfig.name}</dd>

          <dt>Phone Number</dt>
          <dd>{siteConfig.phone}</dd>

          <dt>Email</dt>
          <dd>
            <a href={siteConfig.emailLink}>{siteConfig.email}</a>
          </dd>

          <dt>Registered Office Address</dt>
          <dd>
            {siteConfig.address.split(",")[0]} {siteConfig.zip}
          </dd>
        </dl>
      </div>
    </>
  );
}
