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

export const skills = [
  {
    title: "FrontEnd",
    content: [
      { name: "Bootstrap", icon: Bootstrap },
      { name: "CSS", icon: CSS },
      { name: "HTML", icon: HTML },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: ReactSVG },
      { name: "Material UI", icon: MaterialUI },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "TypeScript", icon: ts },
    ],
  },
  {
    title: "BackEnd",
    content: [
      { name: "Node.js", icon: node },
      { name: "PostgreSQL", icon: pgsql },
      { name: "Firebase", icon: firebase },
      { name: "npm", icon: npm },
      { name: "Sequelize", icon: sequelize },
      { name: "Express.js", icon: express },
    ],
  },
  {
    title: "Tools",
    content: [
      { name: "VS Code", icon: code },
      { name: "Figma", icon: figma },
      { name: "Slack", icon: slack },
      { name: "Jira", icon: jira },
      { name: "GitHub", icon: github },
    ],
  },
];
