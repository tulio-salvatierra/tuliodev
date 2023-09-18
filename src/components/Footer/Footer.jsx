import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="link-container">
        <a
          href="https://www.linkedin.com/in/tulio-salvatierra/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white ml-1"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/T00lio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white ml-1"
        >
          Github
        </a>
        <h4 className="footer-text">Coded by Tulio Salvatierra 💻</h4>
      </div>
    </div>
  );
}

export default Footer;
