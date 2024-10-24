import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TagName from "../Layouts/TagName";
import "./details.css";
import CartAlert from "../Layouts/CartAlert";
import LoginAlert from "../Layouts/LoginAlert";

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [inputN, setinputN] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [signAlert, setSignAlert] = useState(null);

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
        setSelectedImage(fetchedData[0].Pic);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  async function handleAddToCart() {
    const bodyData = {
      productID: data._id,
      quantity: inputN,
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
        setinputN(0);
        return;
      }
      setSignAlert(true);
    }
  }

  if (data === null) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <Typography variant="h4" component="h2">
          loading
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        position: "relative",
      }}>
      <TagName name={data.Name} />

      <div className="productContainer">
        {/* Gallery Section */}
        <div className="gallery">
          <div id="productThumbs">
            {/* Thumbnails */}
            {data.Gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width="100%"
                height="100%"
                onClick={() => setSelectedImage(img)} // Set main image on click
                style={{ cursor: "pointer", border: "1px solid #ccc" }}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="productMainPic">
            <img
              id="productMainPic"
              width="100%"
              height="100%"
              src={selectedImage}
              alt={data.Name}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="productCard">
          <h1 id="productTitle">{data.Name}</h1>

          {/* Product Overview */}
          <p id="productOverview">{data.Overview}</p>

          {/* Price */}
          <Typography
            sx={{
              color: "#414db1",
              fontSize: { xs: "20px", md: "25px" },
              fontWeight: "700",
            }}>
            ${data.Price.toFixed(2)}
          </Typography>

          {/* Stock Status */}
          <p id="productDetails">
            {data.Instock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Action Section */}
          <div className="productActions">
            {/* Quantity Counter */}
            <div className="counter">
              <button
                onClick={() => {
                  if (inputN > 1) {
                    setinputN(inputN - 1);
                  }
                }}
                id="downButton">
                -
              </button>
              <input
                value={inputN}
                onChange={(e) => {
                  setinputN(e.target.value());
                }}
                type="text"
                id="productInput"
                readOnly
              />
              <button
                onClick={() => {
                  if (inputN < 10) {
                    setinputN(inputN + 1);
                  }
                }}
                id="upButton">
                +
              </button>
            </div>

            {/* Buy and Cart Buttons */}
            <button className="buy">Buy Now</button>
            <button
              onClick={() => {
                handleAddToCart();
              }}
              id="cartButton">
              <img
                width="40px"
                height="50px"
                src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=000000"
                alt="cart"
              />
            </button>
          </div>

          {/* Purchase History (Optional) */}
          <p>Purchases: {data.Purchases}</p>
          <img src="/det.png" width={"100%"} alt="" />
        </div>
      </div>

      {localStorage.getItem("usertoken") ? (
        <CartAlert show={signAlert} setshow={setSignAlert} />
      ) : (
        <LoginAlert show={signAlert} setshow={setSignAlert} />
      )}
    </Box>
  );
}
