import { Link } from "react-router-dom";
import ReviewsCarousel from "../components/ReviewsCarousel";
import { aboutArticles } from "../data/aboutArticles";
import { images } from "../data/images";

const aboutImages = images.about;

export default function AboutUs() {
  return (
    <>
      <div className="page-header">
        <h2>About Us</h2>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            {aboutArticles.map((article, i) => (
              <div key={article.slug} className="about-card">
                <div
                  className="about-card__image"
                  style={{ backgroundImage: `url(${aboutImages[i]})` }}
                />
                <div className="about-card__body">
                  <h2 className="about-card__title">{article.title}</h2>
                  <p className="about-card__excerpt">{article.excerpt}</p>
                  <Link
                    to={`/about-us/${article.slug}`}
                    className="about-card__link"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />
    </>
  );
}
