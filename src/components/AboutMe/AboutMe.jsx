import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}>
      <Box sx={{ maxWidth: "80%" }}>
        <img width={"100%"} src="aboutus.png" alt="logo" />
      </Box>

      <Typography
        sx={{
          maxWidth: { xs: "80%", md: "60%" },
          textAlign: "center",
          color: "#FF8B48",
          fontWeight: "bold",
          fontSize: { xs: "20px", md: "25px" },
        }}>
        Welcome to Biteopia, your ultimate culinary destination! Our mission is
        to bring the world of recipes right to your kitchen, inspiring home
        cooks of all skill levels to explore and create delicious meals.
      </Typography>
    </Box>
  );
}
