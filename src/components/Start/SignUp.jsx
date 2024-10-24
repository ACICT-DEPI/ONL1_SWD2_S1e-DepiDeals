import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

export default function SignUp({ sign }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [response, setResponse] = useState("");
  const [err, setErr] = useState("");

  // const nav = useNavigate();

  async function handleSignUp(event) {
    event.preventDefault();
    try {
      if (password !== password2) {
        setErr("Passwords do not match");
        return;
      }

      const bodyData = {
        username: userName,
        password: password,
        email: email,
      };
      const response = await fetch(
        "https://final-react-project-pi.vercel.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setResponse("User created successfully!");
        setErr("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setUserName("");
      } else {
        setErr(data.message);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "70%", md: "55%" },
        mx: "auto",
        my: "auto",
      }}>
      <form onSubmit={handleSignUp}>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}>
          <img src="/logo.png" alt="" />
        </Box>
        <Typography
          sx={{
            mt: 2,
            display: { xs: "none", md: "block" },
          }}
          variant="h4">
          Create an account
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#b3b3b3",
            mt: -2,
            fontSize: "11px",
          }}>
          Creating an account with us unlocks a world of personalized features
          and enhanced experiences!
        </Typography>
        <div className="formItem">
          <label>User Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>Password</label>
          <input
            minLength={8}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="formItem">
          <label>Password Conformation</label>
          <input
            minLength={8}
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div
          style={{
            width: "80%",
            fontSize: "13px",
            color: "red",
            textAlign: "right",
          }}>
          {err}
        </div>

        <div
          style={{
            width: "80%",
            fontSize: "13px",
            color: "green",
            textAlign: "right",
          }}>
          {response}
        </div>
        <Button
          sx={{ width: "80%", borderRadius: "20px", mt: 2 }}
          type="submit"
          disabled={
            userName === "" ||
            email === "" ||
            password === "" ||
            password2 === ""
              ? true
              : false
          }
          variant="contained">
          Sign up
        </Button>
        <img src="/div.png" width={"80%"} alt="" />
        <Button
          sx={{ width: "80%", borderRadius: "20px" }}
          type="button"
          onClick={() => sign("in")}
          variant="outlined">
          Have an account
        </Button>
      </form>
    </Box>
  );
}
