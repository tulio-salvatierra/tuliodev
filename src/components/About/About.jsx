import React from "react";
import skillsObject from "../../assets/about-list.js";
import "./About.css";
import RESUME from "../../assets/resume.pdf";
import Button from "@mui/material/Button";
import pic from "../../assets/images/profile.jpeg";
import Skills from "../Skills/Skills";

function About() {
  return (
    <>
      <h1 className="about-text-image-mask">About</h1>
      <img
        src={pic}
        alt="landingPic"
        className="image"
        style={{ height: "400px", width: "auto" }}
      ></img>
      <p className="about-text">
        <strong>
          I'm Tulio, a Jr Full Stack Developer based in Chicago, IL.
        </strong>
        <br />I have experience working with a wide range of technologies and I
        am always looking to learn new technologies and improve my skills to
        help businesses <strong>thrive!</strong>
      </p>
      <div className="about-list">
        <h3>Techologies:</h3>
        {skillsObject.map((skill, index) => (
          <ul key={index}>
            <li>
              <strong>{skill.title}</strong>
              <br />
              {skill.content.map((content, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ margin: "5px" }}
                >
                  {content}
                </button>
              ))}
            </li>
          </ul>
        ))}
      </div>
      <Skills />
      <Button
        className="button"
        href={RESUME}
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
        Resume
      </Button>
    </>
  );
}

export default About;
