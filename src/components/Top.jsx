import Box from "@mui/material/Box";
import React from "react";
import LList from "./List";
export default function Top() {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "100%",
          }}>
          <Box
            sx={{
              py: "10px",
              maxHeight: "120px",
              maxWidth: "180px",
            }}>
            <img height={"100%"} width={"100%"} src="/logo.png" alt="" />
          </Box>
        </Box>
        <LList />
      </Box>
    </>
  );
}
