import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import CardD from "./CardD";
import CardTop from "./CardTop";

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
    <Box
      sx={{
        margin: { xs: "0", md: "20px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        position: "relative",
      }}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          zIndex: 1,
          top: "20px",
          left: "20px",
        }}>
        <Link to={"/home"}>
          <img src="/icons/back.png" alt="r" />
        </Link>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <CardTop data={data} />
      </Box>
      <CardD data={data} />
    </Box>
  );
}
