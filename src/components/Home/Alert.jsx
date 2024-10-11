import React from "react";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

export default function MyAlert() {
  return (
    <Alert
      sx={{
        zIndex: 3,
        position: "absolute",
        top: "40%",
        minWidth: "30%",
        fontSize: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
      variant="standard"
      severity="info">
      Sign in to add items to your favorite list!
      <Link
        style={{ marginLeft: "5px", textDecoration: "underline" }}
        className="link"
        to={"/"}>
        sign in
      </Link>
    </Alert>
  );
}
