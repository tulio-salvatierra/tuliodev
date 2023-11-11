import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RESUME from "../../assets/resume.pdf";

function Footer() {
  return (
    <section className="footer-container">
      <div className="col">
        <h3>Email:</h3>
        <h5 className="email">
          {" "}
          <a href="mailto:salvacorp@gmail.com">salvacorp@gmail.com</a>
        </h5>
      </div>
      <div className="col">
        <a href={RESUME} download style={{ color: "white" }}>
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/tulio-salvatierra/"
          target="_blank"
          rel="noopener noreferrer"
          size="50px"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.github.com/T00lio"
          target="_blank"
          rel="noopener noreferrer"
          size="50px"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://wa.me/17863146121"
          target="_blank"
          rel="noopener noreferrer"
          size="50px"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </section>
  );
}

export default Footer;
