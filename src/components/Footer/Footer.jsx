import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer-container">
      <div className="link-container">
        <IconButton
          href="https://www.linkedin.com/in/tulio-salvatierra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/T00lio"
          target="_blank"
          rel="noopener noreferrer"
          size="large"
        >
          <GitHubIcon />
        </IconButton>

        <Typography variant="h6" className="footer-text">
          {" "}
          Coded by Tulio Salvatierra 💻
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
