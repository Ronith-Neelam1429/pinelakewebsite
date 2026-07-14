import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

export { default as TopBar } from "./TopBar";
export { default as Header } from "./Header";
export { default as Footer } from "./Footer";
export { default as CookieBanner } from "./CookieBanner";
