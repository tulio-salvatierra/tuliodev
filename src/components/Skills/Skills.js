import React from "react";
import "./Skills.css";
import { skills } from "./skill-list";

export default function Skills() {
  return (
    <section className="skill-section">
      <div className="title">
        <h1 className="section-title">Skills</h1>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {skills.map((category, index) => (
            <div key={index + category.id} className="marquee-category">
              <h3 className="category-title">{category.id.title}</h3>
              <div className="skills-row">
                {category.content.map((skill, index) => (
                  <div className="skill-item" key={skill.name + index}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
