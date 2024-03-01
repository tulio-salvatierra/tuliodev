import React from "react";
import "./About.css";
import RESUME from "../../assets/resume.pdf";
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
        <div className="row">
          <p className="about-text mt-lg-5 text-center w-100">
            <strong>
              I'm Tulio, a Jr Full Stack Developer based in Chicago, IL.
            </strong>
            <br />I have experience working with a wide range of technologies
            and a passion for learning new technologies and improve my skills to
            help solve problems and create solutions. I am a quick learner and
            have a strong work ethic. Originally from Venezuela, now living in
            Chicago, IL. Strong and diverse background in Finance and business
            management.
          </p>
        </div>
      </div>
      <div className="about-list">
        <h1 className="about-text-image-mask">Techologies:</h1>
      </div>
      <Skills />
      <button className="btn btn-dark" href={RESUME}>
        Download CV
      </button>
    </>
  );
}

export default About;
