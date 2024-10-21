import React from "react";

import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function LatestCard({ item, setSignAlert }) {
  function handleAddToCart() {
    if (localStorage.getItem("userCart")) {
      const Cart = localStorage.getItem("userCart")
        ? JSON.parse(localStorage.getItem("userCart"))
        : [];

      const itemIndex = Cart.findIndex((e) => e.productID === item._id);
      console.log(itemIndex);
      if (itemIndex !== -1) {
        Cart[itemIndex] = {
          productID: item._id,
          quantity: +Cart[itemIndex].quantity + 1,
        };
      } else {
        Cart.push({
          productID: item._id,
          quantity: 1,
        });
      }
      localStorage.setItem("userCart", JSON.stringify(Cart));
      setSignAlert(true);
      return;
    }
    setSignAlert(true);
  }

  return (
    <>
      <div className="latestCard">
        <Link style={{ height: "80%", width: "100%" }} to={`/item/${item._id}`}>
          <img src={item.Pic} width={"100%"} height={"100%"} alt="" />
        </Link>
        <Typography sx={{ height: "30px" }}> {item.Name}</Typography>
        <Button
          sx={{ width: "100%", borderRadius: "0px 0px 10px 10px" }}
          type="button"
          onClick={() => handleAddToCart()}
          variant="contained">
          Add to Cart
        </Button>
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
    </>
  );
}
