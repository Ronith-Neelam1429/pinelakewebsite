import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <>
      <div className="page-header">
        <h2>Blog</h2>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                {post.image && (
                  <div
                    className="service-card__image"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                )}
                <div className="blog-card__body">
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__date">Posted on {post.date}</p>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="about-card__link"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <GetInTouch />
    </>
  );
}
