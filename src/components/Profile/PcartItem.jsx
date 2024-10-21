import React, { useEffect, useState } from "react";

export default function PcartItem({ id, quantity }) {
  const [data, setData] = useState(null);

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
    <div className="cartItem">
      <img className="cartItemPic" src={data.Pic} alt="" />
      <span>{data.Name}</span>
      <span>{quantity}</span>
      <span>{data.Price * quantity}$</span>
    </div>
  );
}
