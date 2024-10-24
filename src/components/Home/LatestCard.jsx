import React from "react";

import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LatestCard({ item, setSignAlert }) {
  async function handleAddToCart() {
    const bodyData = {
      productID: item._id,
      quantity: 1,
    };
    const response = await fetch(
      "https://final-react-project-pi.vercel.app/AddToCart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${JSON.parse(localStorage.getItem("usertoken"))}`,
        },
        body: JSON.stringify(bodyData),
      }
    );

    console.log(response);
    if (response.status === 200) {
      const response = await fetch(
        "https://final-react-project-wvwt.vercel.app/cart",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${JSON.parse(localStorage.getItem("usertoken"))}`,
          },
        }
      );
      if (response.ok) {
        const cartData = await response.json();
        localStorage.setItem("userCart", JSON.stringify(cartData.items));
        setSignAlert(true);
        return;
      }
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
