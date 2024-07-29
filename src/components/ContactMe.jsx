import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

export default function ContactMe() {
  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          p: "5px",
          fontWeight: "600",
        }}>
        Contact Me
      </Typography>

      <Card
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          borderRadius: "15px",
          boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
        }}>
        <CardActions
          sx={{ display: "flex", flexDirection: "column", minWidth: "60%" }}>
          <CardContent>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "19px",
                fontWeight: "bold",
              }}
              component="div">
              Seif El-islam
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "13px",
                opacity: 0.7,
                fontWeight: "bold",
              }}
              component="div">
              MERN full-stack developer UI/UX designer
            </Typography>
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: "13px",
              }}
              component="div">
              Are you searching for a skilled MERN full-stack developer and
              UI/UX designer to bring your digital vision to life?
            </Typography>
          </CardContent>
          <Button sx={{ width: "100%" }} variant="contained" color="primary">
            Contact Me
          </Button>
        </CardActions>
        <CardActionArea
          sx={{
            minWidth: "40%",
            overflow: "hidden",
          }}>
          <CardMedia
            sx={{ objectFit: "cover", height: "100%", borderRadius: "0px" }}
            component="img"
            image="/seif.png"
            alt="seif"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
}
