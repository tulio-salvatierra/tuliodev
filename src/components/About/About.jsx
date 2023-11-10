import React from "react";
import { Button } from "@mui/material";
import "./About.css";

function About() {
  const handleClick = () => {
    window.open("../../public/TulioSalvatierra_CV.pdf");
  };
  return (
    <>
      <section className="about">
        <div className="sep"></div>
        <br />
        <h1 className="text-image-mask">About</h1>

        <h3>
          Frontend Developer with a background in Finance roles and freight
          management with a passion for solving problems and creating solutions.
          I have a strong interest in the latest technologies and frameworks and
          I am always looking to learn new skills and improve my knowledge. I am
          a team player and I am always looking to help others and share my
          knowledge. Currently looking for a role as a Frontend Developer &
          learn CRUD operations to become a Full Stack Developer. Also I play
          drums 🥁
        </h3>
        <Button onClick={handleClick}>Download My Resume</Button>
      </section>
    </>
  );
}

export default About;
