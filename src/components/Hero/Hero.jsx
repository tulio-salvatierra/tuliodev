import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import hero from "../../assets/images/Untitled design (7).png";
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    gsap.set(heroRef.current, {
      yPercent: -100,
      opacity: 0,
    });
    gsap.to(heroRef.current, {
      duration: 2,
      delay: 1,
      yPercent: 0,
      opacity: 1,
      ease: "ease-in",
    });

    console.log(heroRef);
  }, []);
  return (
    <div className="hero-container">
      <div ref={heroRef} className="imageContainer">
        <img
          src={hero}
          alt="hero"
          width={"284px"}
          height={"284px"}
          className="image"
        />
      </div>
      <div className="heroText">
        <h1 className="heroTitle">Front end Software Developer</h1>
        <p className="heroP">
          Hey, I’m Tulio. Aspiring software developer with a diverse background
          and experience. Here you'll see what projects I've been working on.
        </p>
      </div>
    </div>
  );
}

export default Hero;
