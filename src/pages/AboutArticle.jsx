import { useParams, Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import { aboutArticles } from "../data/aboutArticles";

export default function AboutArticle() {
  const { slug } = useParams();
  const article = aboutArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="not-found">
        <h2>Article not found</h2>
        <Link to="/about-us" className="btn btn--primary">
          Back to About Us
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="page-header">
        <h1>{article.title}</h1>
      </div>

      <div className="detail-content">
        {article.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <GetInTouch />
    </>
  );
}
