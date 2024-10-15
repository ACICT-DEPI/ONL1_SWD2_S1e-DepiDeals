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
        minHeight: "600px",
        width: "1000px",
        display: "flex",
        alignItems: "center",
        boxShadow: "3px 0px 10px rgba(0,0,0,0.25)",
      }}>
      <img
        src="/start.png"
        style={{ maxHeight: "600px", width: "auto", objectFit: "cover" }}
        alt="start"
      />

      <div className="skip">
        <Link to={"/"} className="link">
          <Typography sx={{fontWeight:"700"}}>Skip For Now</Typography>
        </Link>
        <ArrowForwardIcon />
      </div>
      <div className={"main"}>
        {sign === "in" ? <SignIn sign={setSign} /> : <SignUp sign={setSign} />}
      </div>
    </Box>
  );
}
