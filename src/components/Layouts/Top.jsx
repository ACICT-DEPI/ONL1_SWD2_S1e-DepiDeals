import Box from "@mui/material/Box";
import React, { useContext } from "react";
import LList from "./List";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Th from "../../Context/useTheme";
import MySwitch from "../Common/Switch";
export default function Top() {
  const location = useLocation();
  const stat = location.pathname;
  const [ss] = useContext(Th);
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          px: "15px",
          position: stat === "/Home" || stat === "/" ? "" : "sticky",
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
            display: stat === "/Home" ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {stat.slice(1) === "SendMessage" ? "Send Message" : stat.slice(1)}
        </Typography>

        <Box
          sx={{
            display: stat === "/Home" || stat === "/" ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "100%",
            minHeight: "240px",
            maxHeight: "240px",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              py: "10px",
              maxHeight: "120px",
              minHeight: "120px",
              maxWidth: "180px",
            }}>
            <img
              height={"100%"}
              width={"100%"}
              src={ss === "light" ? "/logo.png" : "logoDark.png"}
              alt=""
            />
          </Box>
          <Typography
            sx={{
              color: "primary.maintext",
              textAlign: "center",
              fontSize: "13px",
              maxWidth: "350px",
            }}>
            Welcome my friend, Enter my virtual haven!, Where ideas flourish and
            possibilities abound.
          </Typography>
        </Box>
        <Box sx={{ display: stat === "/Home" || stat === "/" ? "" : "none" }}>
          <MySwitch />
        </Box>

        <LList />
      </Box>
    </>
  );
}
