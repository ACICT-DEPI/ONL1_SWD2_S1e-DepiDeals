import React from "react";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  let stat = location.pathname;
  // stat =
  //   stat !== "/Home" && stat !== "/About" && stat !== "/Profile" ? "/" : stat;

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",

        textDecoration: "none",
      }}>
      <Link className="link" to={"./Home"}>
        <div className={stat === "/Home" ? "selected" : ""}>Home</div>
      </Link>

      <Link className="link" to={"/Trendy"}>
        <div className={stat === "/Trendy" ? "selected" : ""}>Trendy</div>
      </Link>

      <Link className="link" to={"/Latest"}>
        <div className={stat === "/Latest" ? "selected" : ""}>Latest</div>
      </Link>

      <Link className="link" to={"/About"}>
        <div className={stat === "/About" ? "selected" : ""}>About</div>
      </Link>
    </Box>
  );
}
