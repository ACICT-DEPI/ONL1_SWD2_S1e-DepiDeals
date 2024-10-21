import { Box } from "@mui/material";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
export default function Actions() {
  function handleExit() {
    localStorage.clear();
  }
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: "5px",
        color: "#414db1",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Link to={"/Cart"} className="link">
        <ShoppingCartIcon sx={{ color: "black", fontSize: "40px" }} />
      </Link>

      {localStorage.getItem("usertoken") ? (
        <>
          {" "}
          <Link to={"/Profile"} className="link">
            <AccountCircleIcon sx={{ fontSize: "40px" }} />
          </Link>
          <Link
            onClick={() => {
              handleExit();
            }}
            to={"/Start"}
            className="link">
            <ExitToAppIcon sx={{ color: "red", fontSize: "40px" }} />
          </Link>{" "}
        </>
      ) : (
        <Link to={"/Start"} className="link">
          Signin
        </Link>
      )}
    </Box>
  );
}
