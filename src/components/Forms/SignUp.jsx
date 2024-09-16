import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, Typography } from "@mui/material";

export default function SignUp({ handleStart }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleForm() {
    console.log(password, userName);
    setPassword("");
    setUserName("");
  }
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          gap: "10px",
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "600",
        }}>
        <button
          onClick={() => handleStart("landing")}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            rotate: "90deg",
          }}>
          <ArrowDownwardIcon sx={{ fontSize: "50px" }} />
        </button>

        <Typography
          sx={{
            fontSize: "50px",
            fontFamily: "Almond",
            color: "black",
            display: "inline-block",
            paddingLeft: "10px",
          }}>
          SIGN UP
        </Typography>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          style={{
            paddingLeft: "20px",
            borderRadius: "100px",
            fontSize: "20px",
            fontWeight: "450",
            width: "460px",
            height: "65px",
            border: "2px solid rgba(0,0,0,0.2)",
          }}
          placeholder="UserName"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          style={{
            paddingLeft: "20px",
            borderRadius: "100px",
            fontSize: "20px",
            fontWeight: "450",
            width: "460px",
            height: "65px",
            border: "2px solid rgba(0,0,0,0.2)",
          }}
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          style={{
            paddingLeft: "20px",
            borderRadius: "100px",
            fontSize: "20px",
            fontWeight: "450",
            width: "460px",
            height: "65px",
            border: "2px solid rgba(0,0,0,0.2)",
          }}
          placeholder="Password"
        />

        <button
          onClick={() => handleStart("signin")}
          style={{
            maxWidth: "460px",
            width: "80%",
            fontSize: "17px",
            fontWeight: "700",
            color: "#FF8B48",
            textAlign: "right",
          }}>
          Have an account?
        </button>

        <Button
          onClick={() => handleForm()}
          sx={{
            marginTop: "30px",
            backgroundColor: "#FF8B48",
            color: "white",
            borderRadius: "100px",
            fontSize: "20px",
            fontWeight: "550",
            width: "85%",
            maxWidth: "460px",
            height: "65px",
            boxShadow: "0px 5px 10px  #888888",
          }}
          disabled={password === "" || userName === "" || email === ""}
          color="error"
          variant="contained">
          SIGN IN
        </Button>
      </Box>
    </>
  );
}
