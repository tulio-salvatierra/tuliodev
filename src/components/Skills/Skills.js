import React from "react";
import "./Skills.css";
import { skills } from "./skill-list";

function Skills() {
  console.log(skills);
  return (
    <section>
      <div className="title">
        <h1 className="section-title">Skills</h1>
      </div>
      <div className="skill-container w-100 h-auto">
        {skills.map((category, index) => (
          <div key={index} className="card">
            <h2
              style={{
                fontWeight: "900",
                marginBottom: "1rem",
              }}
            >
              {category.title}
            </h2>
            <div className="card-body">
              {category.content.map((skill, index) => (
                <>
                  <img
                    key={index + 1}
                    src={skill}
                    alt="skill"
                    style={{ width: "70px", margin: "0.5rem" }}
                  />
                  <p>{skill.name}</p>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
