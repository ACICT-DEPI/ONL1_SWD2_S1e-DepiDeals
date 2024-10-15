import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

export default function SignUp({ sign }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // const nav = useNavigate();
  const handleSignUp = () => {
    alert(userName + password);
  };

  return (
    <Box sx={{ width: "55%", mx: "auto", my: "auto" }}>
      <form onSubmit={handleSignUp}>
        <Typography variant="h4" sx={{ mt: 2 }}>
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
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="formItem">
          <label>Password Conformation</label>
          <input
            type="text"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
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
