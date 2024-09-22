import React from "react";
import { Box, Typography } from "@mui/material";


export default function CardD({ data }) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return (
    <Box
      sx={{
        marginTop: "20px",
        boxShadow: "0px 5px 10px rgba(0,0,0,0.25)",
        position: "relative",
        display: "flex",
        width: "100%",
        justifyContent: "end",
     
      }}>
      <Box
        sx={{
          direction: "rtl",
          overflow: "auto",
          padding: "22px",
          backgroundColor: "white",
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          minWidth: "40%",
          maxWidth: "40%",
          zIndex: 1,
          borderRadius: "0px 50px 50px 0px",
        }}>
        <Typography
          sx={{
            direction: "ltr",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "15px", md: "22px" },
          }}>
          Ingredients
        </Typography>

        <Box
          sx={{
            marginTop: "10px",
            gap: "2px",
            display: "flex",
            flexWrap: "wrap",
            color: "#A1A0A0",
            fontFamily: "Poppins",
            fontWeight: "550",
            fontSize: { xs: "15px", md: "18px" },
          }}>
          {ingredients.map((ingredient, index) => (
            <Typography
              sx={{
                direction: "ltr",
                minWidth: "48%",
                color: "#A1A0A0",
                fontFamily: "Poppins",
                fontWeight: "550",
                fontSize: { xs: "15px", md: "14px" },
              }}
              key={index}>
              {" "}
              • {ingredient}
            </Typography>
          ))}
        </Box>

        <Typography
          sx={{
            direction: "ltr",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "15px", md: "22px" },
          }}>
          How to prepare
        </Typography>

        <Box
          sx={{
            direction: "ltr",
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "100%",
          }}>
          <Typography
            sx={{
              color: "#A1A0A0",
              fontFamily: "Poppins",
              fontWeight: "550",
              fontSize: { xs: "15px", md: "14px" },
            }}>
            {data.strInstructions}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          minWidth: "70%",
          maxWidth:"70%",
          minHeight: "100%",
        }}>
        <img width={"100%"} height={"100%"} src={data.strMealThumb} alt="" />
      </Box>
    </Box>
  );
}
