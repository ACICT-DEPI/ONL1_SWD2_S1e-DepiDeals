import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function CarCard({ data }) {
  let bg = `https://seif-sync-server.vercel.app/${data.bg}`;
  bg = bg.replace(/\\/g, "/");
  console.log("Updated URL:", bg);
  return (
    <Box
      sx={{
        position: "relative",
        margin: "10px",
        minHeight: { xs: "250px", sm: "400px", md: "500px", lg: "600px" },
        maxHeight: { xs: "250px", sm: "400px", md: "500px", lg: "600px" },
        height: { xs: "250px", sm: "400px", md: "500px" },
        minWidth: { xs: "320px", sm: "400px", md: "500px" },
        padding: "0px",
        overflow: "clip",
      }}>
      <Box
        sx={{
          filter: "blur(2px)",
          minHeight: "100%",
          minWidth: "100%",
          position: "absolute",
          background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0.2) 100%), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          top: "0px",
          left: "0px",
          zIndex: -1,
        }}
      />
      <Link to={`/Projects/${data._id}`}>
        <Box
          sx={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            display: "flex",
            padding: "10px",
            backgroundColor: "rgba(35, 28, 123,0.2)",
            color: "secondary.main",
            borderRadius: "20px",
            minWidth: { xs: "80%", sm: "60%" },
            maxWidth: { xs: "80%", sm: "60%" },
            minHeight: "40%",
            maxHeight: "40%",
          }}>
          <Box sx={{ maxWidth: "60%" }}>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "16px", md: "25px", lg: "30px" },
                fontWeight: "500",
                color: "white",
              }}>
              {data.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "11px", sm: "14px", md: "18px", lg: "18px" },
              }}>
              Category: {data.category}
            </Typography>
            <Typography
              sx={{
                maxHeight: "70%",
                overflow: "clip",
                fontSize: { xs: "8px", sm: "11px", md: "13px", lg: "14px" },
              }}>
              {data.overview}
            </Typography>
          </Box>

          <Box
            sx={{
              minHeight: "90px",
              minWidth: "45%",
            }}>
            <img
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                borderRadius: "10px",
              }}
              src={`https://seif-sync-server.vercel.app/${data.pic}`}
              alt="pic"
            />
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
