import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";
// import { Link } from "react-router-dom";

export default function SearchBar({ phone }) {
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(["Loading"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://final-react-project-wvwt.vercel.app/search/?keyword=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const Res = () => {
    return data.map((item) => (
      <div className="searchItem" key={item.id}>
        <Link key={item.id} style={{ all: "inherit" }} to={`/item/${item.id}`}>
          {item.Name}
        </Link>
      </div>
    ));
  };

  return (
    <Box sx={{ width: { xs: "100%", md: "80%" }, position: "relative" }}>
      <Box
        sx={{
          display: phone
            ? { xs: "flex", sm: "none" }
            : { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "relative",
          height: "50px",
          fontSize: { xs: "18px", md: "20px" },
          zIndex: 2,
        }}>
        <input
          className="searchInput"
          style={{
            zIndex: 4,
            backgroundColor: searching ? "white" : "#F1EFEF",
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSearching(true)}
          onBlur={() => {
            setTimeout(() => setSearching(false), 150);
          }}
          placeholder="Search For Products "
        />
        <SearchIcon
          sx={{
            zIndex: 4,
            position: "absolute",
            right: "10px",
            fontSize: "40px",
            color: "gray",
          }}
        />

        <div
          className="searchRes"
          style={{
            display: searching ? "block" : "none",
          }}>
          {Res()}
        </div>
      </Box>
    </Box>
  );
}
