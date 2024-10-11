import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Pcard from "./Pcard";

export default function Profile() {
  const [res, setRes] = useState("");

  const getFavs = async () => {
    const response = await fetch(
      "https://biteopia-server.vercel.app/favlist",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      setRes(data);
      localStorage.setItem("favlist", JSON.stringify(data.FavList));
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
    }
  };
  useEffect(() => {
    console.log("Profile component mounted");
    getFavs();
  }, []);

  const Pcards = () => {
    if (res.FavList) {
      if (res.FavList.length > 0) {
        return res.FavList.map((item, index) => (
          <Pcard data={item} key={index} />
        ));
      } else {
        return null;
      }
    }
  };

  return (
    <Box sx={{ padding: "0px 15px", marginBottom: "20px" }}>
      <Box>
        <Typography sx={{ color: "#8D8D94", fontFamily: "poppins" }}>
          Welcome Back!
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { xs: "20px", md: "28px" },
            fontFamily: "poppins",
          }}>
          @{res.username}
        </Typography>
      </Box>

      <Box
        sx={{
          marginBottom: "10px",
          marginTop: "30px",
          display: "flex",
          gap: "5px",
        }}>
        <Box
          sx={{
            width: "8px",
            backgroundColor: "#ff8b48",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "20px", md: "27px" },
          }}>
          Your favourite recipes
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "start",
          gap: "20px",
          minWidth: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
        }}>
        {Pcards() || "feel free to add any recpies here!"}
      </Box>
    </Box>
  );
}
