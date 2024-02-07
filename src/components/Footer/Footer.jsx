import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import RESUME from "../../assets/resume.pdf";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="col">
        <h3 className="left">
          <strong>Need pricing on your project?</strong>
        </h3>
        <a href="tel:+17863146121">
          {" "}
          <PhoneIcon /> +1 (786) 314-6121
        </a>

        <a href="mailto:salvacorp@gmail.com">
          <EmailIcon /> salvacorp@gmail.com
        </a>

        <a href={RESUME} download style={{ color: "white" }}>
          <AssignmentIndIcon /> Resume
        </a>
      </div>
      <div className="col">
        <h3>
          <strong>Connect with me:</strong>
        </h3>
        <a
          href="https://www.linkedin.com/in/tulio-salvatierra/"
          target="_blank"
          rel="noopener noreferrer"
          size="60px"
        >
          <LinkedInIcon /> LinkedIn
        </a>
        <a
          href="https://www.github.com/T00lio"
          target="_blank"
          rel="noopener noreferrer"
          size="60px"
        >
          <GitHubIcon /> GitHub
        </a>
        <a
          href="https://wa.me/17863146121"
          target="_blank"
          rel="noopener noreferrer"
          size="60px"
        >
          <WhatsAppIcon /> Whatsapp
        </a>
      </div>
      <div className="col">
        <h3>
          <strong>Location:</strong>
        </h3>
        <p>Chicago, IL</p>
      </div>
      <div className="separator"></div>
      <div className="row">
        <p>© 2024 Tulio Salvatierra</p>
      </div>
    </footer>
  );
}

export default Footer;
