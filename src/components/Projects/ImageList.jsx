import React, { useState } from "react";
import "./g.css";
import { Typography } from "@mui/material";
const ImageGallery = ( {gallery}) => {
  const [selectedImage, setSelectedImage] = useState(null);


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
        {gallery.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleImageClick(image)}>
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-container">
          <div className="modal-backdrop" onClick={handleCloseModal} />
          <div className="modal-content">
            <img src={selectedImage} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
