import React from "react";
import "./About.css";
import RESUME from "../../assets/resume.pdf";
import Button from "@mui/material/Button";

function About() {
  return (
    <>
      <br />
      <h1 className="about-text-image-mask">About</h1>

      <p className="about-text">
        Hey there! I'm Tulio, Full Stack Developer based in Chicago, IL. I have
        experience working with a wide range of technologies and languages. I am
        always looking to learn new technologies and improve my skills to help
        businesses thrive.
        <br />
        I am passionate about creating software that is user-friendly, scalable,
        and maintainable. I am a result oriented team player and I am always
        looking to collaborate with other developers to create amazing products.
        <br />
        Techologies:
        <br />
        FrontEnd: React, Redux, HTML, CSS, JavaScript
        <br />
        BackEnd: Node.js, Express, postgreSQL, RESTful API
        <br />
        Tools: GitHub, VS Code, Heroku, Netlify, Postman, Firebase/Firestore,
        Chrome DevTools, npm, Slack, Trello, Figma
      </p>

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
    </>
  );
}

export default About;
