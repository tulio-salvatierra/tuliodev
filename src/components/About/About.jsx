import "./About.css";
import Spotify from "../Spotify/Spotify";
import YouTubeEmbed from "../Youtube";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h1 className="section-title">About</h1>
        <div className="mb-4">
          <div className="parent-about">
            <div className="div22"></div>
            <div className="div11 justify-content-center">
              <h1 className="text-bento">MY JOURNEY</h1>
              <p className="">
                My passion for tech began as a teen tinkering with my PC, I
                would would tinker with it, put it appart, update the OS and
                break it. I always wanted to update it's components as newer
                games always demanded more and more. Then after cell phones came
                around and made us use personal computers less and less I had a
                different approach towards innovation and mobile technologies.
                Years came and went and after the pandemic I began some
                soulsearch and reconnected to those times and persued some
                trainig developing websites. It was the hot thing at the moment
                so I signed for my first React bootcamp and learned some basic
                react and react netive principle to build basic apps. After that
                experience I decided to get an education in software development
                to persue a career in this field and help solve real wolrd
                problems as well as put my energy into learning into that talent
                that I had when I was a kid. Now I can develop full stack apps
                and I keep studying so I can build reliable solutions as well as
                an interest in clouds projects with a focus on design. I stride
                yo make aesthetically pleasing interfaces that have and
                beautiful look and feel that is a very rewarding aspect of
                development which is design.
              </p>
            </div>
            <div className="div33">
              <h2 className="text-bento">MY MISSION</h2>
              <p className="">
                I want to push myself to build challenging project that will
                push my learning forward into new spaces like AI and cloud
                solutions while having beautiful products represent my creativty
                into solutions that help individuals and organizations alike
                meet their objectives.
              </p>
            </div>
            <div className="div44">
              <a className="custom-btn" href="/contact">
                Let's Collaborate!
              </a>
            </div>
            <div className="div5">
              <h2 className="text-bento">BEYOND WORK</h2>
              <div className="p-2 mb-5">
                <p className="pt-5">
                  Music is a significant part of my life. Here's a video of me
                  performing with my latest band—enjoy!
                </p>
              </div>
              <YouTubeEmbed />
              <h4 className="text-bento mt-5 mb-5">
                Here's a playlist I use when coding:
              </h4>
              <Spotify />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
