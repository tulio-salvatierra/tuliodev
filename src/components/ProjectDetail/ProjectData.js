const TopShop_URL = "https://ecommerce-hazel-nine-52.vercel.app/";
const TopShop_GH = "https://github.com/T00lio/mlchallenge";
const Quiz_GH = "https://github.com/T00lio/quiz";
const Quiz_URL = "https://quiz-2nlyl6im1-t00lio-s-team.vercel.app/";
const Caro_GH = "https://github.com/T00lio/csc";
const Caro_URL = "https://www.carolinaskincentre.com/";
const TAMM_GH = "https://github.com/T00lio/tamm";
const TAMM_URL = "https://www.tammcleaningservices.com/";

export const PorjectData = [
  {
    id: 1,
    name: "TopShop",
    Description:
      "Full stack Ecommerce app, built using the mercadolibre.com API to retrieve product data",
    Features:
      "Global Cart Functionality soting cart data while navigating the website using firestore, filtering for product enhaced search, Authentication with Firebase",
    Github: TopShop_GH,
    liveSite: TopShop_URL,
    challenges:
      "The main challenge in this case was definitively working with the cart functionality, I have found that working with google solutions became difficult as I learned more about develoment and currently prefer working with vercel solutions with gave less problem when building and deploying as well. It just worked.",
    images: {
      picture: "",
      alt: "",
    },
    client: "",
    status:
      "Currently being re-develop to modernize its stack to nextJS for better  full stack performance",
  },
  {
    id: 2,
    name: "React Quiz App",
    Description:
      "Full stack leaning app, built using to teach users react concepts",
    Features:
      "Fullstackk app built with vite to provide quizzes to help users lear react projects, it's intention was to learn database management so I could learn some PostgresSQL. It was challenging because many features of the backend where a first time going thru them but was able to get on the other side and learned a lot of this experience",
    Github: Quiz_GH,
    liveSite: Quiz_URL,
    challenges:
      "The back was a very interesting challenge that taught me a lot of data handling feature, specially when testing api call but it helped me grow as a developer.",
    images: {
      picture: "",
      alt: "",
    },
    client: "Portoflio project",
    status:
      "Currently being re-develop to modernize its stack to nextJS for better  full stack performance",
  },
  {
    id: 3,
    name: "Carolina Skin Centre",
    Description:
      "Landing page for marketing purpouses for the skin salon of Carolina Alcalá, located in Midland, Tx.",
    Features:
      "This is a landing website, with 3 simple pages, this project collect emails from visitors using a serverless function and redirects customers to Carolina's custom software, salonbiz.com where business info and appointments are handled. In the Future there will aa ecommerce functionality and customer authentication and profiles, and a shopify integration to sell skin care products.",
    Github: Caro_GH,
    liveSite: Caro_URL,
    challenges:
      "This is my first real world project and I learned how to design and style properly a website, having whitespace and properly distribution section element to create a luxurious type of look that was rewuested by Carolina and I had to do some research and really enjoyed building moodboards to get the general feeling of the website.",
    images: {
      picture: "",
      alt: "",
    },
    client: "Carolina Skin Center",
    status: "Live working site",
  },
  {
    id: 4,
    name: "TAMM cleaning services",
    Description:
      "Chicago basec cleaning business landing page for marketing purposes.",
    Features:
      "Displays company information with focus on SEO strategies to push website for higher ranking on google searches. Also collects visitor emails for marketing purposes and schedules appointment for customer with ",
    Github: TAMM_GH,
    liveSite: TAMM_URL,
    challenges:
      "The main challenge was the serverless functions, but after getting them to work properly I was able to replicate this same functionality with other website and now it's another skill rather than a challenge.",
    images: {
      picture: "",
      alt: "",
    },
    client: "",
    status:
      "Live working site",
  },
];
