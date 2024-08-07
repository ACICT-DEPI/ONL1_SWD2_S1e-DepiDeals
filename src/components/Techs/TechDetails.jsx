import { useParams } from "react-router-dom";
import { TechApi } from "../../Context/TechApi";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ImageList from "./ImageList";

export default function TechDetails() {
  const { id } = useParams();
  const TechApii = useContext(TechApi);
  const tech = TechApii.find((card) => card.id === id);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: { xs: "10px", md: "20px" },
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Box>
        <Typography
          sx={{ fontSize: { xs: "25px", md: "30px" }, fontWeight: "500" }}
          color="primary.maintext"
          component="div">
          {tech.title}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", md: "20px" }, fontWeight: "500" }}
          color="primary.main"
          component="div">
          Category: {tech.category}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",

          fontWeight: "600",
        }}>
        Overview
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "15px", md: "20px" }, fontWeight: "500" }}
        color="secondary.main"
        component="div">
        {tech.overview}
      </Typography>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "250px", sm: "400px", md: "500px", lg: "600px" },
          maxHeight: { xs: "250px", sm: "400px", md: "500px", lg: "600px" },
          height: { xs: "250px", sm: "400px", md: "500px" },
          minWidth: "100%",
          maxWidth: "100%",
          padding: "0px",
          overflow: "clip",
        }}>
        <Box
          sx={{
            filter: "blur(2px)",
            minHeight: "100%",
            minWidth: "100%",
            position: "absolute",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0.2) 100%),url(/11.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "0px",
            left: "0px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: { xs: "120px", sm: "140px", md: "200px" },
            height: { xs: "120px", sm: "140px", md: "200px" },
            bottom: "10px",
            right: "10px",
          }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={tech.pic}
            alt="pic"
          />
        </Box>
      </Box>
      <ImageList />
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}>
        Tools and Technologies
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "15px", md: "18px" }, fontWeight: "500" }}
        color="secondary.main">
        - Figma
      </Typography>

      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}>
        Link
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "15px", md: "18px" }, fontWeight: "500" }}
        color="secondary.main">
        <a style={{ color: "inherit" }} href="www.google.com">
          {tech.title}
        </a>
      </Typography>

      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}>
        Notes
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "15px", md: "18px" }, fontWeight: "500" }}
        color="secondary.main">
        <ul style={{ color: "inherit", margin: "0px" }} href="www.google.com">
          <li>fgerwfrewgregerwgregrewr</li>
          <li>fgerwfrewgregerwgregrewr</li>
          <li>fgerwfrewgregerwgregrewr</li>
        </ul>
      </Typography>
    </Box>
  );
}
