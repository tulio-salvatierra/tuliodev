import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navbar, NavbarBrand } from "reactstrap";

import Logo2 from "../../assets/images/_logo.svg";

function Header() {
  return (
    <header className="header">
      <Navbar light expand="lg" style={{ backgroundColor: "#f5f4f7" }}>
        <NavbarBrand href="/" style={{ fontSize: "2rem", color: "#6f6f6f" }}>
          <img src={Logo2} alt="headerLogo" height={22}></img>
        </NavbarBrand>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="list">
            <li className="listItem">
              <a href="#projects">Projects</a>
            </li>
            <li className="listItem">
              <a href="#projects">Experience</a>
            </li>
            <li>
              <a href="#tech">Technologies</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tulio-salvatierra/">
            <LinkedInIcon sx={{ fontSize: 40, color: "#6f6f6f" }} />
          </a>

          <a href="https://www.github.com/T00lio">
            <GitHubIcon sx={{ fontSize: 40, color: "#6f6f6f" }} />
          </a>
          <a href="https://wa.me/17863146121">
            <WhatsAppIcon sx={{ fontSize: 40, color: "#6f6f6f" }} />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </Navbar>
    </header>
  );
}

export default Header;
