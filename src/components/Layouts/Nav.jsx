import React from "react";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  let stat = location.pathname;
  stat =
    stat !== "/Home" && stat !== "/About" && stat !== "/Profile" ? "/" : stat;

  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",

        textDecoration: "none",
      }}>
      <Link className="link" to={"./Home"}>
        <div className={stat === "/Home" ? "selected" : ""}>Home</div>
      </Link>
      <Link className="link" to={"/Profile"}>
        <div className={stat === "/Profile" ? "selected" : ""}>Profile</div>
      </Link>
      <Link className="link" to={"/About"}>
        <div className={stat === "/About" ? "selected" : ""}>About</div>
      </Link>
    </Box>
  );
}
