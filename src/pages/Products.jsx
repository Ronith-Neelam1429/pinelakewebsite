import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { productCategories } from "../data/products";

export default function Products() {
  return (
    <>
      <div className="page-header">
        <h2>Store</h2>
      </div>

      <section className="section">
        <div className="container">
          {productCategories.map((category) => (
            <div key={category.slug} className="category-section">
              <div className="category-section__header">
                <h3 className="category-section__title">{category.name}</h3>
                <span className="category-section__count">
                  ({category.products.length})
                </span>
              </div>
              <div className="services-grid">
                {category.products.map((product) => (
                  <div key={product.slug} className="service-card">
                    <div
                      className="service-card__image"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="service-card__body">
                      <h5 className="service-card__title">{product.title}</h5>
                      <Link
                        to={`/products/${category.slug}/${product.slug}`}
                        className="btn btn--outline"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </>
  );
}
