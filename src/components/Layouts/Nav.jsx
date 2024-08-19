import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import MySwitch from "../Common/Switch";

export default function Nav() {
  const location = useLocation();
  let stat = location.pathname;
  stat =
    stat !== "/Home" &&
    stat !== "/Projects" &&
    stat !== "/Technologies" &&
    stat !== "/SendMessage"
      ? "/Home"
      : stat;

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100%",
        paddingTop: "20px",
        position: "relative",
      }}>
      <Box sx={{ position: "absolute", top: "15px", right: "90px" }}>
        <MySwitch />
      </Box>
      <Tabs value={stat}>
        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="/Home"
          label={
            <Link style={{ textDecoration: "none" }} to={"./Home"}>
              Home
            </Link>
          }
        />

        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="/Projects"
          label={
            <Link style={{ textDecoration: "none" }} to={"./Projects"}>
              Projects
            </Link>
          }
        />

        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="/Technologies"
          label={
            <Link style={{ textDecoration: "none" }} to={"./Technologies"}>
              Technologies{" "}
            </Link>
          }
        />

        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="/SendMessage"
          label={
            <Link style={{ textDecoration: "none" }} to={"./SendMessage"}>
              {" "}
              Send Message{" "}
            </Link>
          }
        />
      </Tabs>
    </Box>
  );
}
