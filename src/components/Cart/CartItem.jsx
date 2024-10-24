import React, { useEffect, useState } from "react";

export default function CartItem({ id, quantity, setProducts }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function handleDelete() {
    const bodyData = {
      productID: id,
      quantity: 1,
    };
    const response = await fetch(
      "https://final-react-project-pi.vercel.app/DeleteFromCart",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `${JSON.parse(localStorage.getItem("usertoken"))}`,
        },
        body: JSON.stringify(bodyData),
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      const getCart = async () => {
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
          setProducts(cartData.items);
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
        }
      };
      getCart();
    } else {
      alert("error");
    }
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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
        <button
          onClick={handleDelete}
          className="dele"
          aria-label={`Remove ${data.Name} from cart`}>
          Remove
        </button>
      </div>
    </div>
  );
}
