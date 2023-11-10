import React from "react";
import "./Footer.css";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RESUME from "../../assets/images/resume.pdf";

function Footer() {
  return (
    <section className="footer-container row">
      <div className="col">
        <h4>Connect with me!</h4>
        <h5>Email: salvacorp@gmail.com</h5>
        <a href={RESUME} download>
          Download My Resume
        </a>
      </div>
      <div className="col">
        <IconButton
          href="https://www.linkedin.com/in/tulio-salvatierra/"
          target="_blank"
          rel="noopener noreferrer"
          size="50px"
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/T00lio"
          target="_blank"
          rel="noopener noreferrer"
          size="50px"
          color="primary"
        >
          <GitHubIcon />
        </IconButton>
      </div>
    </section>
  );
}

export default Footer;
