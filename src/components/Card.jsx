import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export default function MediaCard() {
  return (
    <Card
      sx={{
        borderRadius: "15px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "row",
        px: "5px",
        boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
        maxWidth: "100%",
        maxHeight: "100px",
        minHeight: "100px",
        height: "auto", // Automatically adjusts height based on content
      }}>
      <CardMedia
        component="img"
        sx={{
          borderRadius: "10px",
          width: 90,
          height: 80,
          alignItems: "center",
        }}
        image="/Rateo.png"
        alt="Image"
      />
      <CardContent sx={{ p: 1 }}>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500" }}
          color="primary.main"
          component="div">
          Rateorama
        </Typography>
        <Typography
          sx={{ fontSize: "11px", fontWeight: "500" }}
          color="primary.main"
          component="div">
          Category: Backend
        </Typography>
        <Typography
          sx={{ overflow: "hidden", fontSize: "9px", maxHeight: "40px" }}
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
            fontSize: "8px",
            fontWeight: "600",
          }}
          size="small">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}
