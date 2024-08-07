import { createContext } from "react";

const cardApi = [
  {
    id: "1",
    title: "Figma",
    category: "UI/UX",
    overview:
      "Figma is a collaborative, cloud-based design tool used for user interface (UI) and user experience (UX) design. ",
    pic: "/fig.png",
  },
  {
    id: " 2",
    title: "Express",
    category: "Backend",
    overview:
      "Express.js is a minimal and flexible Node.js web application backend framework that provides a robust set of features for web and mobile applications. ",
    pic: "/ex.png",
  },
  {
    id: "frfvr34243543g534",
    title: "Rateorama",
    category: "Frontend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: "f54g3546g546g6654g64",
    title: "Rateorama",
    category: "Fullstack",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: "5f54f54tgf5g",
    title: "SAKANY",
    category: "UI/UX",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/111111.png",
  },
];

const TechApi = createContext({});
export { TechApi, cardApi };
