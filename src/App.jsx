import { ThemeProvider, createTheme } from "@mui/material/styles";
import Top from "./components/Layouts/Top";
import url from "./Context/url";
import React, { useState } from "react";
import Footer from "./components/Layouts/Footer";
import Aside from "./components/Layouts/Aside";
import { Box } from "@mui/material";
import Nav from "./components/Layouts/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
export default function App() {
  const [url1, seturl] = useState("Home");
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    palette: {
      primary: {
        main: "#342D85",
        text: "#ffffff",
      },
      secondary: {
        main: "#BCBCBC",
      },
    },
  });

  return (
    <url.Provider value={{ url1, seturl }}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <Aside />
          <Box sx={{ width: "100%" }}>
            <Top />
            <Nav />
            <Routes>
              <Route path="/">
                <Route index path="/" element={<Home />} />
                <Route index path="/Home" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route
                  path="/Technologies"
                  element={<h1 style={{ minHeight: "100vh" }}>T</h1>}
                />
                <Route
                  path="/SendMessage"
                  element={<h1 style={{ minHeight: "100vh" }}>S</h1>}
                />
                <Route path="/About" element={<h1>A</h1>} />
                <Route
                  path="*"
                  element={
                    <h2
                      style={{
                        minHeight: "100vh",
                        minWidth: "100%",
                        textAlign: "center",
                        backgroundColor: "#342D85",
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
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Footer />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </url.Provider>
  );
}
