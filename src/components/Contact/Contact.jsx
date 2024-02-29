import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import photo from "../../assets/images/portrait.jpg";

<<<<<<< HEAD
=======
const styles = {
  textField: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      color: "white", // Text color
    },
    "& .MuiInputLabel-root": {
      // Label color
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white", // Input text color
    },
    width: "100%",
    marginBottom: 5,
    display: "flex",
  },
};

>>>>>>> origin/contact-refactor
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
<<<<<<< HEAD
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
=======
    <div className="contact-parent">
      <h1 className="contact-text-image-mask">Contact me</h1>
      <div className="2"></div>
      <div className="form">
        <form ref={formRef} onSubmit={sendEmail} id="form">
          <TextField
            type="text"
            id="first-name"
            label="First Name"
            variant="outlined"
            name="first-name"
            autoComplete="true"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={styles.textField}
          />
>>>>>>> origin/contact-refactor

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

<<<<<<< HEAD
            <button type="submit" className="btn btn-dark">
              Send message
            </button>
          </form>
        </div>
=======
          <button className="btn btn-dark" type="submit">
            Send message
          </button>
        </form>
>>>>>>> origin/contact-refactor
      </div>
      <div className="photo">
        <img
          src={photo}
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
      <div className="4"></div>
      <div className="5"></div>
      <div className="6"></div>
    </div>
  );
}
