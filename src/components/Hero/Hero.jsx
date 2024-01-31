import Button from "@mui/material/Button";
import Heropic from "../../assets/images/hero.PNG";
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-content">
        <img src={Heropic} alt="landingPic" className="hero-image"></img>
        <h1 className="hero-text-image-mask">
          I'm Tulio, welcome to my portfolio!
        </h1>

        <img src={Heropic} alt="landingPic" className="animation"></img>
        <h3 className="hero-text">
          Here you'll see some of my projects and skills. Let's talk!
        </h3>
      </div>
      <Button
        className="button"
        href="#contact"
        sx={{
          color: "white",
          borderRadius: "50px",
          fontFamily: "Geist",
          padding: "1rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          width: "auto",
          textTransform: "none",
        }}
      >
        Feel free to contact me!
      </Button>
      <div className="hero-background"></div>
    </>
  );
}

export default Hero;
