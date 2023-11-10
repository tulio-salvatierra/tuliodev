import React from "react";
import Bootstrap from "../../assets/images/skill-icons/bootstrap.svg";
import CSS from "../../assets/images/skill-icons/css.svg";

import HTML from "../../assets/images/skill-icons/html.svg";
import JavaScript from "../../assets/images/skill-icons/javascript.svg";
import ReactSVG from "../../assets/images/skill-icons/react.svg";
import MaterialUI from "../../assets/images/skill-icons/material-ui.svg";
import code from "../../assets/images/skill-icons/code.svg";
import figma from "../../assets/images/skill-icons/figma.svg";
import firebase from "../../assets/images/skill-icons/firebase.svg";
import node from "../../assets/images/skill-icons/node.svg";
import npm from "../../assets/images/skill-icons/npm.svg";
import pgsql from "../../assets/images/skill-icons/pgsql.svg";
import slack from "../../assets/images/skill-icons/slack.svg";

function Skills() {
  const skills = [
    Bootstrap,
    CSS,
    HTML,
    JavaScript,
    ReactSVG,
    MaterialUI,
    slack,
    code,
    figma,
    firebase,
    node,
    npm,
    pgsql,
  ];
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, index) => (
          <li>
            <img
              src={skill}
              alt="skill"
              key={index}
              style={{ margin: "1rem" }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
