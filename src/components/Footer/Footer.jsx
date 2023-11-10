import React from "react";
import "./Footer.css";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const handleClick = () => {
    window.open("../../public/TulioSalvatierra_CV.pdf");
  };
  return (
    <footer className="footer-container">
      <h4>Connect with me!</h4>
      <h5>Email: salvacorp@gmail.com</h5>
      <Button onClick={handleClick}>Download My Resume</Button>

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
    </footer>
  );
}

export default Footer;
