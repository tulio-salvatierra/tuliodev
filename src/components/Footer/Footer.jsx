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
import profilePic from "../../assets/images/hero/profile.jpeg";

function Footer() {
  return (
    <section id="footer" className="footer-div">
      <div className="container p-0 flex">
        <div className="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M229.18 173a6 6 0 0 1-2.16 8.2l-96 56a6 6 0 0 1-6 0l-96-56a6 6 0 0 1 6-10.36l93 54.23l93-54.23a6 6 0 0 1 8.16 2.16M221 122.82l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31Z"
            />
          </svg>
          <img src={profilePic} alt="profile-pic" className="profile-footer" />
          <p className="footer-profile-text">
            I am a full-stack web developer with a passion for building
            beautiful and functional websites. I have a solid foundation in
            HTML, CSS, and JavaScript.
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
        <p className="text-center">LOCATION: CHICAGO, IL</p>
      </div>
    </section>
  );
}

export default Footer;
