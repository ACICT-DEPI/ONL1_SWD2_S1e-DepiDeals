import React from "react";
import { Box, Typography,  } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardD({ data }) {
  return (
    <Box sx={{ padding: 0 }}>
      <Link to={"/home"}>
        <img src="/icons/back.png" alt="r" />
      </Link>
      <Box sx={{ display: "flex", gap: "5px" }}>
        <Box sx={{ width: "8px", backgroundColor: "#ff8b48" }} />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "22px", md: "27px" },
          }}>
          {data.strMeal}
        </Typography>
      </Box>
    </Box>
  );
}
