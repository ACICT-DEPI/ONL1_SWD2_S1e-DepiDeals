import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import CardD from "./CardD";

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.meals ? data.meals[0] : null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Error: {error.message}</Alert>;
  }

  if (!data) {
    return <Typography variant="h6">No meal found.</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      {/* <Typography variant="h4">{data.strMeal}</Typography>
      <Typography variant="h6">Category: {data.strCategory}</Typography>
      <Typography variant="body1">{data.strInstructions}</Typography>
      <img
        src={data.strMealThumb}
        alt={data.strMeal}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      /> */}
      <CardD data={data} />
    </Box>
  );
}
