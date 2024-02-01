import Button from "@mui/material/Button";
import Heropic from "../../assets/images/hero.PNG";
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-content">
        <h1 className="hero-text-image-mask">I'm Tulio</h1>
        <h2 className="hero-subtitle">Full Stack Developer Jr.</h2>

        <img src={Heropic} alt="landingPic" className="hero-image"></img>
        <h3 className="hero-text">
          Welcome to my portfolio! Here you'll see some of my projects and
          skills
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
