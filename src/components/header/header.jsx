import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "../../assets/icons/menu.png";
import { HOME_URL, MENU_ITEMS } from "../../Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import MenuItem from "../MenuItem/MenuItem";
import Owl from "./../../assets/tulio.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const header = useRef(null);

  useEffect(() => {
    const showAnim = gsap
      .from(header, {
        yPercent: -100,
        paused: false,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      markers: false,
      anticipatePin: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);

  return (
    <div className="header" ref={header}>
      <Navbar expand="lg" className="logo">
        <NavbarBrand href={HOME_URL} className="d-flex">
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
