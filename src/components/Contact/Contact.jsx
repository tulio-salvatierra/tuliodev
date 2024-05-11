import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import photo from "../../assets/images/portrait.jpg";

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
    <div className="contact-parent">
      <h1 className="section-title">Contact me</h1>
      <div className="padder1"></div>
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
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              name="last-name"
              autoComplete="true"
              placeholder="Last Name"
            />
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
          </div>

          <button className="contact-btn" type="submit">
            Send message
          </button>
        </form>
      </div>
      <div className="photo">
        <img src={photo} className="contact-photo" alt="portrait" />
        <h5 className="contact-text">
          I'll be happy to help you with your project or answer any questions,
          reach out, be a friend!
        </h5>
      </div>

      <div className="padder5"></div>
      <div className="padder6"></div>
    </div>
  );
}
