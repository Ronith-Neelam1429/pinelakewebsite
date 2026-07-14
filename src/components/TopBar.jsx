import { siteConfig } from "../data/siteConfig";

export default function TopBar() {
  return (
    <div className="top-bar">
      <span className="top-bar__text">{siteConfig.topBarMessage}</span>
      <a href={siteConfig.phoneLink} className="top-bar__call">
        Call Us
      </a>
    </div>
  );
}
