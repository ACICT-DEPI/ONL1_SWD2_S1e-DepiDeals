// import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import React from "react";
import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

// Layouts
import Footer from "./components/Layouts/Footer.jsx";
import Top from "./components/Layouts/Top";

// mainRoutes
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import Trendy from "./components/Trendy/Trendy";
import Latest from "./components/Latest/Latest.jsx";
import About from "./components/AboutMe/AboutMe";
import Details from "./components/Details/Details";

// personalRoutes
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart.jsx";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "Poppins",
        maxWidth: "100vw",
      }}>
      <Top />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Trendy" element={<Trendy />} />
          <Route path="/Latest" element={<Latest />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/item/:id" element={<Details />} />
          <Route
            path="*"
            element={
              <h2
                style={{
                  minHeight: "100vh",
                  minWidth: "100%",
                  textAlign: "center",
                  color: "#414db1",
                  margin: 0,
                  paddingTop: "50px",
                }}>
                Error 404 : Not Found
              </h2>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </Box>
  );
}
