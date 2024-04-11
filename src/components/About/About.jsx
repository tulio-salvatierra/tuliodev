import React from "react";
import "./About.css";
import pic from "../../assets/images/profile.jpeg";
import Skills from "../Skills/Skills";

function About() {
  return (
    <>
      <h1 className="about-text-image-mask">About</h1>
      <div className="row">
        <div className="row-about">
          <img src={pic} alt="landingPic" className="image"></img>
        </div>
        <h2 className="about-sub">I'm Tulio, a Jr Full Stack Developer</h2>
        <p className="about-row">
          I have experience working with a wide range of technologies and a
          passion for learning new technologies and improve my skills to help
          solve problems and create solutions. I am a quick learner and have a
          strong work ethic. I have a strong and diverse background in Finance
          and business management. My main is goal is to become a Full Stack
          Developer and work on projects that can help people and make a
          difference.
        </p>
      </div>
      <div className="about-list" id="tech">
        <h1 className="about-text-image-mask">Tech Stack</h1>
      </div>
    </>
  );
}

export default About;
