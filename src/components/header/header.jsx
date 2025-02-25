import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "../../assets/icons/menu.png";
import { HOME_URL, MENU_ITEMS } from "../../Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar expand="lg" className="logo">
        <NavbarBrand href={HOME_URL} className="d-flex">
          <h1 className="navbar-title">tuliosalvatierra.com</h1>
        </NavbarBrand>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav h-50">
            {MENU_ITEMS.map((item, index) => (
              <div className={item.className} key={`${item}+${index}`}>
                <MenuItem name={item.title} url={item.url} />
              </div>
            ))}
          </ul>
        </nav>

        <button
          className="navbar-toggler flex"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon">
            <image src={Menu} alt="menu toggle"></image>
          </span>
        </button>
      </Navbar>
    </div>
  );
}
