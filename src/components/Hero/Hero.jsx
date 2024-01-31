import Button from "@mui/material/Button";
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h1 className="hero-text-image-mask">
            Hey, I'm Tulio, welcome to my portfolio!
          </h1>
          <h3 className="hero-text">
            I’m Tulio, here you'll see some of my projects and skills.
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
          Feel free to contact me, let me know how can I help you or your
          business!
        </Button>
        <div className="hero-background"></div>
      </section>
    </>
  );
}

export default Hero;
