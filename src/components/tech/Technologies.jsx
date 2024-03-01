import React from "react";
import "./Technologies.css";
import Skills from "../Skills/Skills";

function Technologies() {
  return (
    <>
      <section className="tech-container" id="tech">
        <div className="sep"></div>
        <br />
        <h1 className="tech-text-image-mask">Technologies</h1>
        <div className="tech-content">
          <div className="tech-content-left">
            <h3 className="tech-text">
              I have experience working with a wide range of technologies and
              languages. I am always looking to learn new technologies and
              improve my skills.
            </h3>
          </div>
          <Skills />
        </div>
        <br />
      </section>
    </>
  );
}

export default Technologies;
