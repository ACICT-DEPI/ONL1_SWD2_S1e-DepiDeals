import Box from "@mui/material/Box";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import LList from "./List";
export default function Top() {
  return (
    <>
      <Box
        sx={{
          px: "15px",
          position: "relative",
          margin: "0px",
          backgroundColor: "primary.main",
          color: "primary.text",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "215px", md: "70px" },
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "start" },
            minWidth: "100%",
          }}>
          <Box
            sx={{
              py: "10px",
              maxHeight: "120px",
              maxWidth: "180px",
              display: { xs: "block", md: "none" },
            }}>
            <img height={"100%"} width={"100%"} src="/logo.png" alt="" />
          </Box>
          <Box
            sx={{
              py: "10px",
              maxHeight: "100px",
              maxWidth: "140px",
              display: { xs: "none", md: "block" },
            }}>
            <img height={"100%"} width={"100%"} src="/name.png" alt="" />
          </Box>
        </Box>
        <LList />
      </Box>
    </>
  );
}
