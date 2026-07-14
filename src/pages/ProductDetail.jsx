import { useParams, Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";
import { getProduct, productCategories } from "../data/products";

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const product = getProduct(categorySlug, productSlug);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn--primary">
          Back to Products
        </Link>
      </div>
    );
  }

  const category = productCategories.find((c) => c.slug === categorySlug);

  return (
    <>
      <div className="page-header">
        <h1>{product.title}</h1>
      </div>

      <div className="detail-content">
        <img src={product.image} alt={product.title} className="detail-image" />
        {product.description.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {category && (
        <section className="related-services">
          <div className="container">
            <h5>Related products</h5>
            <div className="services-grid">
              {category.products
                .filter((p) => p.slug !== productSlug)
                .map((p) => (
                  <div key={p.slug} className="service-card">
                    <div
                      className="service-card__image"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="service-card__body">
                      <h5 className="service-card__title">{p.title}</h5>
                      <Link
                        to={`/products/${categorySlug}/${p.slug}`}
                        className="btn btn--outline"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      <GetInTouch />
      <ContactForm />
    </>
  );
}
