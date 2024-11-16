import { useState, useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Menu from "../../assets/icons/menu.png";
import { MENU_ITEMS } from "../../Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import MenuItem from "../MenuItem/MenuItem";
import Owl from "./../../assets/tulio.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const showHeader = gsap
      .from(".top", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        self.direction === -1 ? showHeader.play() : showHeader.reverse();
      },
    });
  }, []);
  return (
    <div className="header">
      <Navbar expand="lg" className="logo">
        <NavbarBrand href="/" className="d-flex">
          <img
            src={Owl}
            className="logo-owl"
            alt="tuliosalvatierra.com logo - web developer for small business in chicago"
          />
          <h1 className="navbar-title">tuliosalvatierra.com</h1>
        </NavbarBrand>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav h-50">
            {MENU_ITEMS.map((item, index) => (
              <div className={item.className}>
                <MenuItem
                  name={item.title}
                  url={item.url}
                  key={`${item}+${index}`}
                />
              </div>
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
