import React from "react";
import { Box, Typography } from "@mui/material";
import Pcard from "./Pcard";

export default function Profile() {
  return (
    <Box sx={{ padding: "0px 15px" }}>
      <Box>
        <Typography sx={{ color: "#8D8D94", fontFamily: "poppins" }}>
          Welcome Back!
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { xs: "20px", md: "28px" },
            fontFamily: "poppins",
          }}>
          @lordseif07
        </Typography>
      </Box>

      <Box
        sx={{
          marginBottom: "10px",
          marginTop: "30px",
          display: "flex",
          gap: "5px",
        }}>
        <Box
          sx={{
            width: "8px",
            backgroundColor: "#ff8b48",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "20px", md: "27px" },
          }}>
          Your favourite recipes
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "start",
          gap: "20px",
          minWidth: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
        }}>
        <Pcard />
        <Pcard />
        <Pcard />
      </Box>
    </Box>
  );
}
