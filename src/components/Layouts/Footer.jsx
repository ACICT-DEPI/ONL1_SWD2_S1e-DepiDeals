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
        backgroundColor: "primary.main",
        color: "primary.text",
        padding: { xs: "20px", md: "30px" },
        display: "flex",
        flexDirection: { xs: "column", md: "coulmn" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: "20px", md: "0" },
      }}>
      <Box
        sx={{
          maxWidth: { xs: "100px", sm: "180px" },
        }}>
        <img height={"100%"} width={"100%"} src="/logo.png" alt="Logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: "10px", md: "20px" },
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        <a
          style={{
            color: "white",
            display: "flex",
            gap: "3px",
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
