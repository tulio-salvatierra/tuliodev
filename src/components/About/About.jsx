import React from "react";
import "./About.css";
import pic from "../../assets/images/profile.jpeg";
import Skills from "../Skills/Skills";

function About() {
  return (
    <section id="about" className="section">
      <div className="container-xl">
        <h1 className="section-title">About</h1>
        <div className="row">
          <p className="about-row">
            <div className="row-about">
              <img src={pic} alt="landingPic" className="about-pic"></img>
            </div>
            <h2 className="about-sub">I'm Tulio Salvatierra</h2>
            <strong className="bold">Full Stack Developer</strong> with strong
            foundation on the basics:{" "}
            <strong className="bold">HTML, CSS & JS.</strong>I have experience
            working with a wide range of technologies and a passion for learning
            new technologies and improve my skills to help solve problems and
            create solutions. I am a quick learner and have a strong work ethic.
            <br></br>
            <button className="btn">Let's Collaborate!</button>
          </p>
        </div>
        <div className="about-list" id="tech">
          <h1 className="section-title">Tech Stack</h1>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
