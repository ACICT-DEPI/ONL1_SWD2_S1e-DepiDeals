import Card from "@mui/material/Card";
import React, { useContext } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import Th from "../../Context/useTheme";
export default function ContactMe() {
  const [ss] = useContext(Th);
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "80%" },
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "40px",
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
          height: "230px",
          maxWidth: "100%",
          minWidth: "100%",
          display: "flex",
          flexDirection: "row",
          borderRadius: { xs: "15px", md: "0px" },
          boxShadow:
            ss === "dark"
              ? "0px 2px 10px 0px rgba(255, 255, 255, 0.15)"
              : "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            minWidth: "100%",
            maxWidth: "100%",
          }}>
          <CardContent>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "20px", sm: "22px" },
                fontWeight: "bold",
              }}
              component="div">
              Seif El-islam
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "15px", sm: "17px" },
                opacity: 0.7,
                fontWeight: "bold",
              }}
              component="div">
              MERN full-stack developer UI/UX designer
            </Typography>
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: { xs: "13px", sm: "15px" },
              }}
              component="div">
              Are you searching for a skilled MERN full-stack developer and
              UI/UX designer to bring your digital vision to life?
            </Typography>
          </CardContent>

          <Button
            href="SendMessage"
            sx={{ minWidth: "70%", margin: "0px auto" }}
            variant="contained"
            color="primary">
            Contact Me
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
