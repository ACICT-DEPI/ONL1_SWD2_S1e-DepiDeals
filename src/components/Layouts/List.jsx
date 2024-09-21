import Box from "@mui/material/Box";
import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function LList({ toggleDrawer }) {
  return (
    <Box
      sx={{
        
        boxShadow: "3px 0px 10px rgba(0,0,0,0.25)",
        paddingTop: "20px",
        paddingLeft: "10px",
        width: { xs: "300px", sm: "400px", md: "100%" },
        minHeight: "150%",
      }}>
      <Box
        sx={{
          fontSize: "25px",
          margin: "10px",
          fontWeight: "600",
          textAlign: "left",
          width: "90%",
        }}>
        welcome to{" "}
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },

            fontFamily: "Almond",
            color: "#FF8B48",
            display: "inline-block",
          }}>
          BITEOPIA
        </Typography>
        , good recipes awaits ...
      </Box>

      <List sx={{ display: { xs: "", lg: "none" } }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "21px",
            marginBottom: "10px",
            color: "#8D8D94",
          }}>
          General
        </Typography>
        {/* ========================================================= */}
        <Link to={"/Home"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <ListItemIcon>
              <img src="/icons/Home.png" alt="" />
            </ListItemIcon>
            <ListItemText>
              <div className="llink"> Home</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
        <Link to={"/About"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <ListItemIcon>
              <img src="/icons/About.png" alt="" />
            </ListItemIcon>
            <ListItemText>
              <div className="llink"> About</div>
            </ListItemText>
          </ListItemButton>
        </Link>
        {/* ========================================================= */}
        <Link to={"/"} className="llink">
          <ListItemButton onClick={() => toggleDrawer()}>
            <ListItemIcon>
              <img src="/icons/signout.png" alt="" />
            </ListItemIcon>
            <ListItemText>
              <div className="llink"> Sign Out</div>
            </ListItemText>
          </ListItemButton>
        </Link>
      </List>

      <List>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "21px",
            marginBottom: "10px",
            color: "#8D8D94",
          }}>
          Personal
        </Typography>
        {/* ========================================================= */}
        <ListItemButton onClick={() => toggleDrawer()}>
          <ListItemIcon>
            <img src="/icons/heart.png" alt="" />
          </ListItemIcon>
          <ListItemText>
            <Link className="llink">My favourite recipes</Link>
          </ListItemText>
        </ListItemButton>
      </List>
      {/* ============================================================================================================ */}
      <List>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "21px",
            marginBottom: "10px",
            color: "#8D8D94",
          }}>
          Categories
        </Typography>
        {/* ========================================================= */}

        <ListItemButton onClick={() => toggleDrawer()}>
          <ListItemIcon>
            <img src="/icons/mis.png" alt="" />
          </ListItemIcon>
          <ListItemText>
            <Link className="llink"> Miscellaneous</Link>
          </ListItemText>
        </ListItemButton>

        {/* ========================================================= */}
        <ListItemButton onClick={() => toggleDrawer()}>
          <ListItemIcon>
            <img src="/icons/chicken.png" alt="" />
          </ListItemIcon>
          <ListItemText>
            <Link className="llink"> Chicken</Link>
          </ListItemText>
        </ListItemButton>
        {/* ========================================================= */}
        <ListItemButton onClick={() => toggleDrawer()}>
          <ListItemIcon>
            <img src="/icons/lamb.png" alt="" />
          </ListItemIcon>
          <ListItemText>
            <Link className="llink"> Lamb</Link>
          </ListItemText>
        </ListItemButton>
        {/* ========================================================= */}
        <ListItemButton onClick={() => toggleDrawer()}>
          <ListItemIcon>
            <img src="/icons/vege.png" alt="" />
          </ListItemIcon>
          <ListItemText>
            <Link className="llink"> Vegetarian</Link>
          </ListItemText>
        </ListItemButton>
        {/* ========================================================= */}
        <ListItemButton onClick={() => toggleDrawer()}>
          <ListItemIcon>
            <img src="/icons/beef.png" alt="" />
          </ListItemIcon>
          <ListItemText>
            <Link className="llink">Beef</Link>
          </ListItemText>
        </ListItemButton>
      </List>
      {/* ============================================================================================================ */}
      <List sx={{ display: { xs: "none", lg: "block" } }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "21px",
            marginBottom: "10px",
            color: "#8D8D94",
          }}>
          General
        </Typography>
        {/* ========================================================= */}
        <ListItemButton onClick={() => toggleDrawer()}>
          <ListItemIcon>
            <img src="/icons/signout.png" alt="" />
          </ListItemIcon>
          <ListItemText>
            <Link to={"/"} className="llink">
              Sign Out
            </Link>
          </ListItemText>
        </ListItemButton>
      </List>
      {/* ============================================================================================================ */}
    </Box>
  );
}
