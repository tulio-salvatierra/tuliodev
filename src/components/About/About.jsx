import "./About.css";
import pic from "../../assets/images/hero/profile.jpeg";

function About() {
  return (
    <section id="about" className="section">
      <h1 className="contact-title">About</h1>
      <div className="container">
        <div className="parent">
          <div className="div1">
            <img src={pic} alt="landingPic" className="about-pic"></img>
          </div>
          <div className="div2">
            <h1>EXPERIENCE</h1>{" "}
            <p>
              I have a degree in Business Administration and worked in the
              consulting & finance fields r 10 years, but I have always been
              interested in technology. I started learning to code in 2019 and I
              have been working as a freelance developer since 2020. I am
              currently working on my own projects and looking for new
              opportunities to grow as a developer.
            </p>
          </div>
          <div className="div3">
            <h1>BACKGROUND</h1>{" "}
            <p>
              I am a full-stack developer with a background in business
              administration and finance. I have experience working in the
              consulting and finance fields, but I have always been interested
              in technology. I started learning to code in 2019 and I have been
              working as a freelance developer since 2020. I am currently
              working on my own projects and looking for new opportunities to
              grow as a developer.
            </p>
          </div>
          <div className="div4">
            <a className="custom-btn" href="/contact">
              Let's Collaborate!
            </a>
          </div>
          <div className="div5">
            <h1>OTHER INTEREST</h1>{" "}
            <p>
              Outside of work, I enjoy traveling, hiking, and playing sports. I
              am also a big fan of music and movies. I am always looking for new
              experiences and challenges to grow as a person. I attend meetups
              and conferences to learn new technologies and meet other
              developers. I am always looking for new opportunities to grow as a
              developer. Also I play drums!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
