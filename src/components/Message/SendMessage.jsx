import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";

export default function SenMessage() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [Aler, setAler] = useState("none");

  function filling() {
    if (title === "" || message === "") {
      return true;
    } else {
      return false;
    }
  }

  function handle() {
    // const t = title;
    // const m = message;
    setTitle("");
    setMessage("");
    setAler("flex");
    setTimeout(() => {
      setAler("none");
    }, 1200);
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Typography
        sx={{
          fontSize: { xs: "22px", sm: "24px", md: "30px" },
          fontWeight: "500",
        }}
        color="primary.maintext"
        component="div">
        Share Your Thoughts
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "16px", md: "17px" },
          fontWeight: "500",
        }}
        color="secondary.main"
        component="div">
        Thank you for taking the time to visit my portfolio page. I'd love to
        hear your thoughts, whether it's a message, a compliment, or any
        feedback you'd like to share. Your input is valuable, and your identity
        will remain anonymous.
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "17px", sm: "20px" }, fontWeight: "600" }}
        color="primary.main">
        Message Title
      </Typography>
      <Box sx={{ padding: "10px 0px" }}>
        <TextField
          sx={{ minWidth: "100%" }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Message Title"
          variant="outlined"
        />
      </Box>
      <Typography
        sx={{ fontSize: { xs: "17px", sm: "20px" }, fontWeight: "600" }}
        color="primary.main">
        Your Message
      </Typography>
      <Box sx={{ padding: "10px 0px" }}>
        <TextField
          sx={{ minWidth: "100%" }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          label="Your Message"
          variant="outlined"
        />
      </Box>
      <Alert sx={{ display: Aler }} severity="success">
        Message sent successfully.
      </Alert>
      <Button
        onClick={handle}
        disabled={filling()}
        sx={{
          fontSize: "15px",
          width: { xs: "100%", md: "60%" },
          margin: "0 auto",
          marginTop: "50px",
          minHeight: "50px",
        }}
        variant="contained">
        Send Message
      </Button>
    </Box>
  );
}
