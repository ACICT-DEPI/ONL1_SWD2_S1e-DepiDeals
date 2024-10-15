import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}>
      <Box sx={{ maxWidth: "80%" }}>
        <img width={"100%"} src="about.png" alt="logo" />
      </Box>

      <Typography
        sx={{
          maxWidth: { xs: "80%", md: "60%" },
          textAlign: "center",
          color: "#414DB1",
          fontWeight: "bold",
          fontSize: { xs: "20px", md: "25px" },
        }}>
        DepiDeals is your ultimate E-commerce destination for a diverse range of
        tech devices, from smart home gadgets to gaming accessories and personal
        electronics. Our website features a sleek, intuitive user interface and
        a responsive design, ensuring a seamless shopping experience on any
        device. With detailed product descriptions and customer reviews, finding
        the perfect tech gear is easy and enjoyable. Experience secure shopping
        and discover innovative technology at DepiDeals!
      </Typography>
    </Box>
  );
}
