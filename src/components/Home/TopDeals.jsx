import React from "react";
import TagName from "../Layouts/TagName";
import Swiper from "./TopSwiper";
import { Box } from "@mui/material";

export default function TopDeals() {
  return (
    <Box
      sx={{
        marginTop: "0px",
        width: { xs: "100%", md: "60%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: "10px",
        my: { xs: "20px", md: "0px" },
        zIndex: 0,
      }}>
      <TagName name={"Top in DepiDeals"} />
      <Swiper />
    </Box>
  );
}
