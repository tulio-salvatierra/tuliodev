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
          For full professional experiences detail visit my
          <a href={LINKEDIN_URL} className="inTextLink">
            LinkedIn profile 🔗
          </a>
          . I have experience in different fields, I have a business
          administration bachelors and have worked in Finance Consuting
          companies, Tax accounting roles and trucking. I am currently seeking a
          Software Development Associates degree from Richard J. Daley College
          in Chicago, IL.
        </p>
      </div>
      <div className="card-exp">
        <div className="experience-item exp-item pt-4">
          <h2 className="pb-4">Full Stack Dev - Learner to professional</h2>

          <h3 className="pb-2">Front end Contributions:</h3>
          <ul className="exp-list">
            <li className="exp-list">
              Developed an e-commerce site using SCRUM, focusing on React, React
              Router Dom, React Query, and Material-UI
            </li>
            <li className="exp-list">
              Implemented secure user authentication and permissions, enhancing
              user experience and security.
            </li>
            <li className="exp-list">
              Created an intuitive shopping cart, improving the online shopping
              process.
            </li>
            <li className="exp-list">
              Integrated RESTful APIs and utilized Firebase for data storage and
              management.
            </li>
            <li className="exp-list">
              Used tools like VSCode, Slack, Trello, and GitHub for team
              collaboration and version control.
            </li>
            <li className="exp-list">
              Translated bootcamp skills into practical applications, preparing
              for a professional environment.
            </li>
            <li className="exp-list">
              Designed a responsive front-end using ES6 JavaScript, HTML, and
              CSS.
            </li>
            <li className="exp-list">
              Adopted CI/CD practices with GitHub Actions.
            </li>
          </ul>

          <h3 className="pb-2 pt-4">Back end Contributions:</h3>
          <ul className="exp-list">
            <li className="exp-list">
              Utilized Express.js for server-side development.
            </li>
            <li>
              Employed body-parser, cookie-session, cors, and csv-parser for
              enhanced functionality.
            </li>
            <li className="exp-list">
              Managed environment variables with dotenv and streamlined
              development with nodemon.
            </li>
            <li className="exp-list">
              Implemented Passport.js for OAuth authentication.
            </li>
            <li>Used PostgreSQL and Sequelize for database management.</li>
            <li className="exp-list">
              Ensured a robust and scalable back-end infrastructure, catering to
              diverse application needs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
