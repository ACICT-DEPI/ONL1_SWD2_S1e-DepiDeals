import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Car from "./Car";
export default function Latest() {
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
        My Latest Projects
      </Typography>
      <Box
        sx={{
          maxWidth: "100%",
        }}>
        <Car />
      </Box>
    </Box>
  );
}
