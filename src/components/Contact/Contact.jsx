import React, { useRef } from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

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
    width: "50%",
    marginBottom: 5,
    display: "flex",
  },

  buttonStyle: {
    color: "white",
    borderRadius: "50px",
    fontFamily: "Geist",
    padding: ".75rem",
    fontSize: "1.25rem",
    fontWeight: "400",
    width: "25rem",
    textTransform: "none",
    backgroundColor: "#000", // Adjust button background color as needed
    "&:hover": {
      backgroundColor: "#333", // Darker on hover
    },
  },
};

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
      <h1 className="contact-text-image-mask">Contact me</h1>
      <div
        style={{ padding: "2rem", display: "flex", flexDirection: "column" }}
      >
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

          <TextField
            type="text"
            id="last-name"
            label="Last Name"
            variant="outlined"
            name="last-name"
            autoComplete="true"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={styles.textField}
          />

          <TextField
            id="email"
            label="Email"
            name="email"
            variant="outlined"
            autoComplete="true"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={styles.textField}
            type="email"
          />

          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            autoComplete="false"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white", borderColor: "white" },
            }}
            sx={styles.textField}
          />

          <button
            className="btn btn-dark"
            type="submit"
            sx={styles.buttonStyle}
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
