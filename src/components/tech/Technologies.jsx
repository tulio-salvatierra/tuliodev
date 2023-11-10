import React from "react";
import "./Technologies.css";
import Skills from "../Skills/Skills";

function Technologies() {
  return (
    <>
      <section className="tech-container">
        <div className="sep"></div>
        <br />
        <h1 className="text-image-mask">Technologies</h1>
        <div className="tech-content">
          <div className="tech-content-left">
            <h3>
              I have experience working with a wide range of technologies and
              languages. I am always looking to learn new technologies and
              improve my skills.
            </h3>
            <ol className="tech-list">
              <li>
                {" "}
                <strong>
                  FrontEnd:
                  <hr />{" "}
                </strong>
                Bootstrap, React, Redux, HTML, CSS, JavaScript{" "}
              </li>
              <li>
                <strong>
                  BackEnd:
                  <hr />
                </strong>
                Node.js, Express, postgreSQL, RESTful API
              </li>
              <li>
                <strong>
                  Tools:
                  <hr />
                </strong>
                GitHub, VS Code, Heroku, Netlify, Postman, Firebase/Firestore,
                Chrome DevTools, npm, Slack, Trello, Figma,
              </li>
            </ol>
          </div>
          <Skills />
          <div></div>
        </div>
        <br />
        <div className="sep"></div>
      </section>
    </>
  );
}

export default Technologies;
