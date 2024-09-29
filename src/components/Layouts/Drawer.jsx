import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Llist from "../Layouts/List";
import { Box } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
      }}>
      <Button onClick={toggleDrawer(true)}>
        <img src="/icons/list.png" alt="list" />
      </Button>

      <Drawer
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        open={open}
        onClose={toggleDrawer(false)}>
        <Llist toggleDrawer={toggleDrawer(false)} />
      </Drawer>
    </Box>
  );
}
