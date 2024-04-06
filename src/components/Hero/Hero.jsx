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
          <button className="btn btn-outline-light disabled rounded-pill">
            Full Stack Developer
          </button>
          <h1 className="hero-text-image-mask">I'm Tulio</h1>

          <h3 className="hero-text">Welcome to my web development portfolio</h3>
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
        </div>
        <div className="image-container">
          <img src={portrait} alt="portrait" className="portrait"></img>
        </div>

        <div className="lowerL">
          <button type="button" className="link" href={RESUME} download>
            download resume
          </button>
        </div>
        <div className="lowerR">
          <button type="button" className="link" href="#contact">
            contact me
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
