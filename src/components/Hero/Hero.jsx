import React from "react";
import "./Hero.css";
import portrait from "../../assets/images/portrait.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RESUME from "../../assets/resume.pdf";

function Hero() {
  return (
    <>
      <div className="hero-content">
        <div className="padleft d-sm-none d-md-block"></div>
        <div className="padright d-sm-none d-md-block"></div>
        <div className="right">
          <button className="btn btn-outline-secondary rounded-pill">
            Full Stack Developer
          </button>
          <h1 className="hero-text-image-mask">I'm Tulio</h1>

          <h3 className="hero-text">Welcome to my portfolio </h3>
          <div className="socialhero-icons">
            <a href="https://www.linkedin.com/in/tulio-salvatierra/">
              <LinkedInIcon sx={{ fontSize: 30, color: "#fff" }} />
            </a>

            <a href="https://www.github.com/T00lio">
              <GitHubIcon sx={{ fontSize: 30, color: "#fff" }} />
            </a>
            <a href="https://wa.me/17863146121">
              <WhatsAppIcon sx={{ fontSize: 30, color: "#fff" }} />
            </a>
          </div>
          <div className="buttons">
            <a
              type="button"
              className="btn btn-dark me-1"
              href={RESUME}
              download
            >
              download resume
            </a>
            <a className="btn btn-dark me-1" href="#contact">
              contact me
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src={portrait} alt="portrait" className="portrait"></img>
        </div>

        <div className="6"></div>
      </div>
    </>
  );
}

export default Hero;
