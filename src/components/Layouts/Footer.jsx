import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer style={{ maxWidth: "100%", overflow: "clip" }}>
      <div className="footer-info">
        <div className="footer-img">
          <img src="/footer.png" alt="Logo" />
          <p>
            Welcome to DepiDeals, your premier destination for all things tech!
            Our e-commerce website is <br />
            designed with a focus on delivering an exceptional user experience,
            featuring a sleek and modern <br />
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
  );
};

export default Footer;
