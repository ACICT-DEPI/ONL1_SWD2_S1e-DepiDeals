import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Top from "./components/Top";

import React from "react";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import { Box } from "@mui/material";
import Nav from "./components/Nav";
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function App() {
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
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/Technologies" element={<h1>T</h1>} />
              <Route path="/SendMessage" element={<h1>S</h1>} />
              <Route path="/About" element={<h1>A</h1>} />
              <Route path="*" element={<h1>No</h1>} />
            </Route>
          </Routes>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
