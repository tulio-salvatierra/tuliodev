import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import photo from "../../assets/images/portrait.jpg";

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
    <div className="contact-parent">
      <h1 className="contact-text-image-mask">Contact me</h1>
      <div className="2"></div>
      <div className="form">
        <form ref={formRef} onSubmit={sendEmail} id="form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              autoComplete="true"
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
            ></textarea>
          </div>

          <button className="btn btn-secondary" type="submit">
            Send message
          </button>
        </form>
      </div>
      <div className="photo">
        <img
          src={photo}
          className="contact-photo"
          alt="portrait"
          style={{
            height: 300,
            width: 300,
            borderRadius: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <h3 className="contact-text">
          Get in touch with me, send a message and we can discuss how to make
          your business thrive!
        </h3>
      </div>

      <div className="padder5"></div>
      <div className="padder6"></div>
    </div>
  );
}
