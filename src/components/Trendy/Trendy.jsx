import React, { useEffect, useState } from "react";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";
import LatestCard from "../Home/LatestCard";
import Filter from "../Latest/Filter";

export default function Latest() {
  const [filter, setFilter] = useState(null);
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
    if (filter === null) {
      return data.map((item) => <LatestCard item={item} />);
    } else {
      return data.map((item) =>
        item.Category === filter ? <LatestCard item={item} /> : null
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "20px",
        gap: "20px",
        minHeight: "100vh",
      }}>
      <TagName name={"Top in DepiDeals"} />
      <Filter setFilter={setFilter} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}>
        {Cards()}
      </Box>
    </Box>
  );
}
