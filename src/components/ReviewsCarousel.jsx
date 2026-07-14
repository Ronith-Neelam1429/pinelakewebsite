import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const reviews = siteConfig.reviews;

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section__title">Customer Reviews</h2>
        <div className="review-card">
          <p className="review-card__text">&ldquo;{reviews[current].text}&rdquo;</p>
          <p className="review-card__author">{reviews[current].author}</p>
          <p className="review-card__date">{reviews[current].date}</p>
        </div>
        <div className="reviews-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={i === current ? "active" : ""}
              onClick={() => setCurrent(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
