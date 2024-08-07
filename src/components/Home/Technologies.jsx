import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Cardd from "../Common/Card";
import React, { useContext } from "react";
import { ApiContext } from "../../Context/ContentApi";

export default function Technologies() {
  const [techApi] = useContext(ApiContext);
  const Cards = () => {
    return techApi.map((card) => {
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
