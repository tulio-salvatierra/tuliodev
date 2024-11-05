import React from "react";
import "./Skills.css";
import { skills } from "./skill-list";

function Skills() {
  return (
    <section className="skill-section">
      <div className="title">
        <h1 className="section-title">Skills</h1>
      </div>

      <div className="skill">
        {skills.map((category, index) => (
          <div key={index + category} className="card">
            <div className="card-body">
              <h3 className="card-title w-100" key={index + category}>
                {category.title}
              </h3>
              {category.content.map((skill, index) => (
                <div className="skill" key={skill + index}>
                  <img
                    src={skill.icon}
                    alt="skill"
                    style={{ width: "50px", margin: "0.5rem" }}
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
