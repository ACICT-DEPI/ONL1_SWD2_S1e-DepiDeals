import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveCard({ item }) {
  return (
    <div className="ExclusiveCard">
      <Link
        to={`/item/${item._id}`}
        style={{ width: "40%", height: "100%" }}
        className="link">
        <img height={"100%"} width={"100%"} src={item.Pic} alt="" />
      </Link>

      <div className="latestCardDetails">
        <Typography>{item.Name}</Typography>
        <Typography sx={{ fontSize: "13px" }}>
          <span>Category :</span> {item.Category} | <span>Price : </span>
          {item.Price}$
        </Typography>
        <Typography sx={{ fontSize: "11px", color: "#6E6E6E" }}>
          {item.Overview}
        </Typography>
      </div>
      
      {item.Sale ? (
        <Typography
          sx={{
            color: "white",
            backgroundColor: "red",
            padding: "1px 10px",
            borderRadius: "20px",
            position: "absolute",
            top: "5px",
            right: "5px",
            fontSize: "12px",
          }}>
          Sale
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
}
