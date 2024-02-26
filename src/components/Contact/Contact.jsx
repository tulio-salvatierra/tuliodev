import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_isyf2b9",
        "template_84llydk",
        formRef.current,
        "lRQEHERgGdBoUqxEY"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    alert("Message sent!");
    formRef.current.reset();
  };

  return (
    <>
      <div className="freelancing pricing" id="#contact"></div>
      <h1 className="contact-text-image-mask">Contact me</h1>
      <div className="flex" style={{ padding: "1rem" }}>
        <div className="col-md-6 col-sm-12">
          <h2 className="text-white">Need pricing on your project?</h2>
          <p className="text-white">let discuss how can I help you!</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label text-white">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                name="first-name"
                autoComplete="true"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="last-name" className="form-label text-white">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                name="last-name"
                autoComplete="true"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="true"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label text-white">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                autoComplete="false"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark">
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
