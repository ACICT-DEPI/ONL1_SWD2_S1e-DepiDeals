import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ImageList from "./ImageList";
import { ApiContext } from "../../Context/ContentApi";

export default function ProjectDetails() {
  const { id } = useParams();
  const [, proApi] = useContext(ApiContext);
  const pro = proApi.find((card) => card._id === id);
  let bg = `https://seif-sync-server.vercel.app/${pro.bg}`;
  bg = bg.replace(/\\/g, "/");
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
          {pro.title}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "15px", md: "18px" }, fontWeight: "500" }}
          color="primary.main"
          component="div">
          Category: {pro.category}
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
        sx={{
          fontSize: { xs: "15px", sm: "16px", md: "17px" },
          fontWeight: "500",
        }}
        color="secondary.main"
        component="div">
        {pro.overview}
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
            background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0.2) 100%),url(${bg})`,
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
            bottom: { xs: "10px", md: "30px" },
            right: { xs: "10px", md: "30px" },
          }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={`https://seif-sync-server.vercel.app/${pro.pic}`}
            alt="pic"
          />
        </Box>
      </Box>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}>
        Tools and Technologies
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "16px", md: "17px" },
          fontWeight: "500",
        }}
        color="secondary.main">
        <ul style={{ margin: "0px" }}>
          {pro.tools.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </Typography>

      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}>
        Links
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "16px", md: "17px" },
          fontWeight: "500",
        }}
        color="secondary.main">
        <ul style={{ margin: "0px" }}>
          <li>
            <a
              style={{ color: "inherit" }}
              href="https://mui.com/material-ui/react-list/">
              {pro.title}
            </a>
          </li>
        </ul>
      </Typography>
      <ImageList gallery={pro.gallery} />
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          fontWeight: "600",
        }}>
        Notes
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "16px", md: "17px" },
          fontWeight: "500",
        }}
        color="secondary.main">
        <ul style={{ margin: "0px" }}>
          {pro.notes.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </Typography>
    </Box>
  );
}
