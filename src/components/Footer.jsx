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
        maxWidth: "100%",
        px: "15px",
        position: "relative",
        margin: "0px",
        padding: "10px 20px",
        backgroundColor: "primary.main",
        color: "primary.text",
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "start",
        alignItems: "center",
        minHeight: "150px",
        gap: "20px",
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
          maxHeight: { xs: "120px", md: "none", lg: "120px" },
          maxWidth: "60%",
          minWidth: "60%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "start",
          gap: "10px 0px",
        }}>
        <a
          style={{
            color: "white",
            display: "flex",
            gap: "3px",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="https://www.linkedin.com/in/seif-el-islam-92ba931a8/">
          <LinkedInIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
            }}>
            Seif El-islam
          </Typography>
        </a>

        <a
          style={{
            color: "white",
            display: "flex",
            gap: "3px",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="https://github.com/CoroSempi">
          <GitHubIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
            }}>
            Seif El-islam
          </Typography>
        </a>
        <span
          style={{
            color: "white",
            display: "flex",
            gap: "3px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <MailOutlineIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
            }}>
            Corosempi@gmail.com
          </Typography>
        </span>
        <span
          style={{
            color: "white",
            display: "flex",
            gap: "3px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <LocalPhoneIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
            }}>
            01150103029
          </Typography>
        </span>
        <a
          style={{
            color: "white",
            display: "flex",
            gap: "3px",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="https://www.figma.com/@SeifElislam">
          <BrushIcon />
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
            }}>
            Seif El-islam
          </Typography>
        </a>
      </Box>
    </Box>
  );
}
