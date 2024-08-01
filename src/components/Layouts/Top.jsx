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
          position: "relative",
          margin: "0px",
          backgroundColor: "primary.main",
          color: "primary.text",
          justifyContent: stat === "Home" ? "center" : "start",
          alignItems: "center",
          minHeight: stat === "Home" ? "215px" : "70px",
        }}>
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: "500",
            display: stat === "Home" ? "none" : "flex",
            justifyContent:"center",
            alignItems:"center",
          }}>
          {stat === "SendMessage" ? "Send Message" : stat}
        </Typography>
        <Box
          sx={{
            display: stat === "Home" ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "100%",
          }}>
          <Box
            sx={{
              py: "10px",
              maxHeight: "120px",
              maxWidth: "180px",
            }}>
            <img height={"100%"} width={"100%"} src="/logo.png" alt="" />
          </Box>
        </Box>
        <LList />
      </Box>
    </>
  );
}
