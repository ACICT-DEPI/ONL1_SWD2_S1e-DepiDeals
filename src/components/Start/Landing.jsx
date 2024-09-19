import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Landing({ handleStart }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: { xs: "30px 30px 0px 0px", md: "0px" },
          backgroundColor: "white",
          gap: { xs: "10px", md: "20px" },
          position: "absolute",
          top: { xs: "auto", md: 0 },
          bottom: { xs: 0, md: "auto" },
          left: 0,

          width: { xs: "100%", md: "40%" },
          height: { xs: "40%", md: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: { xs: "22px", md: "30px" },
          fontWeight: "600",
        }}>
        <Box sx={{ margin: { xs: "10px", md: "30px" }, textAlign: "center" }}>
          welcome to
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              fontFamily: "Almond",
              color: "#FF8B48",
              display: "inline-block",
              paddingLeft: "10px",
            }}>
            BITEOPIA
          </Typography>
          , good recipes awaits ...
        </Box>
        <Link style={{ width: "85%" }} to={"/Home"}>
          <Button
            sx={{
              backgroundColor: "black",
              borderRadius: "100px",
              fontSize: { xs: "18px", md: "20px" },
              fontWeight: { xs: "600", md: "550" },
              width: "100%",
              height: { xs: "55px", md: "65px" },
            }}
            color="error"
            variant="contained">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "45px", md: "55px" },
                height: { xs: "45px", md: "55px" },
                backgroundColor: "white",
                borderRadius: "100%",
                position: "absolute",
                top: "5px",
                right: "5px",
                rotate: "-90deg",
              }}>
              <ArrowDownwardIcon
                sx={{ color: "black", fontSize: { xs: "35px", md: "50px" } }}
              />
            </Box>
            Get started
          </Button>
        </Link>
        <Button
          onClick={() => handleStart("signin")}
          sx={{
            backgroundColor: "white",
            color: "#FF8B48",
            borderRadius: "100px",
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: { xs: "600", md: "550" },
            width: "85%",
            height: { xs: "55px", md: "65px" },
            boxShadow: "0px 5px 10px  #888888",
          }}
          color="error"
          variant="contained">
          SIGN IN
        </Button>
      </Box>
    </>
  );
}
