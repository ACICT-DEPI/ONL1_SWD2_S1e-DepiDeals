import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Nav() {
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100%",
        paddingTop: "20px",
      }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="Home"
          label={
            <Link style={{ textDecoration: "none" }} to={"./Home"}>
              Home
            </Link>
          }
        />

        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="Projects"
          label={
            <Link style={{ textDecoration: "none" }} to={"./Projects"}>
              Projects
            </Link>
          }
        />

        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="Technologies"
          label={
            <Link style={{ textDecoration: "none" }} to={"./Technologies"}>
              Technologies{" "}
            </Link>
          }
        />

        <Tab
          sx={{ fontSize: "15px", fontWeight: "600" }}
          value="Send Message"
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
