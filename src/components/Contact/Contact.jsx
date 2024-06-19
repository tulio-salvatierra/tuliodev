import { useRef, useState } from "react";
import { EMAIL, TELEPHONE } from "../../Constants";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [error, setError] = useState(null);
  const formRef = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current.name.value) {
      setError("Name is required");
      return;
    }
    if (!formRef.current.email.value) {
      setError("Email is required");
      return;
    }
    if (!formRef.current.message.value) {
      setError("Message is required");
      return;
    }
    try {
      await emailjs
        .sendForm(
          "service_isyf2b9",
          "template_84llydk",
          formRef.current,
          "lRQEHERgGdBoUqxEY"
        )
        .then(() => {
          console.log("Message sent!");
          alert("Message sent!");
          setError(null);
          formRef.current.reset();
        });
    } catch (error) {
      console.log("Form submission error!");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container-xl">
        <h1 className="section-title">Contact me</h1>

        <div className="contact-parent">
          <div className="contact-info">
            <h5 className="contact-text">
              I'll be happy to help you with your project or answer any
              questions, reach out!
            </h5>
            <div className="contact-item">
              <h2>
                <EmailIcon sx={{ color: "white", height: "2rem" }} /> Email:
                <a href={`mailto:${EMAIL}`} className="contact-tem">
                  {EMAIL}
                </a>
              </h2>

              <h2>
                <PhoneIcon sx={{ color: "white" }} /> Phone:
                <a href={`tel:${TELEPHONE}`} className="contact-tem">
                  {TELEPHONE}
                </a>
              </h2>
            </div>
          </div>

          <div className="container">
            <div className="form">
              <form ref={formRef} onSubmit={sendEmail} id="form">
                <div className="mb-3">
                  {error && <div className="error">{error}</div>}
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    autoComplete="true"
                    placeholder="Name"
                  />
                  {error && <div className="error">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    autoComplete="true"
                    placeholder="example@email.com"
                  />
                  {error && <div className="error">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    autoComplete="false"
                    placeholder="Write your message here..."
                  ></textarea>
                  {error && <div className="error">{error}</div>}
                </div>

                <button className="btn btn-dark" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
