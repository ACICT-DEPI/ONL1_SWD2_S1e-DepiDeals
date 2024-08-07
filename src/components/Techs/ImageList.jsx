import React, { useState } from "react";
import "./g.css";
import { Typography } from "@mui/material";
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/saka.png",
      alt: "Image 1",
    },
    {
      src: "/saka.png",
      alt: "Image 1",
    },
    {
      src: "/saka.png",
      alt: "Image 1",
    },
    {
      src: "/saka.png",
      alt: "Image 1",
    },
    {
      src: "/Link.png",
      alt: "Image 1",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
          paddingBottom: "10px",
        }}>
        Project Gallery
      </Typography>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleImageClick(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-container">
          <div className="modal-backdrop" onClick={handleCloseModal} />
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
