import React from "react";
import { Box, Typography } from "@mui/material";

export default function Pcard() {
  return (
    <Box
      sx={{
        boxShadow: "0px 5px 10px rgba(0,0,0,0.20)",

        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        width: { xs: "100%", lg: "48%" },
        minHeight: { xs: "120px", md: "200px" },
        maxHeight: { xs: "120px", md: "200px" },
      }}>
      <Box
        sx={{
          width: "37%",
          height: { xs: "120px", md: "200px" },
        }}>
        <img
          style={{ objectFit: "cover" }}
          width={"100%"}
          height={"100%"}
          src="meal.jpg"
          alt=""
        />
      </Box>

      <Box
        sx={{
          minHeight: { xs: "120px", md: "200px" },
          maxHeight: { xs: "120px", md: "200px" },
          padding: "10px 5px",
          flex: 1,
        }}>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "20px" },
            fontFamily: "poppins",
            fontWeight: "bold",
          }}>
          Pizza Express Margherita
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "18px" },
            fontFamily: "poppins",
            color: "#FF8B48",
            fontWeight: "500",
          }}>
          Area : Italian
        </Typography>
        <Typography
          sx={{
            overflow: "clip",
            fontSize: { xs: "10px", md: "15px" },
            fontFamily: "poppins",
            color: "#A1A0A0",
            maxHeight: { xs: "60px", md: "90px" },
          }}>
          1 Preheat the oven to 230°C. Add the sugar and crumble the fresh yeast
          into warm water. Allow the mixture to stand for 10 – 15 minutes in a
          warm place we find a windowsill on a sunn
        </Typography>
      </Box>
    </Box>
  );
}
