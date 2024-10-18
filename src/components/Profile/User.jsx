import { Typography } from "@mui/material";
import React from "react";

export default function User() {
  return (
    <div className="user">
      <img src="/icons/user.png" alt="user" />
      <div>
        <Typography
          sx={{
            fontWeight: "550",
            fontSize: { xs: "14px", md: "20px" },
            color: "#8D8D94",
          }}>
          Welcom Back!
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: "bolder",
            color: "black",
          }}>
          {localStorage.getItem("username")}
        </Typography>
      </div>
    </div>
  );
}
