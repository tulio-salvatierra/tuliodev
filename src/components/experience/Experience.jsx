import React from "react";
import "./Experience.css";
import { LINKEDIN_URL } from "./../../Constants/index";

function Experience() {
  return (
    <section className="exp-section">
      <h1 className="section-title">Experience</h1>
      <div className="disclaimer">
        <h1>Read me:</h1>
        <p>
          For full professional experiences detail visit my{" "}
          <a href={LINKEDIN_URL}>LinkedIn profile 🔗</a>. I have experience in
          different fields, I have a business administration bachelors and have
          worked in Finance Consuting companies, Tax accounting roles and
          trucking. I am currently seeking a Software Development Associates
          degree from Richard J. Daley College in Chicago, IL.
        </p>
      </div>
      <div className="card-exp">
        <div className="experience-item exp-item pt-4">
          <h5>Full Stack Dev - Learner to professional</h5>

          <h5>Front end Contributions:</h5>

          <li>
            Developed an e-commerce site using SCRUM, focusing on React, React
            Router Dom, React Query, and Material-UI
          </li>
          <li>
            Implemented secure user authentication and permissions, enhancing
            user experience and security.
          </li>
          <li>
            Created an intuitive shopping cart, improving the online shopping
            process.
          </li>
          <li>
            Integrated RESTful APIs and utilized Firebase for data storage and
            management.
          </li>
          <li>
            Used tools like VSCode, Slack, Trello, and GitHub for team
            collaboration and version control.
          </li>
          <li>
            Translated bootcamp skills into practical applications, preparing
            for a professional environment.
          </li>
          <li>
            Designed a responsive front-end using ES6 JavaScript, HTML, and CSS.
          </li>
          <li>Adopted CI/CD practices with GitHub Actions.</li>

          <h2>Back end Contributions:</h2>

          <li>Utilized Express.js for server-side development.</li>
          <li>
            Employed body-parser, cookie-session, cors, and csv-parser for
            enhanced functionality.
          </li>
          <li>
            Managed environment variables with dotenv and streamlined
            development with nodemon.
          </li>
          <li>Implemented Passport.js for OAuth authentication.</li>
          <li>Used PostgreSQL and Sequelize for database management.</li>
          <li>
            Ensured a robust and scalable back-end infrastructure, catering to
            diverse application needs.
          </li>
        </div>
      </div>
    </section>
  );
}

export default Experience;
