import {
  GITHUB_URL,
  LINKEDIN_URL,
  TELEPHONE,
  MENU_ITEMS,
} from "../../Constants";
import "./Footer.css";

import profilePic from "../../assets//images/hero/profile.jpeg";
import MenuItem from "../MenuItem/MenuItem";
import HeroSub from "../HeroSub1/HeroSub";

function Footer() {
  return (
    <section id="footer" className="footer-div z-0">
      <div className="p-0 flex">
        <div className="left">
          <img src={profilePic} alt="profile-pic" className="stack" />
          <p className="footer-profile-text">
            I build websites and provide digital solutions to help businesses
            and professionals drive growth and enhance your online presence.
          </p>
        </div>

        <div className="right">
          <div className="footer-col">
            <h1 className="footer-nav">Contact</h1>
            <div className="separator"></div>
            <div className="footer-item .align-content-around">
              <MenuItem
                name={"Call"}
                url={`callto:${TELEPHONE}`}
                className="p-8"
              />

              <MenuItem
                name={"Contact me"}
                url="./../assets/resume.pdf"
                download="Resume.pdf"
              />
            </div>
          </div>
          <div className="footer-col">
            <h1 className="footer-nav">Socials</h1>
            <div className="separator"></div>
            <div className="footer-item">
              <MenuItem
                url={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                name={"LinkedIn"}
              />

              <MenuItem
                url={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="60px"
                name={"GitHub"}
                className="footer-item"
              />

              <MenuItem
                url="https://www.upwork.com/freelancers/tulio"
                target="_blank"
                rel="noopener noreferrer"
                size="60px"
                name={"Upwork"}
                className="footer-item"
              />
            </div>
          </div>

          <div className="footer-col">
            <h1 className="footer-nav">NAVIGATION</h1>
            <div className="separator"></div>
            <div className="footer-item">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem
                  name={item.title}
                  url={item.url}
                  className="footer-item"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 h-auto flex-wrap">
        <div className="separator2"></div>
        <div className="title-sub">
          <HeroSub />
        </div>
        <h1 className="footer-title">TULIO SALVATIERRA</h1>
      </div>
    </section>
  );
}

export default Footer;
