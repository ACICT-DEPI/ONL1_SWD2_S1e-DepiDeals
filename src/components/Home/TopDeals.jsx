import React from "react";
import TagName from "../Layouts/TagName";
import Swiper from "./TopSwiper";
import { Box } from "@mui/material";

export default function TopDeals() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "60%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: "10px",
        my: "20px",
      }}>
      <TagName name={"Top in DepiDeals"} />
      <Swiper />
    </Box>
  );
}
