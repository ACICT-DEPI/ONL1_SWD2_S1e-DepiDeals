import React from "react";
import { Box, Typography } from "@mui/material";


export default function CardTop({ data }) {
  return (
    <Box
      sx={{ display: "flex", width: "60%", justifyContent: "space-between" }}>
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
      <Box
        sx={{
          display: "flex",
          width: "30%",
          justifyContent: "space-between",
        }}>
        <Typography
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            color: "#FF8B48",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "12px", md: "14px" },
          }}>
          <img src="/icons/Cate.png" alt="" />
          {data.strCategory}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            color: "#FF8B48",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "12px", md: "14px" },
          }}>
          <img src="/icons/Area.png" alt="" />
          {data.strArea}
        </Typography>
      </Box>
    </Box>
  );
}
