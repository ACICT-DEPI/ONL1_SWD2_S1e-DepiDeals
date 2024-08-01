import { Box } from "@mui/material";
import Cardd from "../Common/Card";
import Fliter from "../Common/Fliter";
import { useState } from "react";

const cardApi = [
  {
    id: 1,
    title: "Figma",
    category: "UI/UX",
    overview:
      "Figma is a collaborative, cloud-based design tool used for user interface (UI) and user experience (UX) design. ",
    pic: "/fig.jpeg",
  },
  {
    id: 2,
    title: "Express",
    category: "Backend",
    overview:
      "Express.js is a minimal and flexible Node.js web application backend framework that provides a robust set of features for web and mobile applications. ",
    pic: "/ex.png",
  },
  {
    id: 3,
    title: "Rateorama",
    category: "Frontend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: 4,
    title: "Rateorama",
    category: "Fullstack",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/1111.png",
  },
  {
    id: 5,
    title: "SAKANY",
    category: "UI/UX",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/111111.png",
  },
];

export default function Techs() {
  const [f, setF] = useState("All");

  const Cards = () => {
    return cardApi.map((card) => {
      if (f === "All") {
        return <Cardd ApiCard={card} />;
      }
      if (card.category === f) {
        return <Cardd ApiCard={card} />;
      }
      return null;
    });
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Fliter func={setF} />
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "nowrap", md: "wrap" },
          flexDirection: { xs: "column", md: "row" },
          gap: "15px",
        }}>
        <Cards />
      </Box>
    </Box>
  );
}
