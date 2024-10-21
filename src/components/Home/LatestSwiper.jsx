import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import LatestCard from "./LatestCard";
import LoginAlert from "../Layouts/LoginAlert";
import CartAlert from "../Layouts/CartAlert";

export default function LatestSwiper() {
  const [data, setData] = useState([]);
  const [signAlert, setSignAlert] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://final-react-project-pi.vercel.app/latest`
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
      <SwiperSlide style={{ overflow: "visible" }} key={item.id}>
        <LatestCard setSignAlert={setSignAlert} item={item} />
      </SwiperSlide>
    ));
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      
      {localStorage.getItem("usertoken") ? (
        <CartAlert show={signAlert} setshow={setSignAlert} />
      ) : (
        <LoginAlert show={signAlert} setshow={setSignAlert} />
      )}
      
      <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
        <Swiper
          style={{ zIndex: 0 }}
          slidesPerView={1.4}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}>
          {data ? Cards() : "loading"}
        </Swiper>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
        <Swiper
          style={{ zIndex: 0 }}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}>
          {data ? Cards() : "loading"}
        </Swiper>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}>
          {data ? Cards() : "loading"}
        </Swiper>
      </Box>
    </Box>
  );
}
