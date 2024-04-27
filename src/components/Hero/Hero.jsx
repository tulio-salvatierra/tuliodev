import React from "react";
import "./Hero.css";
import portrait from "../../assets/images/portrait.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RESUME from "../../assets/resume.pdf";
import "animate.css";

function Hero() {
  return (
    <>
      <div className="hero-content">
        <div className="padleft"></div>
        <div className="padright"></div>
        <div className="right">
          <div className="right-div">
            <p className="hero-button" href="#about">
              Full Stack Developer
            </p>
            <h1 className="hero-title">Tulio Salvatierra</h1>

            <h3 className="hero-text">
              Welcome to my web development portfolio.
            </h3>

            <h4 className="hero-description">
              I'm a <strong className="strong">Full Stack Developer</strong>{" "}
              with a passion for creating web applications that are both
              functional and visually appealing.
            </h4>
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
        </div>
        <div className="hero-image">
          <img src={portrait} alt="portrait" className="portrait"></img>
        </div>

        <div className="lowerL">
          <a type="button" className="link" href={RESUME} download>
            download resume
          </a>
        </div>
        <div className="lowerR">
          <a type="button" className="link" href="#contact">
            contact me
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
