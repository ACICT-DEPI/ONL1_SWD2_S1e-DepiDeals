import { Typography } from "@mui/material";
import React from "react";

export default function TagName({ name }) {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        display: "flex",
        height: "30px",
      }}>
      <div
        style={{
          height: "100%",
          width: "7px",
          backgroundColor: "#414db1",
          color: "#414db1",
        }}>
        .
      </div>
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "25px" },
          fontWeight: { xs: "600", md: "700" },
          color: "black",
        }}>
        {name}
      </Typography>
    </div>
  );
}
