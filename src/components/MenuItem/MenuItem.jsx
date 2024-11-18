// MenuItem.js
import { useEffect, useRef } from "react";
import "./MenuItem.css";
import { gsap } from "gsap";

export default function MenuItem({ name, url }) {
  const navItemRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const link = linkRef.current;

    // GSAP animation: a simple fade in and bounce effect
    let linkTL = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.3 },
    });

    const headingStart = link.querySelector(".primary");
    const headingEnd = link.querySelector(".secondary");

    // Ensure elements are selected and animate properly
    linkTL
      .to(headingStart, { yPercent: -100 })
      .to(headingEnd, { yPercent: -160 }, "<");

    linkTL.pause();

    // Add event listeners for hover effect
    link.addEventListener("mouseenter", () => {
      linkTL.play();
    });
    link.addEventListener("mouseleave", () => {
      linkTL.reverse();
    });

    // Cleanup event listeners
    return () => {
      link.removeEventListener("mouseenter", () => linkTL.play());
      link.removeEventListener("mouseleave", () => linkTL.reverse());
    };
  }, []);

  return (
    <li className="list-item" ref={navItemRef}>
      <a href={url} ref={linkRef} className="link-container">
        <div className="menuItem-container">
          <p className="primary">{name}</p>
          <p className="secondary">{name}</p>
        </div>
      </a>
    </li>
  );
}
