import { ThemeProvider, createTheme } from "@mui/material/styles";
import Top from "./components/Layouts/Top";
import React, { useState } from "react";
import Footer from "./components/Layouts/Footer";
import Aside from "./components/Layouts/Aside";
import { Box } from "@mui/material";
import Nav from "./components/Layouts/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Techs from "./components/Techs/Techs";
import Th from "./Context/useTheme";

export default function App() {
  const [theme, setTheme] = useState("light");
  const LightTheme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    palette: {
      primary: {
        main: "#342D85",
        text: "#ffffff",
        ground: "#ffffff",
      },
      secondary: {
        main: "#BCBCBC",
      },
    },
  });
  const DarkTheme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#4B4386",
        maintext: "#ffffff",
        text: "#000000",
        ground: "#1e1e1e",
      },
      secondary: {
        main: "#BCBCBC",
      },
      background: {
        default: "#1e1e1e",
        paper: "#1e1e1e",
      },
    },
  });
  return (
    <Th.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <Box sx={{ display: "flex", backgroundColor: "primary.ground" }}>
          <Aside />
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <Top />

            <Nav />
            <Routes>
              <Route path="/">
                <Route index path="/" element={<Home />} />
                <Route index path="/Home" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Technologies" element={<Techs />} />
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
    </Th.Provider>
  );
}
