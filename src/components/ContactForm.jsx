import { useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { sendFormEmail } from "../utils/sendEmail";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.target;
    const data = new FormData(form);

    try {
      await sendFormEmail({
        subject: `Website contact — ${data.get("name")}`,
        fields: {
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || "Not provided",
          message: data.get("request"),
          _replyto: data.get("email"),
        },
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h4>How Can We Help You Today?</h4>
          <p className="contact-form__desc">
            Our experienced team is ready to understand your needs, provide all
            the information you need, and answer any question you might have.
            Please send us a message, and we will reply as soon as possible.
          </p>

          {status === "success" && (
            <p className="form-status form-status--success">
              Thank you for your message! We will reply as soon as possible.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-status--error">{error}</p>
          )}

          <div className="form-group">
            <label htmlFor="request">Tell us about your request</label>
            <textarea id="request" name="request" required disabled={status === "sending"} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" required disabled={status === "sending"} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" required disabled={status === "sending"} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number</label>
            <input type="tel" id="phone" name="phone" disabled={status === "sending"} />
          </div>

          <label className="form-checkbox">
            <input type="checkbox" defaultChecked required disabled={status === "sending"} />
            <span>
              I agree with the{" "}
              <a href="/merchant-policies">Terms &amp; Conditions</a> and the{" "}
              <a href="/merchant-policies">Privacy &amp; Cookies Policy</a> and
              any applicable Terms and Conditions of {siteConfig.name}. This site
              is protected by reCAPTCHA and the Google Privacy Policy and Terms
              of Service apply.
            </span>
          </label>

          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
