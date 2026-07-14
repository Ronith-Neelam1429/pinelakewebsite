import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import RequestRefill from "./pages/RequestRefill";
import AboutUs from "./pages/AboutUs";
import AboutArticle from "./pages/AboutArticle";
import MerchantPolicies from "./pages/MerchantPolicies";
import LegalNotice from "./pages/LegalNotice";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categorySlug/:productSlug" element={<ProductDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/request-refill" element={<RequestRefill />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/:slug" element={<AboutArticle />} />
          <Route path="/merchant-policies" element={<MerchantPolicies />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}
