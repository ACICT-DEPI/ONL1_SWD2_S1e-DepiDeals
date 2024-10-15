import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Llist from "../Layouts/List";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
      }}>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ fontSize: "50px" }} />
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
