import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SearchBar from "../Layouts/SearchBar";
import { Box, Typography } from "@mui/material";
import Card from "./Card";

export default function Home() {
  const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=p")
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          setData(data.meals || []); // Handle case where meals might be null
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const cardArray = data.map((item) => (
      <Card key={item.idMeal} item={item} />
    ));

    return <>{cardArray}</>;
  };

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
      <Filter />

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {Cards()}
      </Box>
    </Box>
  );
}
