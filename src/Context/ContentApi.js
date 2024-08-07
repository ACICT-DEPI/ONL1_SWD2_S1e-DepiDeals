import { createContext } from "react";

const proApi = [
  {
    id: "1",
    type: "project",
    title: "SAKANY",
    category: "UI/UX",
    overview:
      " SAKANY is a comprehensive platform designed to streamline the rental process for college students seeking affordable and secure accommodations near their universities and colleges. This digital solution offers a seamless experience, connecting students with a curated selection of rental options tailored to their specific needs and budget. ",
    pic: "/saka.png",
    bg: "/11.png",
    gallery: ["/11.png", "/fig.png"],
    link: "www.google.com",
    notes: ["r3423r2trt43t34g", "432gf234f34", "432ggf324g423"],
    tools: ["figma", "react.js"],
  },
  {
    id: "2",
    type: "project",
    title: "Rateorama",
    category: "Backend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their opinions while also gaining valuable insights from others. With Rateorama, users can effortlessly navigate through a vast collection of reviews, empowering them to make informed decisions about what to watch. Additionally, the platform keeps users up-to-date with the latest releases, ensuring they never miss out on exciting new content. ",
    pic: "/Rateo.png",
    bg: "/22.jpg",
    gallery: ["/Rateo.png", "/fig.png"],
    link: "www.google.com",
    notes: ["خقتلتقخثفخةل ", "قشفثخقلقنلحنق", "rateororegke"],
    tools: ["Express.js", "figma.js"],
  },
  {
    id: "3",
    type: "project",
    title: "BUH",
    category: "UI/UX",
    overview:
      "BUH is a blog application that offers a highly customizable and unique blogging experience, empowering users to express their individuality through bespoke design and content creation, all while fostering a harmonious and supportive community of fellow bloggers.",
    pic: "/1111.png",
    bg: "/33.png",
    gallery: ["/1111.png", "/seif.png", "/seif.png"],
    link: "www.google.com",
    notes: ["r3423r2trt43t34g", "432gf234f34", "432ggf324g423"],
    tools: ["figma", "react.js"],
  },
];

const TechApi = [
  {
    id: "1",
    type: "tech",
    title: "Figma",
    category: "UI/UX",
    overview:
      "Figma is a collaborative, cloud-based design tool used for user interface (UI) and user experience (UX) design. ",
    pic: "/fig.jpeg",
  },
  {
    id: " 2",
    type: "tech",
    title: "Express",
    category: "Backend",
    overview:
      "Express.js is a minimal and flexible Node.js web application backend framework that provides a robust set of features for web and mobile applications. ",
    pic: "/ex.png",
  },
  {
    id: "frfvr34243543g534",
    type: "tech",
    title: "Rateorama",
    category: "Frontend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: "f54g3546g546g6654g64",
    type: "tech",
    title: "Rateorama",
    category: "Fullstack",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: "5f54f54tgf5g",
    type: "tech",
    title: "SAKANY",
    category: "UI/UX",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/111111.png",
  },
];

const ApiContext = createContext({});
export { TechApi, proApi, ApiContext };
