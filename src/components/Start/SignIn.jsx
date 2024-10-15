import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

export default function SignIn({ sign }) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  // const nav = useNavigate();

  const handleSignIn = () => {
    alert(username + password);
  };

  return (
    <Box sx={{ width: "55%", mx: "auto", my: "auto" }}>
      <form onSubmit={handleSignIn}>
        <Typography variant="h4">Sign In</Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#b3b3b3",
            mt: -2,
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
