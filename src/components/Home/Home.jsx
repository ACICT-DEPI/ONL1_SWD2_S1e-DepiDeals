// import React, {  useState } from "react";
import "./home.css";
import { Box } from "@mui/material";
import TopDeals from "./TopDeals";
import ExclusiveDeals from "./ExclusiveDeals";
import LatestDeals from "./LatestDeals";

export default function Home() {
  return (
    <Box
      sx={{
        padding: "20px 5px ",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
      }}>
      <Box
        sx={{
          minWidth: "100%",
          maxWidth: "100%",
          display: { xs: "block", md: "flex" },
          justifyContent: "center",
          height: { xs: "", md: "550px" },
          gap: "20px",
        }}>
        <TopDeals />
        <ExclusiveDeals />
      </Box>
      <LatestDeals />
    </Box>
  );
}
