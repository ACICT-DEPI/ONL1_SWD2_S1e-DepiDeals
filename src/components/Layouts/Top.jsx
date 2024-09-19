import Box from "@mui/material/Box";
import React from "react";
import Nav from "./Nav";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "./Drawer";

export default function Top() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "30px 20px",
          display: "flex",
          gap: "20px",
          margin: "0px",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}>
        <Drawer />
        <Nav></Nav>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            flex: 1,
            position: "relative",
          }}>
          <input
            style={{
              width: "100%",
              borderRadius: "20px",
              fontSize: "20px",
              padding: "10px",
              border: "none",
              height: "40px",
              backgroundColor: "#F1EFEF",
              color: "#787777",
            }}
            placeholder="Search for recpies"
          />

          <SearchIcon
            sx={{
              position: "absolute",
              right: "-10px",
              top: "10px",
              fontSize: "40px",
              color: "gray",
            }}
          />
        </Box>
        <img style={{ marginLeft: "10px" }} src="/ologo.png" alt="logo" />
      </Box>
    </>
  );
}
