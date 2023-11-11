import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../assets/images/Untitled design (7).png";
import { Link } from "react-router-dom";

function Header() {
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

        <nav className="navigation" navbar>
          <ul>
            <Link
              to="/projects"
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
            </Link>
            <Link
              to="/tech"
              style={{
                textDecoration: "none",
                color: "#6f6f6f",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "0 1rem",
              }}
            >
              Technologies
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#6f6f6f",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "0 1rem",
              }}
            >
              About
            </Link>
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
