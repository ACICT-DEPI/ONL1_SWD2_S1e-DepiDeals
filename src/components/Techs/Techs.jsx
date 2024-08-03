import { Box } from "@mui/material";
import Cardd from "../Common/Card";
import Fliter from "../Common/Fliter";
import { useContext, useState } from "react";
import { TechApi } from "../../Context/TechApi";

export default function Techs() {
  const [f, setF] = useState("All");
  const TechApii = useContext(TechApi);

  const Cards = () => {
    return TechApii.map((card) => {
      if (f === "All") {
        return <Cardd ApiCard={card} />;
      }
      if (card.category === f) {
        return <Cardd ApiCard={card} />;
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
