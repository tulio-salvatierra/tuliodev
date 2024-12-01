import "./About.css";
import Spotify from "../Spotify/Spotify";
import YouTubeEmbed from "../Youtube";

function About() {
  return (
    <section id="about" className="section">
      <h1 className="contact-title">About</h1>
      <div className="mb-4">
        <div className="parent-about">
          <div className="div22"></div>
          <div className="div11">
            <h1 className="text-bento-title">MY JOURNEY</h1>
            <p className="about-text">
              Originally from Venezuela 🇻🇪, I've called the U.S. home for nearly
              8 years. Holding a bachelor's degree in Business Administration
              from UNE in Caracas, my career has spanned family businesses,
              entrepreneurial ventures, and roles at firms like Accenture and
              EY. My passion for technology—spanning innovation, computer
              science, and video games—led me to pursue web development. This
              journey has been a rewarding challenge, and I'm committed to
              continuous growth in this field.
            </p>
          </div>
          <div className="div33">
            <h1>MY MISSION</h1>
            <p className="about-text">
              As a full-stack developer, I began with front-end technologies,
              expanded into back-end development, and now specialize in
              comprehensive web solutions. Recognizing the importance of cloud
              infrastructure, I'm dedicated to mastering it to provide scalable
              and efficient services. I believe in embracing the journey of
              learning and aim to enjoy every step while integrating diverse
              technologies.
            </p>
          </div>
          <div className="div44">
            <a className="custom-btn" href="/contact">
              Let's Collaborate!
            </a>
          </div>
          <div className="div5">
            <h1>BEYOND WORK</h1>
            <div className="p-2 mb-5">
              <h4 className="about-text">
                Music is a significant part of my life. Here's a video of me
                performing with my latest band—enjoy!
              </h4>
            </div>
            <YouTubeEmbed />
            <h4 className="about-text">Here's a playlist I use when coding:</h4>
            <Spotify />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
