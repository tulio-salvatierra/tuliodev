import { useEffect, useRef } from "react";
import "./CustomButton.css";
import { gsap } from "gsap";

const DynamicArrow = ({ fillColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      fill={fillColor}
      d="M 6 3 L 6 5 L 17.59375 5 L 3.75 18.84375 L 5.15625 20.25 L 19 6.40625 L 19 18 L 21 18 L 21 3 Z"
    />
  </svg>
);

export default function CustomButton({ name, url }) {
  const navItemRef1 = useRef(null);
  const linkRef1 = useRef(null);

  useEffect(() => {
    const link = linkRef1.current;

    // GSAP animation: a simple fade in and bounce effect
    let linkTL = gsap.timeline({
      defaults: { ease: "circ.out", duration: 0.2 },
    });

    const headingStart1 = link.querySelector(".primary1");
    const headingEnd1 = link.querySelector(".secondary1");

    // Ensure elements are selected and animate properly
    linkTL
      .to(headingStart1, { yPercent: -160 })
      .to(headingEnd1, { yPercent: -100 }, "<");

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
    <li className="list-item1" ref={navItemRef1}>
      <a
        href={url}
        ref={linkRef1}
        className="link-container1 text-decoration-none"
      >
        <div className="menuItem-container1">
          <p className="primary1 d-flex align-items-center m-0 rounded-pill p-4">
            {name}
            <DynamicArrow fillColor="#c6d1ba" alt="arrow" />
          </p>
          <p className="secondary1 d-flex align-items-center m-0 rounded-pill p-4">
            {name}
            <DynamicArrow fillColor="#211c1c" alt="arrow" />
          </p>
        </div>
      </a>
    </li>
  );
}
