import aboutIcon from "../assets/icons/about.png";
import contactIcon from "../assets/icons/contact.png";
import projectsIcon from "../assets/icons/projects.png";
import homeIcon from "../assets/icons/home.png";

export const PROJECTS_URL = "#projects";

export const HOME_URL = "/";

export const ABOUT_URL = "/about";

export const CONTACT_URL = "#contact";

export const GITHUB_URL = "https://www.github.com/tulio-salvatierra";

export const LINKEDIN_URL = "https://www.linkedin.com/in/tulio-salvatierra/";

export const UPWORK_URL = "https://www.upwork.com/freelancers/tulio";

export const PORTFOLIO_URL = "https://tuliosalvatierra.com";

export const TELEPHONE = "786-314-6121";

export const EMAIL = "salvacorp@gmail.com";

export const MENU_ITEMS = [
  {
    title: "Home",
    url: HOME_URL,
    icon: homeIcon,
    className: "home-link",
  },
  {
    title: "Projects",
    url: PROJECTS_URL,
    icon: projectsIcon,
    className: "link",
  },

  {
    title: "About",
    url: ABOUT_URL,
    icon: aboutIcon,
    className: "link",
  },
  {
    title: "Contact",
    url: CONTACT_URL,
    icon: contactIcon,
    className: "link",
  },
];
