import Box from "@mui/material/Box";
import React from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import Actions from "./Actions";

export default function Top() {
  const location = useLocation();
  let stat = location.pathname;
  stat = stat.split("/")[1];

  return (
    <>
      <Box
        sx={{
          boxShadow: "3px 0px 10px rgba(0,0,0,0.25)",
          boxSizing: "border-box",
          width: "100%",
          padding: "20px 30px",
          display: stat === "Start" ? "none" : "flex",
          gap: "20px",
          margin: "0px",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
          maxHeight: "70px",
        }}>
        <img width={"150px"} id="logo" src="/logo.png" alt="logo" />
        <Nav />

        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            width: "50%",
          }}>
          <SearchBar />
          <Actions />
        </Box>

        <Drawer />
      </Box>
    </>
  );
}
