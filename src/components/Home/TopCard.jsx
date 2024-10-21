import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function TopCard({ item }) {
  console.log(item);
  return (
    <Link className="link" to={`/item/${item._id}`}>
      <Box
        sx={{
          zIndex: "-1",
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
            fontSize: { xs: "12px", md: "15px" },
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
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "20PX", md: "40px" }, fontWeight: "700" }}>
            {item.Name}
          </Typography>
          <span>Category :</span> {item.Category} | <span>Price : </span>{" "}
          {item.Price}
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "15PX", md: "20px" },
              fontWeight: "700",
            }}>
            {item.Overview}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
