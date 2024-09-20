import Box from "@mui/material/Box";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ phone }) {
  return (
    <Box
      sx={{
        display: { xs: phone ? "flex" : "none", md: "flex" },
        justifyContent:"center",
        alignItems: "center",
        flex: 1,
        position: "relative",
      }}>
      <input
        style={{
          width: "100%",
          borderRadius: "20px",
          fontSize: "20px",
          padding: "10px",
          border: "none",
          height: "40px",
          backgroundColor: "#F1EFEF",
          color: "#787777",
        }}
        placeholder="Search for recpies"
      />

      <SearchIcon
        sx={{
          position: "absolute",
          right: "10px",
          top: "10px",
          fontSize: "40px",
          color: "gray",
        }}
      />
    </Box>
  );
}
