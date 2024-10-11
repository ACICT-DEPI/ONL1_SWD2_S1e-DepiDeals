import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignIn({ handleStart }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState(null);

  const nav = useNavigate();
  async function handleForm() {
    // Validate input fields
    if (!userName || !password) {
      console.error("Username and password are required.");
      return; // Prevent further execution if fields are empty
    }

    try {
      const response = await fetch(
        "https://biteopia-server.vercel.app/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const jwt = data.AccessToken;
        if (data.message === "username or password wrong") {
          setRes(data.message);
        } else {
          // Store the JWT securely (e.g., in localStorage )
          localStorage.setItem("token", jwt);
          nav("/profile");
        }
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }

    setPassword("");
    setUserName("");
  }
  return (
    <>
      <Box
        sx={{
          borderRadius: { xs: "30px 30px 0px 0px", md: "0px" },
          backgroundColor: "white",
          gap: "10px",
          position: "absolute",
          top: { xs: "auto", md: 0 },
          bottom: { xs: 0, md: "auto" },
          right: { md: 0 },
          width: { xs: "100%", md: "40%" },
          height: { xs: "50%", md: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: { xs: "22px", md: "30px" },
          fontWeight: "600",
        }}>
        <button
          onClick={() => handleStart("landing")}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            rotate: "90deg",
            background: "none",
          }}>
          <ArrowDownwardIcon sx={{ fontSize: { xs: "40px", md: "50px" } }} />
        </button>

        <Typography
          sx={{
            fontSize: { xs: "30px", md: "50px" },
            fontFamily: "Almond",
            color: "black",
            display: "inline-block",
            paddingLeft: "10px",
          }}>
          SIGN IN
        </Typography>

        <Box
          sx={{
            fontSize: { xs: "15px", md: "18px", lg: "20px" },
            width: "85%",
            maxWidth: "460px",
            height: { xs: "45px", md: "50px", lg: "60px" },
            display: "flex",
          }}>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            style={{
              padding: "0px 20px",
              borderRadius: "100px",
              fontSize: "inherit",
              fontWeight: "450",
              width: "100%",
              height: " 100%",
              border: "2px solid rgba(0,0,0,0.2)",
            }}
            placeholder="UserName"
          />
        </Box>

        <Box
          sx={{
            fontSize: { xs: "15px", md: "18px", lg: "20px" },
            width: "85%",
            maxWidth: "460px",
            height: { xs: "45px", md: "50px", lg: "60px" },
            display: "flex",
          }}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{
              paddingLeft: "20px",
              borderRadius: "100px",
              fontSize: "inherit",
              fontWeight: "450",
              width: "100%",
              height: "100%",
              border: "2px solid rgba(0,0,0,0.2)",
            }}
            placeholder="Password"
          />
        </Box>
        <p
          style={{
            paddingRight: "15px",
            margin: "2px",
            maxWidth: "460px",
            width: "80%",
            fontSize: "16px",
            fontWeight: "600",
            color: "red",
            textAlign: "right",
          }}>
          {res ? res : ""}
        </p>

        <button
          onClick={() => handleStart("signup")}
          style={{
            maxWidth: "460px",
            width: "80%",
            fontSize: "17px",
            fontWeight: "700",
            color: "#FF8B48",
            textAlign: "right",
          }}>
          Don't have an account?
        </button>

        <Button
          onClick={() => handleForm()}
          sx={{
            marginTop: "30px",
            backgroundColor: "#FF8B48",
            color: "white",
            borderRadius: "100px",
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: { xs: "600", md: "550" },
            width: "85%",
            maxWidth: "460px",
            height: { xs: "55px", md: "65px" },
            boxShadow: "0px 5px 10px  #888888",
          }}
          disabled={password === "" || userName === ""}
          color="error"
          variant="contained">
          SIGN IN
        </Button>
      </Box>
    </>
  );
}
