import { Box } from "@mui/material";
import Cardd from "../Common/Card";
import Fliter from "../Common/Fliter";


export default function Projects() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Fliter />
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "nowrap", md: "wrap" },
          flexDirection: { xs: "column", md: "row" },
          gap: "15px",
        }}>
        <Cardd />
        <Cardd />
        <Cardd />
      </Box>
    </Box>
  );
}
