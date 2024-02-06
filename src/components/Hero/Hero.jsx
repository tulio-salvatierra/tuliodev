import Heropic from "../../assets/images/hero.PNG";
import React from "react";
import "./Hero.css";
import { Button } from "@mui/material";

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
          padding: ".75rem",
          fontSize: "1.25rem",
          fontWeight: "400",
          width: "25rem",
          textTransform: "none",
        }}
      >
        Feel free to contact me!
      </Button>
    </>
  );
}

export default Hero;
