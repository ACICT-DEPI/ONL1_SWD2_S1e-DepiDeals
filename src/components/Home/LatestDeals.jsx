import React from "react";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";
import LatestSwiper from "./LatestSwiper";

export default function LatestDeals() {
  return (
    <Box
      sx={{
        padding: "20px",
        mb:"50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: "10px",
        
      }}>
      <TagName name={"Latest"} />
      <LatestSwiper/>
    </Box>
  );
}
