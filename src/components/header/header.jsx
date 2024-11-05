import { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "../../assets/icons/menu.png";
import { MENU_ITEMS } from "../../Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar expand="lg" className="logo">
        <NavbarBrand href="/">
          <h1 className="navbar-title">tuliosalvatierra.com</h1>
        </NavbarBrand>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav h-50">
            {MENU_ITEMS.map((item, index) => (
              <MenuItem
                name={item.title}
                url={item.url}
                key={`${item}+${index}`}
              />
            ))}
          </ul>
        </nav>

        <button
          className="navbar-toggler custom-toggler flex"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon">
            <image src={Menu}></image>
          </span>
        </button>
      </Navbar>
    </div>
  );
}
