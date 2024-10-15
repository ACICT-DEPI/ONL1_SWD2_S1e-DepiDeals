import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import LatestCard from "./LatestCard";

export default function LatestSwiper() {
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
        <LatestCard item={item} />
      </SwiperSlide>
    ));
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}>
        {data ? Cards() : "loading"}
      </Swiper>
    </Box>
  );
}
