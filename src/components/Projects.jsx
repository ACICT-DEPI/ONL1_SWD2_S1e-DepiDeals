import { Box } from "@mui/material";
import Cardd from "./Card";
import Fliter from "./Fliter";

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
      <Cardd />
      <Cardd />
      <Cardd />
    </Box>
  );
}
