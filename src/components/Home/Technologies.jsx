import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Cardd from "../Common/Card";
import React, { useContext } from "react";
import { TechApi } from "../../Context/TechApi";

export default function Technologies() {
  const TechApii = useContext(TechApi);
  const Cards = () => {
    return TechApii.map((card) => {
      return <Cardd ApiCard={card} />;
    });
  };
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
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "nowrap", md: "wrap" },
          flexDirection: { xs: "column", md: "row" },
          gap: "15px",
        }}>
        <Cards />
      </Box>
    </Box>
  );
}
