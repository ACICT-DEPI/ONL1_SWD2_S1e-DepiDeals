import "./Start.css";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Start() {
  const [sign, setSign] = useState("in");
  return (
    <Box
      sx={{
        position: "relative",
        margin: "60px auto",
        minHeight: { xs: "100vh", md: "600px" },
        width: { xs: "100%", md: "1000px" },
        display: "flex",
        alignItems: "center",
        boxShadow: { xs: "none", md: "3px 0px 10px rgba(0,0,0,0.25)" },
      }}>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          Height: "100%",
          width: "32%",
        }}>
        <img
          src="/start.png"
          style={{ Height: "100%", width: "100%", objectFit: "cover" }}
          alt="start"
        />
      </Box>

      <div className="skip">
        <Link to={"/"} className="link">
          <Typography sx={{ fontWeight: "700" }}>Skip For Now</Typography>
        </Link>
        <ArrowForwardIcon />
      </div>
      <div className={"main"}>
        {sign === "in" ? <SignIn sign={setSign} /> : <SignUp sign={setSign} />}
      </div>
    </Box>
  );
}
