import { Box } from "@mui/material";
import Cardd from "./Card";
import Typography from "@mui/material/Typography";

export default function Latest() {
  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "20px",
          p: "5px",
          fontWeight: "600",
        }}>
        My Latest Projects
      </Typography>
      <Cardd />
      <Cardd />
      <Cardd />
    </Box>
  );
}
