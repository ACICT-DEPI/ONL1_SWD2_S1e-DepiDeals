import React, { useState } from "react";

import { Box, Typography } from "@mui/material";

export default function Card() {
  const [srcc, setSrc] = useState("love.png");
  const love = () => {
    srcc === "love.png" ? setSrc("heart2.png") : setSrc("love.png");
  };
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: "200px", md: "250px" },
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
      <img width={"100%"} src="meal.jpg" alt="re" />
      <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
        Kumpir
      </Typography>
      <Typography sx={{ color: "#FF8B48", fontSize: "18px" }}>
        Area: Turkish
      </Typography>
    </Box>
  );
}
