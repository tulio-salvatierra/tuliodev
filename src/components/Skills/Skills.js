import React from "react";
import "./Skills.css";
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
import tailwind from "../../assets/images/skill-icons/Tailwind.svg";
import sequelize from "../../assets/images/skill-icons/sequelize-svgrepo-com.svg";
import express from "../../assets/images/skill-icons/express.svg";
import jira from "../../assets/images/skill-icons/jira.svg";
import github from "../../assets/images/skill-icons/github.svg";
import ts from "../../assets/images/skill-icons/ts.svg";

function Skills() {
  const skills = [
    {
      title: "FrontEnd",
      content: [
        Bootstrap,
        CSS,
        HTML,
        JavaScript,
        ReactSVG,
        MaterialUI,
        tailwind,
        ts,
      ],
    },
    {
      title: "BackEnd",
      content: [node, pgsql, firebase, npm, sequelize, firebase, express],
    },
    {
      title: "Tools",
      content: [code, figma, slack, jira, github],
    },
  ];

  return (
    <section className="container p-5">
      <div className="title">
        <h1 className="section-title">Skills</h1>
      </div>
      <div className="container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="card">
            <h2
              style={{
                color: "#e3e4e2",
                fontWeight: "900",
                marginBottom: "1rem",
              }}
            >
              {skillCategory.title}
            </h2>
            <div className="card-body">
              {skillCategory.content.map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  alt="skill"
                  style={{ width: "60px", margin: "0.5rem" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
