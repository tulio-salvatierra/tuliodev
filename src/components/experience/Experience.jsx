import React from "react";
import "./Experience.css";
import { LINKEDIN_URL } from "../../Constants/index";

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
          <h3 className="pb-4">Full Stack Dev - Learner to professional</h3>

          <h4 className="pb-2">Front end Contributions:</h4>
          <p className="exp-list">
            Developed an e-commerce site using SCRUM, focusing on React, React
            Router Dom, React Query, and Material-UI.
            <br />
            Implemented secure user authentication and permissions, enhancing
            user experience and security.
            <br />
            Created an intuitive shopping cart, improving the online shopping
            process.
            <br />
            Integrated RESTful APIs and utilized Firebase for data storage and
            management.
            <br />
            Used tools like VSCode, Slack, Trello, and GitHub for team
            collaboration and version control.
            <br />
            Translated bootcamp skills into practical applications, preparing
            for a professional environment.
            <br />
            Designed a responsive front-end using ES6 JavaScript, HTML, and CSS.
            <br />
            Adopted CI/CD practices with GitHub Actions.
          </p>

          <h3 className="pb-2 pt-4">Back end Contributions:</h3>
          <p className="exp-list">
            Utilized Express.js for server-side development.
            <br />
            Employed body-parser, cookie-session, cors, and csv-parser for
            enhanced functionality.
            <br />
            Managed environment variables with dotenv and streamlined
            development with nodemon.
            <br />
            Implemented Passport.js for OAuth authentication.
            <br />
            Used PostgreSQL and Sequelize for database management.
            <br />
            Ensured a robust and scalable back-end infrastructure, catering to
            diverse application needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
