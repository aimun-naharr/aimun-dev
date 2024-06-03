import significo from "../src/assets//tinified/significo.png";
import donationApp from "../src/assets/tinified/DoDonate.png";
import eCommerce from "../src/assets/tinified/gh-store.png";
import propertyLanding from "../src/assets/tinified/property-landing.png";

export const works = [
  {
    title: "E-commerce shop",
    image: eCommerce,
    techStacks: ["Nextjs", "Redux"],
    description:
      "An e-commerce shop with secure login , product listing, cart and dashboard feature",
    live: "https://gh-eshop.netlify.app/",
  },

  {
    title: "Food Donation app",
    image: donationApp,
    techStacks: ["React", "Typescript", "Redux", "RTK query"],
    description:
      "A donation app for needy ones. Showcasing donation goods. features for donating and a dashboard for managing donation goods",
    live: "https://food-donation-app-one.vercel.app/",
  },
  {
    title: "Property landing page",
    image: propertyLanding,
    techStacks: ["React", "framer motion"],
    description: "It is just an UI Design",
    live: "https://archivista-portfolio.netlify.app/",
  },
  {
    title: "Significo",
    image: significo,
    techStacks: ["React", "gsap"],
    description: "Another UI design which I created for learning gsap",
    live: "https://significo-clone-sh.netlify.app/",
  },
];
