import React from "react";
import skillsObject from "../../assets/about-list.js";
import "./About.css";
import RESUME from "../../assets/resume.pdf";
import pic from "../../assets/images/profile.jpeg";
import Skills from "../Skills/Skills";

function About() {
  return (
    <>
      <h1 className="about-text-image-mask">About</h1>
      <div className="row-about">
        <div className="col-about">
          <img src={pic} alt="landingPic" className="image"></img>
        </div>
        <div className="">
          <p className="about-text">
            <strong>
              I'm Tulio, a Jr Full Stack Developer based in Chicago, IL.
            </strong>
            <br />
            Hello there! I'm Tulio Salvatierra, a Full-Stack Developer based in
            Chicago, specializing in creating dynamic and responsive web
            applications. With a passion for both frontend and backend
            technologies, I am on a mission to build digital solutions that meet
            and exceed expectations. My approach is to blend creativity with
            functionality, offering unique web experiences tailored to your
            needs. Reach Out Today!
          </p>
        </div>
      </div>
      <div className="about-list">
        <h3 className="listTitle">Techologies:</h3>
        {skillsObject.map((skill, index) => (
          <ul key={index}>
            <li>
              <strong className="list-item">{skill.title}</strong>
              <br />
              {skill.content.map((content, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-outline-light"
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
      <button className="btn btn-dark" href={RESUME}>
        Download CV
      </button>
    </>
  );
}

export default About;
