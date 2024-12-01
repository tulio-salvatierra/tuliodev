import Animation from "./../../assets/icons/services/animation.svg";
import SEO from "./../../assets/icons/services/seo.svg";
import UX from "./../../assets/icons/services/ux.svg";
import Web from "./../../assets/icons/services/web.svg";
import { TELEPHONE } from "../../Constants";

export const servicesData = [
  {
    id: 1,
    title:
      "Professional Web Development Services for Small Businesses in Chicago",
    image: Web,
    alt: "Web development services in Chicago icon",
    description:
      "I create dynamic, responsive websites tailored to your business needs. Whether you require a landing page, an e-commerce store, or a custom web application, I ensure your site is visually appealing and functions flawlessly.",
    CTA: "Book a Free Consultation",
    href: `tel:${TELEPHONE}`,
  },
  {
    id: 2,
    title: "User-Centric UI/UX Design Services to Enhance Customer Engagement",
    image: UX,
    alt: "UI/UX design for small business websites in Chicago icon",
    description:
      "I craft stunning, user-friendly designs that captivate your customers. By focusing on intuitive layouts and seamless user experiences, I help elevate your brand's digital presence.",
    CTA: "Let’s Design Together",
    href: `tel:${TELEPHONE}`,
  },
  {
    id: 3,
    title: "Expert SEO Optimization Services to Increase Online Visibility",
    image: SEO,
    alt: "SEO optimization icon for web development services in Chicago",
    description:
      "Enhance your online presence with professional SEO services. I improve your search engine rankings, driving more organic traffic to your website and increasing your business's reach.",
    CTA: "Request an SEO Audit",
    href: `tel:${TELEPHONE}`,
  },
  {
    id: 4,
    title: "Engaging Custom Animations to Enliven Your Website",
    image: Animation,
    alt: "Custom animations for web development services in Chicago",
    description:
      "Bring your website to life with captivating animations. Utilizing GSAP and modern libraries, I create scroll-triggered effects and dynamic interactions that enhance user engagement.",
    CTA: "Add Animation to Your Site",
    href: `tel:${TELEPHONE}`,
  },
];
