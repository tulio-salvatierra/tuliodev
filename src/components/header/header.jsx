import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../assets/images/Untitled design (7).png";

import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header-grid" style={{ margin: "2rem 0", width: "100%" }}>
      <Navbar light expand="md">
        <NavbarBrand
          href="/"
          style={{ fontWeight: "bold", fontSize: "2rem", color: "#6f6f6f" }}
        >
          <img
            src={Logo}
            alt="logo"
            className="logo"
            width={"55px"}
            height={"auto"}
            style={{
              marginRight: "1rem",
              borderRadius: "50%",
              color: "#6f6f6f",
            }}
          />
          Portfolio
        </NavbarBrand>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav
          className={`navigation ${showNav ? "show" : ""}`}
          navbar
          style={{ display: showNav ? "block" : "none" }}
        >
          <ul>
            <a
              href="#projects"
              style={{
                textDecoration: "none",
                color: "#6f6f6f",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "0 1rem",
                justifyContent: "center",
              }}
            >
              Projects
            </a>
            <a
              href="#tech"
              style={{
                textDecoration: "none",
                color: "#6f6f6f",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "0 1rem",
              }}
            >
              Technologies
            </a>
            <a
              href="#about"
              style={{
                textDecoration: "none",
                color: "#6f6f6f",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "0 1rem",
              }}
            >
              About
            </a>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tulio-salvatierra/">
            <LinkedInIcon sx={{ fontSize: 40, color: "black" }} />
          </a>

          <a href="https://www.github.com/T00lio">
            <GitHubIcon sx={{ fontSize: 40, color: "black" }} />
          </a>
          <a href="https://wa.me/17863146121">
            <WhatsAppIcon sx={{ fontSize: 40, color: "black" }} />
          </a>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
