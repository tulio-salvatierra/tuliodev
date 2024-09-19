import React from "react";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  TELEPHONE,
  MENU_ITEMS,
} from "../../Constants";
import "./Footer.css";
import RESUME from "../../assets/resume.pdf";
import profilePic from "../../assets/tulio.svg";

function Footer() {
  return (
    <section id="footer" className="footer-div">
      <div className="container p-0 flex">
        <div className="left">
          <img src={profilePic} alt="profile-pic" className="stack" />
          <p className="footer-profile-text">
            I build websites and provide digital solutions to help businesses
            and professionals drive growth and enhance your online presence.
          </p>
        </div>

        <div className="right">
          <div className="footer-col">
            <h1 className="footer-nav">Contact</h1>
            <div className="separator"></div>
            <a href={TELEPHONE} className="footer-item">
              {" "}
              Call me
            </a>

            <a href={`mailto:${EMAIL}`} className="footer-item">
              Contact me
            </a>

            <a
              href={RESUME}
              download
              style={{ color: "white" }}
              className="footer-item"
            >
              Get CV
            </a>
          </div>
          <div className="footer-col">
            <h1 className="footer-nav">Socials</h1>
            <div className="separator"></div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="60px"
              className="footer-item"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="60px"
              className="footer-item"
            >
              GitHub
            </a>
            <a
              href="https://www.upwork.com/freelancers/tulio"
              target="_blank"
              rel="noopener noreferrer"
              size="60px"
              className="footer-item"
            >
              Upwork
            </a>
          </div>

          <div className="footer-col">
            <h1 className="footer-nav">NAVIGATION</h1>
            <div className="separator"></div>
            {MENU_ITEMS.map((item, index) => (
              <a href={item.url} className="footer-item" key={index}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-100 h-auto flex-wrap">
        <div className="separator2"></div>
        <h1 className="footer-title">TULIO SALVATIERRA</h1>
        <footer className="footer-location">LOCATION: CHICAGO, IL</footer>
      </div>
    </section>
  );
}

export default Footer;
