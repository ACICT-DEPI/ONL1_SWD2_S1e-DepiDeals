import Box from "@mui/material/Box";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BrushIcon from "@mui/icons-material/Brush";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        px: "15px",
        position: "relative",
        margin: "0px",
        padding: "10px 20px",
        backgroundColor: "primary.main",
        color: "primary.text",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        minHeight: "150px",
        gap: { xs: "10px", sm: "50px", md: "100px" },
      }}>
      <Box
        sx={{
          py: "10px",
          maxHeight: { xs: "80px", sm: "120px" },
          maxWidth: { xs: "100px", sm: "180px" },
        }}>
        <img height={"100%"} width={"100%"} src="/logo.png" alt="Logo" />
      </Box>
      <Box
        sx={{
          py: "10px",
          maxHeight: "120px",
          maxWidth: "40%",
          minWidth: "40%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "start",
          gap: "10px 5px",
        }}>
        <a
          style={{
            color: "white",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="https://www.linkedin.com/in/seif-el-islam-92ba931a8/">
          <LinkedInIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px", md: "15px", lg: "20px" },
            }}>
            Seif El-islam
          </Typography>
        </a>

        <a
          style={{
            color: "white",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="https://github.com/CoroSempi">
          <GitHubIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px", md: "15px", lg: "20px" },
            }}>
            Seif El-islam
          </Typography>
        </a>
        <span
          style={{
            color: "white",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <MailOutlineIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px", md: "15px", lg: "20px" },
            }}>
            Corosempi@gmail.com
          </Typography>
        </span>
        <span
          style={{
            color: "white",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <LocalPhoneIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px", md: "15px", lg: "20px" },
            }}>
            01150103029
          </Typography>
        </span>
        <a
          style={{
            color: "white",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="https://www.figma.com/@SeifElislam">
          <BrushIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px", md: "15px", lg: "20px" },
            }}>
            Seif El-islam
          </Typography>
        </a>
      </Box>
    </Box>
  );
}
