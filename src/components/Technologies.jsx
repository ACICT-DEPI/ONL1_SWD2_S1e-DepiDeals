import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Cardd from "./Card";
import React from "react";

export default function Technologies() {
  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          p: "5px",
          fontWeight: "600",
        }}>
        Technologies
      </Typography>
      <Cardd />
      <Cardd />
      <Cardd />
    </Box>
  );
}
