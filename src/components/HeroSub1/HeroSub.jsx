import { useEffect } from "react";
import "./heroSub.css";
import gsap from "gsap";

export default function HeroSub() {
  useEffect(() => {
    const section = document.querySelector("section");

    // Ensure the section exists before proceeding
    if (!section) return;

    let tagShow = gsap.to("span", {
      opacity: 1,
      stagger: 0.2,
      duration: 0.1,
      paused: false,
    });

    let tagReveal = gsap.to(".reveal", {
      scaleX: 1,
      stagger: 0.1,
      duration: 0.2,
      paused: true,
      transformOrigin: "left",
      onComplete: () => {
        gsap.to(".reveal", {
          scaleX: 0,
          stagger: 0.2,
          duration: 0.2,
          ease: "power4.out",
          transformOrigin: "right",
        });
      },
    });

    const handleMouseEnter = () => {
      tagShow.play(); // Start the tagShow animation
      tagReveal.play(); // Start the tagReveal animation
    };

    const handleMouseLeave = () => {
      tagShow.reverse(); // Reverse the tagShow animation
      tagReveal.reverse(); // Reverse the tagReveal animation
    };

    // Add event listeners
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <section className="title-sub">
      <ul>
        <li>
          <span>websites</span>
          <div className="reveal"></div>
        </li>
        <li>
          <span>ux/ui</span>
          <div className="reveal"></div>
        </li>
        <li>
          <span>IT</span>
          <div className="reveal"></div>
        </li>
      </ul>
    </section>
  );
}
