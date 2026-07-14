import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";
import { resources } from "../data/resources";

export default function Resources() {
  return (
    <>
      <div className="page-header">
        <h2>Resources</h2>
      </div>

      <section className="section">
        <div className="container">
          <h3
            className="section__subtitle"
            style={{ fontFamily: "var(--font-serif)", fontSize: "20px" }}
          >
            Pharmacy Resources
          </h3>
          <div className="resources-list">
            {resources.map((resource) => (
              <div key={resource.title} className="resource-item">
                <span className="resource-item__title">{resource.title}</span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-item__link"
                >
                  Click here to access
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <GetInTouch />
    </>
  );
}
