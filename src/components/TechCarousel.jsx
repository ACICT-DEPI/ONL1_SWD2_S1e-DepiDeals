import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTheme } from "@mui/material/styles";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const items = [
  { id: 1, title: "Item 1", image: "/Rateo.png" },
  { id: 2, title: "Item 2", image: "/Rateo.png" },
  { id: 3, title: "Item 3", image: "/logo192.png" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.3,
  },
};

export default function TechCarousel() {
  const theme = useTheme();

  return (
    <div
      style={{ position: "relative", maxWidth: "100vw", overflow: "hidden" }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={false}
        draggable={true}
        swipeable={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        initialSlide={0}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              margin: "0px 5px",
              width: "100%",
              maxWidth: "275px",
              height: "205px",
              borderRadius: "15px",
              overflow: "hidden",
              position: "relative",
            }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(to top, ${theme.palette.primary.main}90, transparent)`,
                borderRadius: "15px",
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}>
              <div style={{ margin: "10px" }}>
                <div>
                  <span>Node.js</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2px",
                    fontWeight: "400",
                  }}>
                  <AccessTimeFilledIcon />
                  <span style={{ fontSize: "12px" }}>+2 Year Experience</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
