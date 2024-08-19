import { Box } from "@mui/material";
import Cardd from "../Common/Card";
import Fliter from "../Common/Fliter";
import { useContext, useState } from "react";
import { ApiContext } from "../../Context/ContentApi";

export default function Techs() {
  const [f, setF] = useState("All");
  const [techApi] = useContext(ApiContext);
  console.log(techApi);
  const Cards = () => {
    return techApi.map((card) => {
      if (f === "All") {
        return <Cardd key={card._id} ApiCard={card} />;
      }
      if (card.category === f) {
        return <Cardd key={card._id} ApiCard={card} />;
      }
      if ("Others" === f) {
        if (
          card.category !== "Fullstack" &&
          card.category !== "Backend" &&
          card.category !== "UI/UX" &&
          card.category !== "Frontend"
        ) {
          return <Cardd key={card._id} ApiCard={card} />;
        }
      }
      return null;
    });
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Fliter func={setF} />
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "nowrap", md: "wrap" },
          flexDirection: { xs: "column", md: "row" },
          gap: "15px",
        }}>
        <Cards />
      </Box>
    </Box>
  );
}
