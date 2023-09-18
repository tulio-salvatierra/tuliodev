import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import resume from "../../assets/TulioSalvatierra_CV.pdf";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Logo from "../../assets/images/Untitled design (7).png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Navbar className="navbar" expand="md" color="black">
        <NavbarBrand href="/" className="logo">
          <div className="logo">
            <img
              alt="logo"
              src={Logo}
              style={{
                height: 40,
                width: 40,
                border: ".25rem solid #fff",
                borderRadius: 50,
                marginRight: 20,
                marginLeft: 20,
              }}
            />
            <h4 className="navbarTitle">Tulio' Portfolio</h4>
          </div>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          style={{ backgroundColor: "#fff" }}
          className="navbar-toggler-white"
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navLinkList">
            <NavItem>
              <NavLink href="/about" className="NavbarLink">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects" className="NavbarLink">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={resume} target="_blank" className="NavbarLink">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="NavbarLink">Contact me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
