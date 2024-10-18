import React from "react";
import "./footer.css";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const Footer = () => {
  const location = useLocation();
  let stat = location.pathname;
  stat = stat.split("/")[1];

  return (
    <Box sx={{ width: "100%", display: stat === "Start" ? "none" : "flex" }}>
      <footer style={{ overflow: "clip" }}>
        <div className="footer-info">
          <div className="footer-img">
            <img src="/footer.png" alt="Logo" />
            <p>
              Welcome to DepiDeals, your premier destination for all things
              tech! Our e-commerce website is <br />
              designed with a focus on delivering an exceptional user
              experience, featuring a sleek and modern <br />
              user interface that makes shopping for your favorite tech devices
              effortless and enjoyable.
            </p>
          </div>
          <div className="div-icon">
            <i className="fas fa-headphones" aria-hidden="true"></i>
          </div>
        </div>
        <div className="Copyright">
          &copy; {new Date().getFullYear()} DepiDeals. All rights reserved.
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
