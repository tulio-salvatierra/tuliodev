import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import resume from "../../assets/TulioSalvatierra_CV.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../assets/images/Untitled design (7).png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-grid" style={{ margin: "2rem 0", width: "100%" }}>
      <Navbar color="" light expand="md" fluid>
        <NavbarBrand href="/" style={{ fontWeight: "bold", fontSize: "2rem" }}>
          <img
            src={Logo}
            alt="logo"
            className="logo"
            width={"55px"}
            height={"auto"}
            style={{ marginRight: "1rem", borderRadius: "50%" }}
          />
          Portfolio
        </NavbarBrand>

        <nav className="navigation" navbar>
          <ul>
            <li href="/about">Projects</li>
            <li href="/about">Technologies</li>
            <li href="/about">About</li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tulio-salvatierra/">
            <LinkedInIcon sx={{ fontSize: 30, color: "black" }} />
          </a>

          <a href="https://www.github.com/T00lio">
            <GitHubIcon sx={{ fontSize: 30, color: "black" }} />
          </a>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
