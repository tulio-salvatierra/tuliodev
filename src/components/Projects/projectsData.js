import Ecommerce from "../../assets/images/meli.webm";
import Quiz from "../../assets/images/quiz.gif";
import CSC from "../../assets/images/csc.png";

export const projectsData = [
  {
    id: 1,
    title: "Ecommerce",
    image: Ecommerce,
    alt: "Ecommerce",
    url: "https://ecommerce-hazel-nine-52.vercel.app/",
    repo: "https://github.com/T00lio/mlchallenge",
    description:
      "React | Tailwind CSS | Node | Express | PostgreSQL | JWT | Mercado Libre API | Vercel. A full stack app that uses the Mercado Libre API to display products. It has a login system, a shopping cart, and a checkout page.",
  },
  {
    id: 2,
    title: "React Quiz App",
    image: Quiz,
    alt: "Quiz",
    url: "https://quiz-2nlyl6im1-t00lio-s-team.vercel.app/",
    repo: "https://github.com/T00lio/quiz",
    description:
      "Vite | React | TypeScript | Tailwind CSS | NodeJS | Express | Vercel. A quiz app that fetches questions from the Open Trivia API. It has a timer, a score counter, and a responsive",
  },
  {
    id: 3,
    title: "Carolina Skin Centre",
    image: CSC,
    alt: "Carolina Skin Centre",
    url: "https://csc-two.vercel.app/",
    repo: "https://github.com/T00lio/csc",
    description:
      "React | Tailwind CSS | Node | Express | PostgreSQL | JWT | Vercel. A full stack app for a dermatology clinic. It has a login system, a patient portal, and a blog.",
  },
];
