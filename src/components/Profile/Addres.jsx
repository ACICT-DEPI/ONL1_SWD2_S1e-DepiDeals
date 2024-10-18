import React from "react";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";

export default function Addres() {
  return (
     <Box
      sx={{
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        margin: "20px 0px",
        alignItems: "start",
        justifyContent: "start",
      }}>
      <TagName name={"Your Addresses"} />
    </Box>
  );
}
