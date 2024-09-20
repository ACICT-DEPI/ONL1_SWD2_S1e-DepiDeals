import Box from "@mui/material/Box";
import React from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";

export default function Top() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "30px 20px 0px 20px",
          display: "flex",
          gap: "20px",
          margin: "0px",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}>
        <Drawer />
        <Nav></Nav>
        <SearchBar />

        <img
          style={{ marginLeft: "10px" }}
          id="ologo"
          src="/ologo.png"
          alt="logo"
        />
      </Box>
    </>
  );
}
