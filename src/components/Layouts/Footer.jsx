import React from "react";
import "./footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  let stat = location.pathname;
  stat = stat.split("/")[1];
  return (
    <footer style={{ display: stat === "Start" ? "none" : "" }}>
      <div className="footer-info">
        <div className="footer-img">
          <img src={"/footer.png"} alt="Logo" />
          <p className="footer-p">
            Welcome to DepiDeals, your premier destination for all things
            tech!Our <br /> e-commerce website is designed with a focus on
            delivering an exceptional user experience,
            <br />
            featuring a sleek and modern user interface that makes shopping for
            your favorite tech devices effortless.
          </p>
        </div>
        <div class="div-icon">
          <i class="fas fa-headphones"></i>
        </div>
      </div>
      <div className="Copyright">
        &copy; {new Date().getFullYear()} DepiDeals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
