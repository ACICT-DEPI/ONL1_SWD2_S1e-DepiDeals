import React, { useEffect, useState } from "react";

export default function CartTotal({ products }) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const pricePromises = products.map(async (product) => {
          const response = await fetch(
            `https://final-react-project-pi.vercel.app/products/${product.productID}`
          );
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          const fetchedData = await response.json();
          return { id: product.productID, price: fetchedData[0].Price };
        });

        const priceData = await Promise.all(pricePromises);
        const priceMap = priceData.reduce((acc, { id, price }) => {
          acc[id] = price;
          return acc;
        }, {});

        setPrices(priceMap);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrices();
  }, [products]);

  const total = products.reduce(
    (sum, product) => sum + (prices[product.productID] || 0) * product.quantity,
    0
  );

  return (
    <div className="cart-total">
      <div className="wrapper">
        <h3>Cart Total</h3>
        <div className="col-item">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="col-item">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="col-item">
          <span>Total</span>
          <span id="total-of-items">${total.toFixed(2)}</span>
        </div>
        <button className="latestButton">Proceed to checkout</button>
      </div>
    </div>
  );
}
