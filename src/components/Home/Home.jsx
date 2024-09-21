import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SearchBar from "../Layouts/SearchBar";
import { Box, Typography } from "@mui/material";
import Card from "./Card";

export default function Home() {
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          filter === null
            ? "https://www.themealdb.com/api/json/v1/1/search.php?s=w"
            : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`
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
  }, [filter]);

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
        alignItems: "center",
      }}>
      <Box
        sx={{
          marginBottom: "20px",
          minWidth: "100%",
          display: { xs: "block", md: "none" },
        }}>
        <Typography sx={{ color: "#A1A0A0", fontSize: "20px" }}>
          Welcome to Biteopia
        </Typography>
        <Typography sx={{ fontWeight: "700", fontSize: "30px" }}>
          what's in your mind for today
        </Typography>
      </Box>

      <Box sx={{ minWidth: "100%", display: { xs: "block", md: "none" } }}>
        <SearchBar phone={true} />
      </Box>

      <Filter setFilter={setFilter} />

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {cardArray}
      </Box>
    </Box>
  );
}
