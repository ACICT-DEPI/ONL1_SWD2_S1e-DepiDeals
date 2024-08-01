import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export default function MediaCard({ p }) {
  return (
    <Card
      sx={{
        borderRadius: { xs: "15px", md: "0px" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "row",
        gap:"2px",
        px: { xs: "5px", md: "0px" },
        boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
        maxWidth: { xs: "100%", md: "450px" },
        maxHeight: { xs: "100px", md: "175px" },
        minHeight: { xs: "100px", md: "175px" },
        height: "auto", 
      }}>
      <CardMedia
        component="img"
        sx={{
          borderRadius: { xs: "10px", md: "0px" },
          maxWidth: { xs: "90px", md: "100%" },
          minWidth: { xs: "90px", md: "175px" },
          height: { xs: "80px", md: "100%" },
          alignItems: "center",
        }}
        image={p || "/rateo.png"}
        alt="Image"
      />
      <CardContent sx={{ p: 1 }}>
        <Typography
          sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "500" }}
          color="black"
          component="div">
          Rateorama
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "11px", md: "12px" }, fontWeight: "500" }}
          color="primary.main"
          component="div">
          Category: Backend
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            fontSize: { xs: "9px", md: "10px" },
            maxHeight: { xs: "40px", md: "60px" },
          }}
          color="secondary.main">
          Rateorama is an exceptional platform dedicated to rating movies,
          series, and TV shows. It offers a unique opportunity for individuals
          to express their.... .
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "primary.main",
            fontSize: { xs: "8px", md: "10px" },
            fontWeight: "600",
          }}
          size="small">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}
