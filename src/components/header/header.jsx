import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo2 from "../../assets/images/_logo.svg";
import { GITHUB_URL, LINKEDIN_URL, MENU_ITEMS } from "../../Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header-container">
      <Navbar expand="lg">
        <NavbarBrand href="/">
          <img src={Logo2} alt="headerLogo" height={20}></img>
        </NavbarBrand>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="list">
            {MENU_ITEMS.map((item, index) => (
              <li className="listItem" key={`header-${index}`}>
                <a href={item.url} onClick={toggleMenu} className="nav-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="dropdown-footer">
            <footer className="footer">
              <a
                href="https://tuliosalvatierra.com"
                style={{
                  color: "grey",
                  fontSize: "10px",
                  fontWeight: "thin",
                }}
              >
                {" "}
                2024 Tulio Salvatierra
              </a>
            </footer>
          </div>
        </nav>

        <div className="social-icons">
          <a href={LINKEDIN_URL}>
            <LinkedInIcon sx={{ fontSize: 30, color: "#fff" }} />
          </a>

          <a href={GITHUB_URL}>
            <GitHubIcon sx={{ fontSize: 30, color: "#fff" }} />
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
  );
}

export default Header;
