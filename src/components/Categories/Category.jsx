import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import Card from "../Home/Card";
import { useParams } from "react-router-dom";

export default function Category() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        setData(data.meals || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cardArray = data.map((item) => <Card key={item.idMeal} item={item} />);

  return (
    <Box
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
      }}>
      <Box sx={{marginLeft:"10px", display: "flex", gap: "5px" }}>
        <Box
          sx={{
            width: "8px",
            backgroundColor: "#ff8b48",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "22px", md: "27px" },
          }}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {cardArray}
      </Box>
    </Box>
  );
}
