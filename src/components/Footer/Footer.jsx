import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <section className="footer-container">
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

      <h4> Coded by Tulio Salvatierra 💻</h4>
    </section>
  );
}

export default Footer;
