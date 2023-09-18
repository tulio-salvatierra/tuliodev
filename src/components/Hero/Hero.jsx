import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import hero from "../../assets/images/Untitled design (7).png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="imageContainer">
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
