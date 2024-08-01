import Box from "@mui/material/Box";
import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import { Link } from "react-router-dom";
import url from "../../Context/url";
export default function LList() {
  const [state, setState] = React.useState(false);
  let current = useContext(url);
  function handle(e) {
    current.seturl(e.target.className);
  }
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(!state);
  };

  const tabs = ["Home", "Projects", "Technologies", "SendMessage", "About ME"];
  const list = () => (
    <Box
      sx={{ width: 250 }} // Set width for the drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem
          sx={{
            color: "primary.main",
            fontSize: "22px",
            fontWeight: "700",
          }}>
          Options
        </ListItem>
        <Divider />

        {tabs.map((tab, index) => (
          <ListItem>
            <Link
              className={tab}
              onClick={handle}
              style={{
                color: "primary.main",
                fontSize: "18px",
                textDecoration: "none",
              }}
              to={tab}>
              {tab}
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
          top: "16px",
          right: "16px",
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
