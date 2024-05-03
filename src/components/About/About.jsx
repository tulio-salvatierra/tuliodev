import React from "react";
import "./About.css";
import pic from "../../assets/images/profile.jpeg";
import Skills from "../Skills/Skills";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-text-image-mask">About</h1>
      <div className="row">
        <div className="row-about">
          <img src={pic} alt="landingPic" className="image"></img>
        </div>
        <h2 className="about-sub">I'm Tulio Salvatierra</h2>
        <p className="about-row">
          <strong className="bold">Full Stack Developer</strong> with strong
          foundation on the basics:{" "}
          <strong className="bold">HTML, CSS & JS.</strong>
          <br></br>I have experience working with a wide range of technologies
          and a passion for learning new technologies and improve my skills to
          help solve problems and create solutions. I am a quick learner and
          have a strong work ethic. I have a strong and diverse background in
          Finance and business management. I also play drums and enjoy
          photography.
          <br></br>
        </p>
      </div>
      <div className="about-list" id="tech">
        <h1 className="about-text-image-mask">Tech Stack</h1>
      </div>
      <Skills />
    </div>
  );
}

export default About;
