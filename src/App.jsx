import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Top from "./components/Top";
import Latest from "./components/Latest";
import Technologies from "./components/Technologies";
import ContactMe from "./components/ContactMe";
import React from "react";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import { Box } from "@mui/material";
import Nav from "./components/Nav";

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
        <Box>
          <Top />
          <Nav />
          <Latest />
          <Technologies />
          <ContactMe />
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
