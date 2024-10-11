import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Pcard({ data }) {
  const [meal, setMeal] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.recipeID}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setMeal(data.meals ? data.meals[0] : null);
        setisLoading(false);
      });
  }, [data.recipeID]);

  if (isLoading) {
    return <Box>Loading.....</Box>;
  }
  return (
    <Box
      sx={{
        boxShadow: "0px 5px 10px rgba(0,0,0,0.20)",

        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        width: { xs: "100%", lg: "48%" },
        minHeight: { xs: "120px", md: "200px" },
        maxHeight: { xs: "120px", md: "200px" },
      }}>
      <Link
        to={`/item/${meal.idMeal}`}
        style={{ width: "37%" }}
        className="link">
        <Box
          sx={{
            width: "100%",
            height: { xs: "120px", md: "200px" },
          }}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            src={meal.strMealThumb}
            alt=""
          />
        </Box>
      </Link>

      <Box
        sx={{
          minHeight: { xs: "120px", md: "200px" },
          maxHeight: { xs: "120px", md: "200px" },
          padding: "10px 5px",
          flex: 1,
        }}>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "20px" },
            fontFamily: "poppins",
            fontWeight: "bold",
          }}>
          {meal.strMeal}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "18px" },
            fontFamily: "poppins",
            color: "#FF8B48",
            fontWeight: "500",
          }}>
          Area : {meal.strArea}
        </Typography>
        <Typography
          sx={{
            overflow: "clip",
            fontSize: { xs: "10px", md: "15px" },
            fontFamily: "poppins",
            color: "#A1A0A0",
            maxHeight: { xs: "60px", md: "90px" },
          }}>
          {meal.strInstructions}
        </Typography>
      </Box>
    </Box>
  );
}
