import React from "react";
import "./Profile.css";

import User from "./User";
import Pcart from "./Pcart";
import { Box } from "@mui/material";


export default function Profile() {
  return (
    <Box
      sx={{
        boxShadow: "3px 2px 10px rgba(0,0,0,0.25)",
        minHeight: "100vh",
        margin: { xs: "0px", md: "30px 200px" },
        padding: "40px",
      }}>
      <User />
      <Pcart />
      {/* <Addres /> */}
    </Box>
  );
}
