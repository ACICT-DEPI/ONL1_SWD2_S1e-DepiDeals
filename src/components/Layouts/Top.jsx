import Box from "@mui/material/Box";
import React, { useContext } from "react";
import LList from "./List";
import url from "../../Context/url";
import { Typography } from "@mui/material";
export default function Top() {
  let current = useContext(url);
  let stat = current.url1;
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          px: "15px",
          position: stat === "Home" ? "" : "sticky",
          top: 0,
          margin: "0px",
          backgroundColor: "primary.main",
          color: "primary.text",
          justifyContent: stat === "Home" ? "center" : "start",
          alignItems: "center",
          minHeight: stat === "Home" ? "215px" : "70px",
          boxShadow: "0px 7px 10px 0px rgba(0, 0, 0, 0.25)",
          zIndex: 1, // Ensure the nav bar is on top of other elements
        }}>
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: "500",
            display: stat === "Home" ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {stat === "SendMessage" ? "Send Message" : stat}
        </Typography>
        <Box
          sx={{
            display: stat === "Home" ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "100%",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              py: "10px",
              maxHeight: "120px",
              maxWidth: "180px",
            }}>
            <img height={"100%"} width={"100%"} src="/logo.png" alt="" />
          </Box>
          <Typography
            sx={{ textAlign: "center", fontSize: "13px", maxWidth: "350px" }}>
            Welcome my friend, Enter my virtual haven!, Where ideas flourish and
            possibilities abound.
          </Typography>
        </Box>
        <LList />
      </Box>
    </>
  );
}
