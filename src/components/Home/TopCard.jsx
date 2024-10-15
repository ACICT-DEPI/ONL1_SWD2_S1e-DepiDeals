import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function TopCard({ item }) {
  console.log(item);
  return (
    <Link className="link" to={`/item/${item.id}`}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "300px", md: "500px" },
        }}>
        <div
          className="topBg"
          style={{ background: `url("${item.Bg}") center/cover no-repeat` }}
        />
        .
        <Box
          sx={{
            fontSize:{xs:'12px',md:"15px"},
            padding: "10px",
            boxSizing: "border-box",
            color: "white",
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.3)",
            width: { xs: "70%", md: "60%" },
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}>
          <h2>{item.Name}</h2>
          <span>Category :</span> {item.Category} | <span>Price : </span>{" "}
          {item.Price} $<p>{item.Overview}</p>
        </Box>
      </Box>
    </Link>
  );
}
