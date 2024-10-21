import * as React from "react";
import { Box, Button } from "@mui/material";

export default function CartAlert({ show, setshow }) {
  return (
    <Box
      sx={{
        display: show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(1,1,1,0.4)",
        zIndex: 9999,
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
          zIndex: 10000, // Also increased for inner content
          flexDirection: "column",
          gap: "10px",
        }}>
        <p className="alertFirstP">Item added to your cart successfully!</p>
        <img src="/icons/added.png" alt="Added to cart" />
        <Button
          onClick={() => setshow(null)}
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
          Done
        </Button>
      </Box>
    </Box>
  );
}
