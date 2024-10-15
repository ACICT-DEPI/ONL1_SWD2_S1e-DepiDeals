import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import TopCard from "./TopCard";

export default function TopSwiper() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://seif-sync-server.vercel.app/Depi/products`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const Cards = () => {
    return data.map((item) => (
      <SwiperSlide key={item.id}>
        <TopCard item={item} />
      </SwiperSlide>
    ));
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Swiper
        slidesPerView={1}
        pagination={{ type: "bullets", clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper">
        {data ? Cards() : "loading"}
      </Swiper>
    </Box>
  );
}
