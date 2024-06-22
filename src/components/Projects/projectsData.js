import Ecommerce from "../../assets/images/meli gif.gif";
import Quiz from "../../assets/images/quiz.gif";
import CSC from "../../assets/images/csc.png";

export const projectsData = [
  {
    id: 1,
    title: "Ecommerce",
    image: Ecommerce,
    alt: "Ecommerce",
    url: "https://react---ecomm.web.app/",
    repo: "https://github.com/T00lio/mlchallenge",
    description:
      "A frontend ecommerce app that has cart and checkout functionalities, authentication routes, Context API for state management, working with Mercadolibre.com real world API",
  },
  {
    id: 2,
    title: "React Quiz App",
    image: Quiz,
    alt: "Quiz",
    url: "https://quiz-git-vercel-deploy-t00lio-s-team.vercel.app/",
    repo: "https://github.com/T00lio/quiz",
    description:
      "A full stack app made using React and Tailwind for frontend, and Node and express for backend and postgresSQL for databse. It has a login system, a quiz with multiple choice questions",
  },
  {
    id: 3,
    title: "Carolina Skin Centre",
    image: CSC,
    alt: "Carolina Skin Centre",
    url: "https://csc-two.vercel.app/",
    repo: "https://github.com/T00lio/csc",
    description:
      "Landing page for a dermatology clinic. It was made using React, Tailwind CSS, and Vercel for deployment. It has a responsive design and a contact form that sends an email to the clinic's email address.",
  },
];
