// import React, {  useState } from "react";
// import Filter from "./Filter";

import { Box } from "@mui/material";
import TagName from "../Layouts/TagName";

export default function Home() {
  // const [filter, setFilter] = useState(null);

  return (
    <Box
      sx={{
        padding: "20px",
        // backgroundColor: "gold",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TagName name={"Top in DepiDeals"} />
    </Box>
  );
}
