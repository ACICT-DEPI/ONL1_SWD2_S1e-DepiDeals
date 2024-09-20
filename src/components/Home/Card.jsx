import React, { useState } from "react";

import { Box, Typography } from "@mui/material";

export default function Card({ item }) {
  console.log(item);
  const [srcc, setSrc] = useState("love.png");
  const love = () => {
    srcc === "love.png" ? setSrc("heart2.png") : setSrc("love.png");
  };
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: "139px", sm: "200px", md: "250px" },
        margin: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
      }}>
      <button on onClick={() => love()}>
        <img
          style={{ position: "absolute", top: "10px", right: "10px" }}
          src={`/icons/${srcc}`}
          alt="like"
        />
      </button>
      <img width={"100%"} src={item.strMealThumb} alt="re" />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "20px", sm: "25px" },
        }}>
        {item.strMeal}
      </Typography>
      <Typography
        sx={{ color: "#FF8B48", fontSize: { xs: "15px", sm: "18px" } }}>
        Area: {item.strArea}
      </Typography>
    </Box>
  );
}
