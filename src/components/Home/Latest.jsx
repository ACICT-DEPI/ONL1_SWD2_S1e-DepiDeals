import { Box } from "@mui/material";
import Cardd from "../Common/Card";
import React from "react";
import Typography from "@mui/material/Typography";

const cardApi = [
  {
    id: 1,
    title: "Rateorama",
    category: "Backend",
    overview:
      "Rateorama is an exceptional platform dedicated to rating movies, series, and TV shows. It offers a unique opportunity for individuals to express their.... . ",
    pic: "/name.png",
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
export default function Latest() {
  const Cards = () => {
    return cardApi.map((card) => {
      return <Cardd ApiCard={card} />;
    });
  };
  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          p: "5px",
          fontWeight: "600",
        }}>
        My Latest Projects
      </Typography>
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
