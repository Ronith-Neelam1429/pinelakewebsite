import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link to="/merchant-policies">Merchant Policies</Link>
        <Link to="/legal-notice">Legal Notice</Link>
      </div>
      <p className="footer__powered">Pinelake Pharmacy</p>
    </footer>
  );
}
