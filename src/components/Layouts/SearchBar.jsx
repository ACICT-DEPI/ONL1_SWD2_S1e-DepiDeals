import Box from "@mui/material/Box";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import { Typography } from "@mui/material";
// import { Link } from "react-router-dom";

export default function SearchBar({ phone }) {
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [data, setData] = useState([]);

  return (
    <Box sx={{ width: { xs: "100%", md: "80%" }, position: "relative" }}>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "relative",
          height: "30px",
          fontSize: { xs: "18px", md: "20px" },
          zIndex: 2,
        }}>
        <input
          style={{
            width: "100%",
            borderRadius: "20px",
            fontSize: "inherit",
            padding: "10px",
            border: "none",
            height: "45px" ,
            backgroundColor: searching ? "white" : "#F1EFEF",
            color: "#787777",
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSearching(true)}
          onBlur={() => {
            setTimeout(() => setSearching(false), 150);
          }}
          placeholder="Search for recipes"
        />
        <SearchIcon
          sx={{
            position: "absolute",
            right: "10px",

            fontSize: "40px",
            color: "gray",
          }}
        />
      </Box>
    </Box>
  );
}
