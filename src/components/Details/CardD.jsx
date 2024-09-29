import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CardTop from "./CardTop";

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
        marginTop: { xs: "0", md: "20px" },
        boxShadow: "0px 5px 10px rgba(0,0,0,0.25)",
        position: "relative",
        display: "flex",
        width: "100%",
        justifyContent: "start",
      }}>
      <Box
        sx={{
          marginTop: { xs: "350px", sm: "450px", md: "0px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          minHeight: "100vh",
          direction: "rtl",
          padding: "22px",
          backgroundColor: "white",
          position: "relative",
          minWidth: { xs: "90%", md: "40%" },
          maxWidth: { xs: "100%", md: "40%" },
          zIndex: 1,
          borderRadius: { xs: "50px 50px 0px 0px", md: "0px 50px 50px 0px" },
        }}>
        <Box>
          <Box
            sx={{
              margin: "10px 0px",
              direction: "ltr",
              display: { xs: "block", md: "none" },
            }}>
            <CardTop data={data} />
          </Box>
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
            gap: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Button
            href={data.strYoutube}
            sx={{
              display: "flex",
              gap: "10px",
              backgroundColor: "#FF8B48",
              borderRadius: "10px",
              fontSize: { xs: "13px", md: "15px" },
              fontWeight: { xs: "600", md: "550" },
              flex: 1,
              height: { xs: "40px", md: "50px" },
            }}
            color="error"
            variant="contained">
            <img src="/icons/play.png" alt="" />
            Watch Recipe Video
          </Button>
          <Button
            sx={{
              backgroundColor: "#FFC5A3",
              borderRadius: "10px",
              fontSize: { xs: "13px", md: "15px" },
              fontWeight: { xs: "600", md: "550" },
              width: "40px",
              height: { xs: "40px", md: "50px" },
            }}
            color="error"
            variant="contained">
            <img src="/icons/heart.png" alt="" />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "0",
          top: "0",
          bottom: { xs: "", md: "0" },
          minWidth: { xs: "100%", md: "60%" },
          width: "120%",
          maxWidth: { xs: "150%", md: "60%" },
          minHeight: { xs: "900px", md: "" },
        }}>
        <img width={"100%"} height={"100%"} src={data.strMealThumb} alt="" />
      </Box>
    </Box>
  );
}
