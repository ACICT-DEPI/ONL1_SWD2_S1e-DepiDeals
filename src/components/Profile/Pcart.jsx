import React from "react";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";
import PcartItem from "./PcartItem";
import { Link } from "react-router-dom";

export default function Pcart() {
  const Cart = localStorage.getItem("userCart")
    ? JSON.parse(localStorage.getItem("userCart"))
    : [];
  const items = () => {
    return Cart.map((item, index) => (
      <PcartItem id={item.productID} quantity={item.quantity} />
    ));
  };

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
      {Cart.length === 0 ? (
        <div>Your cart is empty. Add products to your cart.</div>
      ) : (
        items()
      )}
      <Link
        style={{
          textAlign: "right",
          width: "100%",
          color: "#414db1",
          fontSize: "15px",
        }}
        className="link"
        to={"/Cart"}>
        See more
      </Link>
    </Box>
  );
}
