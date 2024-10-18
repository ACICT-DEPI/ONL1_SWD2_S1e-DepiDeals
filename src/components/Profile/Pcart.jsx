import React from "react";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";
import PcartItem from "./PcartItem";
import { Link } from "react-router-dom";

export default function Pcart() {
  return (
    <Box
      sx={{
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        margin: "20px 0px",
        alignItems: "start",
        justifyContent: "start",
      }}>
      <TagName name={"cart"} />

      <PcartItem />
      <PcartItem />
      <PcartItem />

      <Link
        style={{ textAlign: "right", width: "100%", color: "#414db1" }}
        className="link"
        to={"/Cart"}>
        See more
      </Link>
    </Box>
  );
}
