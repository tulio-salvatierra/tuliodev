import React from "react";
import "./About.css";
import RESUME from "../../assets/resume.pdf";
import Button from "@mui/material/Button";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="sep"></div>
        <br />
        <h1 className="about-text-image-mask">About</h1>

        <h3 className="about-text">
          Frontend Developer with a background in Finance roles and freight
          management with a passion for solving problems and creating solutions.
          I have a strong interest in the latest technologies and frameworks and
          I am always looking to learn new skills and improve my knowledge.
          Currently learning backend and databases to become a full stack
          developer.
        </h3>

        <Button
          className="button"
          href={RESUME}
          sx={{
            color: "white",
            borderRadius: "50px",
            fontFamily: "Geist",
            padding: "1rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            width: "50%",
            textTransform: "none",
          }}
        >
          Resume
        </Button>
      </section>
    </>
  );
}

export default About;
