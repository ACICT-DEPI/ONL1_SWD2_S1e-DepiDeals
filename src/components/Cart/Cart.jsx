import React from "react";
import "./cart.css";

const products = [
  {
    id: 1,
    name: "Product1",
    price: 500,
    quantity: 1,
    image: "s.jpg",
  },
  {
    id: 2,
    name: "Product2",
    price: 750,
    quantity: 2,
    image: "s.jpg",
  },
  {
    id: 3,
    name: "Product3",
    price: 500,
    quantity: 3,
    image: "s.jpg",
  },
];
export default function Cart() {
  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <main style={{ padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div className="tagRec"></div>
        <h1 id="head">Cart</h1>
      </div>
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

        {products.map((product) => (
          <div className="row" key={product.id}>
            <div className="item">
              <div className="product-container">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <p className="product-name">{product.name}</p>
              </div>
            </div>
            <div className="item">
              <p>${product.price}</p>
            </div>
            <div className="item">
              <p>{product.quantity}</p>
            </div>
            <div className="item">
              <p>${product.price * product.quantity}</p>
            </div>
            <div className="item">
              <button className="dele">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <div className="wrapper">
          <h3>Cart Total</h3>
          <div className="col-item">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="col-item">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="col-item">
            <span>Total</span>
            <span id="total-of-items">${total}</span>
          </div>
          <button className="latestButton">Proceed to checkout</button>
        </div>
      </div>
    </main>
  );
}
