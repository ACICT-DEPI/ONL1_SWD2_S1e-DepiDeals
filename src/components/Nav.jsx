import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Nav() {
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: "20px",
      }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          sx={{ fontSize: "20px", fontWeight: "600" }}
          value="Home"
          label="Home"
        />
        <Tab
          sx={{ fontSize: "20px", fontWeight: "600" }}
          value="Projects"
          label="Projects"
        />

        <Tab
          sx={{ fontSize: "20px", fontWeight: "600" }}
          value="Send Message"
          label="Send Message"
        />
        <Tab
          sx={{ fontSize: "20px", fontWeight: "600" }}
          value="Technologies"
          label="Technologies"
        />
      </Tabs>
    </Box>
  );
}
