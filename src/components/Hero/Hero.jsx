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
        <div className="padleft"></div>
        <div className="padright"></div>
        <div className="right">
          <div className="right-div">
            <p className="hero-button" href="#about">
              Full Stack Developer
            </p>
            <h1 className="hero-title">Tulio Salvatierra</h1>

            <h2 className="hero-text">Web development portfolio</h2>

            <h4 className="hero-description">
              I'm a <strong className="strong">Full Stack Developer</strong>{" "}
              passionate for providing solutions with a strong base in HTML, CSS
              and Javascript
            </h4>
            <div className="socialhero-icons">
              <a href="https://www.linkedin.com/in/tulio-salvatierra/">
                <LinkedInIcon sx={{ fontSize: 30, color: "#fff" }} />
              </a>

              <a href="https://www.github.com/T00lio">
                <GitHubIcon sx={{ fontSize: 30, color: "#fff" }} />
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
