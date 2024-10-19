import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TagName from "../Layouts/TagName";
import "./details.css";

export default function Details() {
  const { id } = useParams();

  // Mock product data
  const productData = {
    id: "GAMMON-001",
    Name: "Ultra HD Gaming Monitor 27",
    Category: "Monitors",
    Price: 399.99,
    Pic: "https://www.lg.com/ae_ar/images/monitors/md07514850/D-01.jpg",
    Bg: "https://cdn.cloudtek.vn/images/2023/06/08/hocmarketing-org-og-8718-score-big-savings-on-lgs-top-gaming-monitor-get-the-27gn950-b-ultragear-now.jpg",
    Gallery: [
      "https://m.media-amazon.com/images/I/61bwc5xzUoL._AC_SL1362_.jpg",
      "https://www.lg.com/ae_ar/images/monitors/md07514850/D-11.jpg",
      "https://pimcdn.sharafdg.com/images/S000409370_13?1703631963",
    ],
    Overview: "A stunning 4K monitor with vibrant colors for gaming.",
    Instock: true,
    Sale: false,
    Date: "2023-08-01",
    Purchases: 150,
  };

  // State to manage the selected image for the main display
  const [selectedImage, setSelectedImage] = useState(productData.Pic);

  // Simulate API data fetch and validate product ID (for real API use)
  // useEffect(() => {
  //   if (id !== productData.id) {
  //     // Handle error or fetch from API if needed
  //     console.error("Product not found");
  //   }
  // }, [id]);

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
      <TagName name={id} />

      <div className="productContainer">
        {/* Gallery Section */}
        <div className="gallery">
          <div id="productThumbs">
            {/* Thumbnails */}
            {productData.Gallery.map((img, index) => (
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
              alt={productData.Name}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="productCard">
          <h1 id="productTitle">{productData.Name}</h1>

          {/* Product Overview */}
          <p id="productOverview">{productData.Overview}</p>

          {/* Price */}
          <Typography
            sx={{
              color: "#414db1",
              fontSize: { xs: "20px", md: "25px" },
              fontWeight: "700",
            }}>
            ${productData.Price.toFixed(2)}
          </Typography>

          {/* Stock Status */}
          <p id="productDetails">
            {productData.Instock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Action Section */}
          <div className="productActions">
            {/* Quantity Counter */}
            <div className="counter">
              <button id="downButton">-</button>
              <input value="0" type="text" id="productInput" readOnly />
              <button id="upButton">+</button>
            </div>

            {/* Buy and Cart Buttons */}
            <button className="buy">Buy Now</button>
            <button id="cartButton">
              <img
                width="40px"
                height="50px"
                src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=000000"
                alt="cart"
              />
            </button>
          </div>

          {/* Purchase History (Optional) */}
          <p>Purchases: {productData.Purchases}</p>
        </div>
      </div>
    </Box>
  );
}
