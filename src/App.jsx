import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Top from "./components/Top";
import Latest from "./components/Latest";
import Technologies from "./components/Technologies";
import ContactMe from "./components/ContactMe";
import React from "react";
import Footer from "./components/Footer";
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
      <Top />
      <Latest />
      <Technologies />
      <ContactMe />
      <Footer />
    </ThemeProvider>
  );
}
