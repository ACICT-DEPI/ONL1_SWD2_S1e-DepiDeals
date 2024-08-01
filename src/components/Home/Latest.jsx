import { Box } from "@mui/material";
import Cardd from "../Common/Card";
import React from "react";
import Typography from "@mui/material/Typography";

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
          display: "flex",
          flexWrap: { xs: "nowrap", md: "wrap" },
          flexDirection: { xs: "column", md: "row" },
          gap: "15px",
        }}>
        <Cardd p={"./1111.png"} />
        <Cardd />
        <Cardd />
      </Box>
    </Box>
  );
}
