import React from "react";
import Filter from "./Filter";
import SearchBar from "../Layouts/SearchBar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box sx={{marginBottom:"20px", minWidth: "100%", display: { xs: "block", md: "none" } }}>
        <Typography sx={{ color: "#A1A0A0", fontSize: "20px" }}>
          Welcome to Biteopia
        </Typography>
        <Typography sx={{ fontWeight: "700", fontSize: "30px" }}>
          what's in your mind for today
        </Typography>
      </Box>

      <Box sx={{ minWidth: "100%", display: { xs: "block", md: "none" } }}>
        <SearchBar phone={true} />
      </Box>
      <Filter />
    </Box>
  );
}
