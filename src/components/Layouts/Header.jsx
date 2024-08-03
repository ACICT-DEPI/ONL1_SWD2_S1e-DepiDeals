import Box from "@mui/material/Box";
import React from "react";
import LList from "./List";
export default function Header() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          px: "15px",
          position: "relative",
          margin: "0px",
          backgroundColor: "primary.main",
          color: "primary.text",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "215px",
        }}>
        <LList />
      </Box>
    </>
  );
}
