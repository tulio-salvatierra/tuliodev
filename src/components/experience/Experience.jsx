import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section>
      <h1 className="about-text-image-mask">Experience</h1>
      <div className="card">
        <div className="experience-item">
          <h2 className="exp-title">Full Stack Developer</h2>
          <p className="exp-role">Learner to professional, Remote</p>
          <h3 className="exp-range">2022 - Present</h3>

          <p className="exp-summary">
            As a Junior Full Stack Developer, I significantly contributed to an
            e-commerce platform's development, showcasing my ability to apply
            academic knowledge to practical tech industry challenges.
          </p>
          <h4 className="exp-sub">Key Contributions:</h4>
          <ul className="exp-item ">
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
              Designed a responsive front-end using ES6 JavaScript, HTML, and
              CSS.
            </li>
            <li>Adopted CI/CD practices with GitHub Actions.</li>
          </ul>
          <h4 className="exp-sub">Back-end Contributions:</h4>
          <ul className="exp-item">
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
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
