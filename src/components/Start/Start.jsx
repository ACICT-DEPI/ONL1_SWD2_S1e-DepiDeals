import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Landing from "./Landing";

export default function Starting() {
  const [start, setStart] = useState("landing");

  function handleStart(value) {
    setStart(value);
    console.log(value);
  }
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "90vh", md: "100vh" },
        maxHeight: "700px",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
          right: {
            md: start === "landing" || start === "signup" ? 0 : "40%",
          },
          left: { md: start === "signin" ? 0 : "40%" },
          top: 0,
          width: { xs: "100%", md: "60%" },
          minHeight:
            start === "landig"
              ? { xs: "80%", md: "100%" }
              : start === "signup"
              ? { xs: "45%", md: "100%" }
              : { xs: "60%", md: "100%" },
          transition: "left 1s ease, right 1s ease",
          background: "url('details.png') center/cover no-repeat",
        }}>
        <img src="/logo.png" alt="logo" width={"60%"} />

        <Typography
          sx={{
            fontWeight: "550",
            maxWidth: "80%",
            fontSize: {
              xs: start === "landing" || start === "signin" ? "18px" : "15px",
              md: "25px",
            },
            color: "white",
            display: "inline-block",
            paddingLeft: "10px",
          }}>
          Welcome to Biteopia, your ultimate culinary destination! Our mission
          is to bring the world of recipes right to your kitchen, inspiring home
          cooks of all skill levels to explore and create delicious meals.
        </Typography>
      </Box>
      {start === "landing" ? (
        <Landing handleStart={handleStart} />
      ) : start === "signin" ? (
        <SignIn handleStart={handleStart} />
      ) : (
        <SignUp handleStart={handleStart} />
      )}
    </Box>
  );
}
