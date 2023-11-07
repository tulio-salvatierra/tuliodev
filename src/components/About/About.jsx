import React from "react";
import "./About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Skills from "../Skills/Skills";

function About() {
  return (
    <section className="about">
      <div className="col-8">
        <h1 className="text-image-mask">About</h1>

        <h3 className="About-text">
          Dedicated and skilled web developer with a strong foundation in HTML,
          CSS, Javascript and React, backed by a diverse professional
          background, including CDL trucking and Financial analysis roles. I do
          have a soft spot for music, being a drummer I''ve fortunate to be in
          many bands, I love live music and being creative, which is why I
          pursued front end development. Currently looking for a position as a
          front end developer.
        </h3>
      </div>
      <div className="row">
        <Skills />
      </div>

      <br />
    </section>
  );
}

export default About;
