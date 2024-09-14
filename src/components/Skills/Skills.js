import React from "react";
import "./Skills.css";
import { skills } from "./skill-list";

function Skills() {
  return (
    <section>
      <div className="title">
        <h1 className="section-title">Skills</h1>
      </div>

      <div className="skill w-100 ">
        {skills.map((category, index) => (
          <div key={index + category} className="card">
            <h1 className="category" key={index + category}>
              {category.title}
            </h1>
            <div className="card-body flex">
              {category.content.map((skill, index) => (
                <div className="card-content mr-4 p-3">
                  <img
                    key={index + 1}
                    src={skill.icon}
                    alt="skill"
                    style={{ width: "80px", margin: "0.5rem" }}
                  />
                  <p className="text-center ">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
