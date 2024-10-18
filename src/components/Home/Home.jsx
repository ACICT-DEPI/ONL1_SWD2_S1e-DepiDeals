// import React, {  useState } from "react";
import "./home.css";
import { Box } from "@mui/material";
import TopDeals from "./TopDeals";
import ExclusiveDeals from "./ExclusiveDeals";
import LatestDeals from "./LatestDeals";
import SearchBar from "../Layouts/SearchBar";

export default function Home() {
  return (
    <div className="homeMain">
      <Box
        sx={{
          minWidth: "100%",
          maxWidth: "100%",
          display: { xs: "block", md: "flex" },
          justifyContent: "center",
          height: { xs: "", md: "550px" },
          gap: "20px",
        }}>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            zIndex: 2,
            width: "98%",
            margin: "auto",
          }}>
          <SearchBar phone={true} />
        </Box>
        <TopDeals />
        <ExclusiveDeals />
      </Box>
      <LatestDeals />
    </div>
  );
}
