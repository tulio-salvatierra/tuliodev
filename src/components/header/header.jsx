import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../assets/images/Untitled design (7).png";

function Header() {
  return (
    <header className="header-grid" style={{ margin: "2rem 0", width: "100%" }}>
      <Navbar light expand="lg">
        <NavbarBrand href="/" style={{ fontSize: "2rem", color: "#6f6f6f" }}>
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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <nav className="collapse navbar-collapse" id="#navbarSupportedContent">
          <ul className="list" style={{ marginTop: ".5rem" }}>
            <a
              href="#projects"
              style={{
                textDecoration: "none",
                color: "#6f6f6f",
                fontSize: "1.75rem",
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
                fontSize: "1.75rem",
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
                fontSize: "1.75rem",
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
