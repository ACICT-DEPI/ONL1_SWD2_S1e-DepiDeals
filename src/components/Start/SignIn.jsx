import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignIn({ sign }) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");

  const nav = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const bodyData = {
        username: username,
        password: password,
      };
      const response = await fetch(
        "https://final-react-project-pi.vercel.app/login",
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
        const getCart = async () => {
          const response = await fetch(
            "https://final-react-project-wvwt.vercel.app/cart",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `${data.token}`,
              },
            }
          );
          if (response.ok) {
            const cartData = await response.json();

            localStorage.setItem("usertoken", JSON.stringify(data.token));
            localStorage.setItem("username", username);
            localStorage.setItem("userCart", JSON.stringify(cartData.items));
          } else {
            const errorData = await response.json();
            console.error("Error:", errorData);
          }
        };
        getCart();

        setErr("");
        nav("/");
      } else {
        setErr(data.error);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "70%", md: "55%" },
        mx: "auto",
        my: "auto",
      }}>
      <form onSubmit={handleSignIn}>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}>
          <img src="/logo.png" alt="" />
        </Box>
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
          }}
          variant="h4">
          Sign In
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#b3b3b3",
            mt: 0,
            fontSize: "11px",
          }}>
          Welcome back! Please sign in to your account.
        </Typography>
        <div className="formItem">
          <label>User Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>Password</label>
          <input
            required
            minLength={8}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <Button
          sx={{ width: "80%", borderRadius: "20px", mt: 2 }}
          type="submit"
          disabled={username === "" || password === "" ? true : false}
          variant="contained">
          Sign In
        </Button>
        <img src="/div.png" width={"80%"} alt="" />

        <Button
          sx={{ width: "80%", borderRadius: "20px" }}
          type="button"
          onClick={() => sign("up")}
          variant="outlined">
          Don't have an account?
        </Button>
      </form>
    </Box>
  );
}
