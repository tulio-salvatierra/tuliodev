import React from "react";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  TELEPHONE,
  MENU_ITEMS,
} from "../../Constants";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UpworkIcon from "../../assets/icons/upwork.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RESUME from "../../assets/resume.pdf";

function Footer() {
  return (
    <section className="container-xl" id="footer">
      <footer className="footer-div">
        <nav className="col">
          <h3>Menu:</h3>
          <ul className="navbar-nav">
            {MENU_ITEMS.map((item, index) => (
              <li className="listItem" key={`header-${index}`}>
                <a href={item.url} className="nav-link">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="footer-icon"
                    style={{
                      height: "1.2rem",
                      width: "1.2rem",
                      marginRight: 5,
                    }}
                  />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="separator"></div>
        <div className="col">
          <h3 className="left">Reach out:</h3>
          <a href={TELEPHONE}>
            {" "}
            <PhoneIcon />
          </a>

          <a href={`mailto:${EMAIL}`}>
            <EmailIcon />
          </a>

          <a href={RESUME} download style={{ color: "white" }}>
            <AssignmentIndIcon /> Get CV
          </a>
        </div>
        <div className="col">
          <h3>Socials:</h3>
          <div className="horizontal-icon">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="60px"
            >
              <LinkedInIcon />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="60px"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.upwork.com/freelancers/tulio"
              target="_blank"
              rel="noopener noreferrer"
              size="60px"
            >
              <img
                src={UpworkIcon}
                alt="upwork"
                className="upwork"
                style={{ height: 28 }}
              />
            </a>
          </div>
        </div>
        <div className="col">
          <h3>Location:</h3>
          <p>Chicago, IL</p>
        </div>
        <div className="separator"></div>
        <div className="row">
          <p style={{ color: "white" }}>Made by Tulio Salvatierra</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
