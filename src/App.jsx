// import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import React from "react";
import { Box } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/AboutMe/AboutMe";
import Profile from "./components/Profile/Profile";
import Start from "./components/Start/Start";
import Top from "./components/Layouts/Top";
import List from "./components/Layouts/List";
import Details from "./components/Details/Details";
import Category from "./components/Categories/Category";

export default function App() {
  const location = useLocation();
  const stat = location.pathname;
  return (
    <Box
      sx={{
        padding: { xs: "0px", md: "45px" },
        backgroundColor: " #f0e8e8",
        fontFamily: "Poppins",
      }}>
      <Box
        sx={{
          overflow: "clip",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
        }}>
        <Box
          sx={{
            marginRight: "20px",
            width: "27%",
            display: { xs: "none", md: stat === "/" ? "none" : "block" },
          }}>
          <List toggleDrawer={() => {}} />
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: stat === "/" ? "none" : "flex",
              alignItems: "center",
            }}>
            <Top />
          </Box>
          <Routes>
            <Route path="/">
              <Route index path="/" element={<Start />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/item/:id" element={<Details />} />
              <Route path="/Category/:name" element={<Category />} />
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
      </Box>
    </Box>
  );
}
