import React from "react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TELEPHONE } from "../../Constants";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RESUME from "../../assets/resume.pdf";

function Footer() {
  return (
    <footer className="footer-div">
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
        </div>
      </div>
      <div className="col">
        <h3>Location:</h3>
        <p>Chicago, IL</p>
        <p>
          Born in
          <span role="img" aria-label="venezuela">
            {" "}
            🇻🇪
          </span>
        </p>
      </div>
      <div className="separator"></div>
      <div className="row">
        <p style={{ color: "white" }}>Made by Tulio Salvatierra</p>
      </div>
    </footer>
  );
}

export default Footer;
