import * as React from "react";

import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function LoginAlert({ show, setshow }) {
  const nav = useNavigate();
  return (
    <Box
      sx={{
        display: show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(1,1,1,0.4)",
        zIndex: 5,
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      }}>
      <Box
        sx={{
          position: "relative",
          maxWidth: "400px",
          maxHeight: "400px",
          width: { xs: "95%", sm: "80%" },
          height: { xs: "50%", sm: "80%" },
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9,
          flexDirection: "column",
          gap: "10px",
        }}>
        <p className="alertFirstP">Please SignIn first!</p>
        <p className="alertSecP">
          Exclusive Deals Await You Your Satisfaction, Our Priority!
        </p>
        <img src="/icons/AlertLogo.png" alt="" />
        <Button
          onClick={() => {
            nav("/Start");
          }}
          variant="contained"
          sx={{
            mt: { xs: "20px", sm: "40px" },
            height: "50px",
            width: "90%",
            backgroundColor: "#414DB1",
            fontSize: "15px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}>
          Sign In
        </Button>

        <button
          onClick={() => {
            setshow(null);
          }}
          className="closeButton">
          <CloseIcon sx={{ fontSize: "40px", color: "#414DB1" }} />
        </button>
      </Box>
    </Box>
  );
}
