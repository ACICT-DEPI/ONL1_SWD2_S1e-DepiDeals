import React, { useEffect, useState } from "react";

export default function CartItem({ id, quantity, setProducts }) {
  const [data, setData] = useState(null);
  function handleDelete() {
    let Cart = localStorage.getItem("userCart")
      ? JSON.parse(localStorage.getItem("userCart"))
      : [];

    Cart = Cart.filter((e) => {
      return e.productID !== id;
    });

    localStorage.setItem("userCart", JSON.stringify(Cart));
    setProducts(Cart);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://final-react-project-pi.vercel.app/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const fetchedData = await response.json();
        setData(fetchedData[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row" key={data._id}>
      <div className="item">
        <div className="product-container">
          <img className="product-image" src={data.Pic} alt={data.Name} />
          <p className="product-name">{data.Name}</p>
        </div>
      </div>
      <div className="item">
        <p>${data.Price}</p>
      </div>
      <div className="item">
        <p>{quantity}</p>
      </div>
      <div className="item">
        <p>${(data.Price * quantity).toFixed(2)}</p>
      </div>
      <div className="item">
        <button onClick={() => handleDelete()} className="dele">
          Remove
        </button>
      </div>
    </div>
  );
}
