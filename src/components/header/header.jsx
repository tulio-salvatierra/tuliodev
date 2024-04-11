import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navbar, NavbarBrand } from "reactstrap";

import Logo2 from "../../assets/images/_logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container">
        <Navbar light expand="lg" style={{ maxWidth: "1200px" }}>
          <NavbarBrand href="/">
            <img src={Logo2} alt="headerLogo" height={20}></img>
          </NavbarBrand>

          <nav className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="list">
              <li className="listItem">
                <a href="#projects">Projects</a>
              </li>
              <li className="listItem">
                <a href="#experience">Experience</a>
              </li>
              <li className="listItem">
                <a href="#tech">Technologies</a>
              </li>
              <li className="listItem">
                <a href="#about">About</a>
              </li>
            </ul>

            <div className="dropdown-footer">
              <footer className="footer">
                <a
                  href="https://tuliosalvatierra.com"
                  style={{ color: "#6f6f6f" }}
                >
                  {" "}
                  2024 Tulio Salvatierra
                </a>
              </footer>
            </div>
          </nav>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/tulio-salvatierra/">
              <LinkedInIcon sx={{ fontSize: 30, color: "#6f6f6f" }} />
            </a>

            <a href="https://www.github.com/T00lio">
              <GitHubIcon sx={{ fontSize: 30, color: "#6f6f6f" }} />
            </a>
            <a href="https://wa.me/17863146121">
              <WhatsAppIcon sx={{ fontSize: 30, color: "#6f6f6f" }} />
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
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
