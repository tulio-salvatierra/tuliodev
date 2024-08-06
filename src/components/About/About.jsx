import React from "react";
import "./About.css";
import pic from "../../assets/images/profile.jpeg";
import Skills from "../Skills/Skills";

function About() {
  return (
    <section id="about" className="section">
      <div className="container-xxl">
        <h1 className="section-title">About</h1>
        <div className="row">
          <p className="about-row">
            <div className="row-about">
              <img src={pic} alt="landingPic" className="about-pic"></img>
            </div>
            <h2 className="about-sub">I'm Tulio Salvatierra</h2>a{" "}
            <strong className="bold">Full Stack Developer</strong>,contantly
            learning to build a strong foundation on the basics:{" "}
            <strong className="bold">HTML, CSS & JS.</strong>I begun developing
            with focus on front end, such as react,react native but new
            technologies come everyday. I am learning now back end to have a
            full stack skills, which I think will suit my entrepreneurial spirit
            and will make me able to provide real world solutions to real world
            problems.
            <br></br>
          </p>
          <div className="button-container">
            <a className="custom-btn" href="/contact">
              Let's Collaborate!
            </a>
          </div>
        </div>
        <div className="about-list" id="tech">
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
