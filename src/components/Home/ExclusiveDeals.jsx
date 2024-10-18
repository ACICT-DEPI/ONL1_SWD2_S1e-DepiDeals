import React, { useEffect, useState } from "react";
import TagName from "../Layouts/TagName";
import { Box } from "@mui/material";
import LatestCard from "./ExclusiveCard";

export default function ExclusiveDeals() {
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

        setData(fetchedData.slice(3, 6));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const Cards = () => {
    return data.map((item) => <LatestCard key={item._id} item={item} />);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "35%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: "10px",
      }}>
      <TagName name={"Exclusive"} />
      {Cards()}
    </Box>
  );
}
