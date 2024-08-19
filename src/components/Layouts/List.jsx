import Box from "@mui/material/Box";
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import { Link } from "react-router-dom";
export default function LList() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(!state);
  };

  const tabs = ["Home", "Projects", "Technologies", "SendMessage", "AboutMe"];
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem
          key={"2"}
          sx={{
            color: "primary.maintext",
            fontSize: "22px",
            fontWeight: "700",
          }}>
          Options
        </ListItem>
        <Divider />

        {tabs.map((tab) => (
          <ListItem key={"43"}>
            <Link
              key={tab}
              style={{
                color: "gray",
                fontSize: "18px",
                textDecoration: "none",
              }}
              to={tab}>
              {tab === "SendMessage" ? "Send Message" : tab}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SegmentRoundedIcon
        onClick={toggleDrawer(true)}
        sx={{
          position: "absolute",
          top: "15px",
          right: "15px",
          fontSize: 40,
          color: "primary.text",
        }}
      />

      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
