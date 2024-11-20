import { useRef, useState } from "react";
import { EMAIL, TELEPHONE } from "../../Constants";
import PhoneIcon from "./../../assets/icons/contact/phone.svg";
import EmailIcon from "./../../assets/icons/contact/mail.svg";

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
    <section className="contact-section h-100" id="contact">
      <h1 className="contact-title">Contact</h1>
      <h4 className="contact-text">
        You can get in touch with me through the form below. I'll be happy to
        discuss your project or answer any questions about freelancing services,
        don't hesitate to reach out!
      </h4>
      <div className="contact-parent h-50 m-3 m-sm-0">
        <div className="contact-info">
          <div className="contact-item">
            <img
              src={EmailIcon}
              alt="email icon for web develoment services in chicago"
            ></img>
            <a href={`mailto:${EMAIL}`} className="contact-text">
              <h4>{EMAIL}</h4>
            </a>
          </div>
          <div className="contact-item ju">
            <img
              src={PhoneIcon}
              alt="phone icon for web develoment services in chicago"
            ></img>
            <a href={`tel:${TELEPHONE}`} className="contact-text">
              <h4>{TELEPHONE}</h4>
            </a>
          </div>
        </div>

        <div className="">
          <div className="form">
            <form ref={formRef} onSubmit={sendEmail} id="form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control p-4"
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
                  className="form-control p-4"
                  id="email"
                  name="email"
                  autoComplete="true"
                  placeholder="example@mail.com"
                />
                {error && <div className="error">{error}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control p-4"
                  id="message"
                  name="message"
                  rows="4"
                  autoComplete="false"
                  placeholder="I need a website..."
                ></textarea>
                {error && <div className="error">{error}</div>}
              </div>

              <button className="custom-btn" type="submit">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
