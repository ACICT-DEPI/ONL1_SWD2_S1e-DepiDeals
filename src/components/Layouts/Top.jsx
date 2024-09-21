import Box from "@mui/material/Box";
import React from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";


export default function Top() {
  const location = useLocation();
  let stat = location.pathname;
  stat = stat.split("/")[1];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: { xs: "20px 10px", md: "30px 20px 0px 20px" },
          display: { xs: stat === "item" ? "none" : "flex", md: "flex" },
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
