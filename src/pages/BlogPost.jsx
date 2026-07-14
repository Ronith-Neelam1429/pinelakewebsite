import { useParams, Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug);

  if (!post) {
    return (
      <div className="not-found">
        <h2>Post not found</h2>
        <Link to="/blog" className="btn btn--primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="page-header">
        <h1>{post.title}</h1>
        <p className="blog-post-meta">Posted on {post.date}</p>
      </div>

      <div className="detail-content blog-post-content">
        {post.image && (
          <img src={post.image} alt={post.title} className="detail-image" />
        )}
        {post.content.trim().split("\n\n").map((block, i) => {
          if (block.startsWith("### ")) {
            return <h3 key={i}>{block.replace("### ", "")}</h3>;
          }
          if (block.startsWith("#### ")) {
            return <h3 key={i}>{block.replace("#### ", "")}</h3>;
          }
          if (block.startsWith("- ")) {
            const items = block.split("\n").filter((l) => l.startsWith("- "));
            return (
              <ul key={i}>
                {items.map((item, j) => (
                  <li key={j}>{item.replace("- ", "")}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{block}</p>;
        })}
      </div>

      {related.length > 0 && (
        <section className="related-services">
          <div className="container">
            <h5>Related</h5>
            <div className="blog-grid">
              {related.map((r) => (
                <article key={r.slug} className="blog-card">
                  <div className="blog-card__body">
                    <h3 className="blog-card__title">{r.title}</h3>
                    <p className="blog-card__date">Posted on {r.date}</p>
                    <p className="blog-card__excerpt">{r.excerpt}</p>
                    <Link
                      to={`/blog/${r.slug}`}
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
      )}

      <ContactForm />
      <GetInTouch />
    </>
  );
}
