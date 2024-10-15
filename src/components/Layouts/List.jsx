import Box from "@mui/material/Box";
import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import CabinIcon from "@mui/icons-material/Cabin";
import InfoIcon from "@mui/icons-material/Info";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function LList({ toggleDrawer }) {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingLeft: "20px",
        width: "300px",
      }}>
      <img src="/logo.png" alt="logo" />
      <List
        sx={{
          gap: "10px",
          flexDirection: "column",
          display: { xs: "flex", lg: "none" },
        }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "26px",
            marginTop: "10px",
            color: "#8D8D94",
          }}>
          General
        </Typography>
        {/* ========================================================= */}
        <Link to={"/Home"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <CabinIcon sx={{ fontSize: "35px" }} />
            <ListItemText>
              <div className="llink"> Home</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
        <Link to={"/Trendy"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <WhatshotIcon sx={{ fontSize: "35px" }} />
            <ListItemText>
              <div className="llink"> Trendy</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
        <Link to={"/Latest"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <AccessAlarmIcon sx={{ fontSize: "35px" }} />
            <ListItemText>
              <div className="llink"> Latest</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
        <Link to={"/About"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <InfoIcon sx={{ fontSize: "35px" }} />
            <ListItemText>
              <div className="llink"> About us</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
      </List>
      {/* =================================================================================== */}
      <List
        sx={{
          gap: "10px",
          flexDirection: "column",
          display: { xs: "flex", lg: "none" },
        }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "26px",
            marginTop: "10px",
            color: "#8D8D94",
          }}>
          Personal
        </Typography>
        {/* ========================================================= */}
        <Link to={"/Profile"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <AccountCircleIcon sx={{ fontSize: "35px" }} />
            <ListItemText>
              <div className="llink"> Profile</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
        <Link to={"/About"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <ShoppingCartIcon sx={{ fontSize: "35px" }} />
            <ListItemText>
              <div className="llink"> Cart</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
        <Link to={"/Home"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <ExitToAppIcon sx={{ fontSize: "35px" }} />
            <ListItemText>
              <div className="llink"> SignOut</div>
            </ListItemText>
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
}
