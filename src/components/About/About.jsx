import "./About.css";
import Spotify from "../Spotify/Spotify";
import YouTubeEmbed from "../Youtube";

function About() {
  return (
    <section id="about" className="section z-0">
      <h1 className="contact-title">About</h1>
      <div className="container">
        <div className="parent">
          <div className="div1"></div>
          <div className="div2">
            <h1 className="text-bento-title">THE STORY...</h1>
            <p className="about-text">
              I am originally from Venezuela 🇻🇪. I've been in the US for almost
              8 years now. I have a bachelors degree in business administration
              from UNE in Caracas (Venezuela) and had different professional
              roles in family business, entreprenurail ventures and big 4 firms
              (Accenture & EY). Technology has always been a passion of mine in
              many ways like innovation, computer science, video games, etc. So,
              I decided to persue this long time passion with intent and here I
              am learning and creating web interfaces. It's been an amazing
              challenge that I embrace fully and want to keep growing in this
              area. <hr />I also enjoy making music and been a self taught
              drummer for many years and being in bands was always a way to
              connect with other and I hope tech will make that possible too! 🚀
            </p>
          </div>
          <div className="div3">
            <h1>MISSION</h1>{" "}
            <p className="about-text">
              I am a full-stack developer that began my journey in front-end,
              then evolved into backend, and now learning full stack
              applications, and my latest endeavor is to learn cloud
              infrastructure. Every guru says find a niche and stick with it...
              but in reality you find many niches.. and things change along the
              way, but all systems will needs a management of its systems and
              will be in some sort of cloud, hence that's why I am learning
              Cloud infrastructure. This is not a home, but rather a comfy place
              you find in your journey. Thing is journey is not a destination
              but a process, so I am gonna try to enjoy it as much as possible
              while learning all of this technologies.
            </p>
          </div>
          <div className="div4">
            <a className="custom-btn" href="/contact">
              Let's Collaborate!
            </a>
          </div>
          <div className="div5">
            <h1>OTHER INTEREST</h1>{" "}
            <div className="p-2 mb-5">
              <h4 className="about-text">
                Here a link a video of me playing to my latest band. Enjoy!
              </h4>
            </div>
            <YouTubeEmbed />
            <h4 className="about-text">
              {" "}
              Here's a playlist I use when I code:
            </h4>
            <Spotify />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
