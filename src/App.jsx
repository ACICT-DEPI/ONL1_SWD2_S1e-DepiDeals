// import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Start from "./components/Start/Start";
export default function App() {
  return (
    <Box
      sx={{
        padding: { xs: "0px", md: "45px" },
        backgroundColor: " #f0e8e8",
        fontFamily: "Poppins",
      }}>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Start />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="*"
            element={
              <h2
                style={{
                  minHeight: "100vh",
                  minWidth: "100%",
                  textAlign: "center",
                  backgroundColor: "#FF8B48",
                  color: "white",
                  margin: 0,
                  paddingTop: "30px",
                }}>
                Error 404 : Not Found
              </h2>
            }
          />
        </Route>
      </Routes>
    </Box>
  );
}
