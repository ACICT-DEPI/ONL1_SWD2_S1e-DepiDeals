// import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Box } from "@mui/material";
import SignIn from "./components/Forms/SignIn";
import SignUp from "./components/Forms/SignUp";
import Landing from "./components/Forms/Landing";
import "./App.css";

export default function App() {
  const [start, setStart] = useState("landing");

  function handleStart(value) {
    setStart(value);
    console.log(value);
  }

  return (
    <Box
      sx={{
        padding: { xs: "0px", md: "45px" },
        backgroundColor: " #f0e8e8",
        fontFamily: "Poppins",
      }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          maxHeight: "900px",
        }}>
        <Box
          sx={{
            position: "absolute",
            right: {
              md: start === "landing" || start === "signup" ? 0 : "40%",
            },
            left: { md: start === "signin" ? 0 : "40%" },
            top: 0,
            width: { xs: "100%", md: "60%" },
            height:
              start === "landig"
                ? { xs: "70%", md: "100%" }
                : { xs: "60%", md: "100%" },
            transition: "left 1s ease, right 1s ease",
            background: "url('details.png') center/cover no-repeat",
          }}
        />

        {start === "landing" ? (
          <Landing handleStart={handleStart} />
        ) : start === "signin" ? (
          <SignIn handleStart={handleStart} />
        ) : (
          <SignUp handleStart={handleStart} />
        )}
      </Box>
    </Box>
  );
}
