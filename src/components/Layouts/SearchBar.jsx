import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchBar({ phone }) {
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchData = async (term) => {
    if (!term) return; // Do not fetch if the term is empty
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }

      const result = await response.json();
      setData((result.meals || []).slice(0, 8));
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  const debouncedFetchData = debounce(fetchData, 300);

  useEffect(() => {
    debouncedFetchData(searchTerm);
  }, [debouncedFetchData,searchTerm]);

  const cardArray = data.map((item) => (
    <Box key={item.idMeal} sx={{ width: "100%" }}>
      <Link
        style={{ display: "flex", justifyContent: "space-between" }}
        className="link"
        to={`/item/${item.idMeal}`}>
        <Typography>{item.strMeal}</Typography>
        <Typography sx={{ color: "#FF8B48", fontWeight: "bold" }}>
          {item.strCategory}
        </Typography>
      </Link>
    </Box>
  ));

  return (
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{
          display: searching === false ? "none" : "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          bottom: 0,
        }}
      />

      <Box sx={{ position: "relative", flex: 1 }}>
        <Box
          sx={{
            display: { xs: phone ? "flex" : "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            position: "relative",
            height: { xs: "30px", md: "40px" },
            marginBottom: "10px",
            fontSize: { xs: "18px", md: "20px" },
            zIndex: 2,
          }}>
          <input
            style={{
              width: "100%",
              borderRadius: "20px",
              fontSize: "inherit",
              padding: "10px",
              border: "none",
              height: "100%",
              backgroundColor: searching ? "white" : "#F1EFEF",
              color: "#787777",
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setSearching(true)}
            onBlur={() => {
              setTimeout(() => setSearching(false), 150);
            }}
            placeholder="Search for recipes"
          />
          <SearchIcon
            sx={{
              position: "absolute",
              right: "10px",
              top: { xs: "-5px", md: "0px" },
              fontSize: "40px",
              color: "gray",
            }}
          />
        </Box>

        <Box
          sx={{
            gap: "15px",
            marginTop: "-10px",
            backgroundColor: "white",
            display: {
              xs: phone ? (searching ? "flex" : "none") : "none",
              md: searching ? "flex" : "none",
            },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            position: "absolute",
            fontSize: { xs: "18px", md: "20px" },
            zIndex: 1,
            padding: "20px 10px",
            borderRadius: "0px 0px 20px 20px",
            boxShadow: "3px 0px 10px rgba(0,0,0,0.25)",
          }}>
          {cardArray}
        </Box>
      </Box>
    </Box>
  );
}
