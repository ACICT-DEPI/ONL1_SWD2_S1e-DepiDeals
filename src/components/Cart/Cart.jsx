import React, { useEffect, useState } from "react";
import "./cart.css";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userCart = localStorage.getItem("userCart");
    setProducts(userCart ? JSON.parse(userCart) : []);
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <Box sx={{ width: "100%", display: "flex" }}>
        <TagName name={"Cart"} />
      </Box>
      <div className="table">
        <div className="main-row">
          <div className="item">
            <h2>Product</h2>
          </div>
          <div className="item">
            <h2>Price</h2>
          </div>
          <div className="item">
            <h2>Quantity</h2>
          </div>
          <div className="item">
            <h2>Total</h2>
          </div>
          <div className="item">
            <h2>Options</h2>
          </div>
        </div>
        {products.length === 0 ? (
          <div>Your cart is empty. Add products to your cart.</div>
        ) : (
          products.map((product) => (
            <CartItem
              setProducts={setProducts}
              key={product.productID}
              id={product.productID}
              quantity={product.quantity}
            />
          ))
        )}
      </div>
      <CartTotal products={products} />
    </main>
  );
}
