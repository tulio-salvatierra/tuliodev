import React from "react";
import Bootstrap from "../../assets/images/skill-icons/bootstrap.svg";
import CSS from "../../assets/images/skill-icons/css.svg";
import GitHub from "../../assets/images/skill-icons/github.svg";
import HTML from "../../assets/images/skill-icons/html.svg";
import JavaScript from "../../assets/images/skill-icons/javascript.svg";
import ReactSVG from "../../assets/images/skill-icons/react.svg";
import MaterialUI from "../../assets/images/skill-icons/material-ui.svg";

function Skills() {
  const skills = [
    Bootstrap,
    CSS,
    GitHub,
    HTML,
    JavaScript,
    ReactSVG,
    MaterialUI,
  ];
  return (
    <>
      <br></br>
      <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Skills</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {skills.map((skill) => (
          <li>
            <img src={skill} alt="skill" style={{ margin: "1rem" }} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
