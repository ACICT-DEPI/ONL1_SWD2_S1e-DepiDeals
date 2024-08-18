import React from "react";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
export default function Splash() {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4B4386",
        minHeight: "100vh",
        minWidth: "100wh",
      }}>
      <img src="/icon.png" alt="freqdf" />
      <br />
      <Box sx={{ width: "40%" }}>
        <LinearProgress color="info" />
      </Box>
    </div>
  );
}
