import React, { useContext, useState } from "react";
import "./Filter.css";
import Th from "../../Context/useTheme";
import { useLocation } from "react-router-dom";

export default function Filter({ func }) {
  const [selectedTab, setSelectedTab] = useState("All");
  const [ss] = useContext(Th);
  const location = useLocation();
  const stat = location.pathname;
  function handleTabClick(i) {
    setSelectedTab(i);
    func(i);
  }

  function Tab({ label, isSelected, onClick }) {
    return (
      <div
        style={{ color: ss === "dark" ? "white" : "" }}
        className={`tab ${isSelected ? "selected" : ""}`}
        onClick={onClick}>
        {label}
      </div>
    );
  }
  return (
    <div className="tabs-container">
      <div className="tabs">
        <Tab
          label="All"
          isSelected={selectedTab === "All"}
          onClick={() => handleTabClick("All")}
        />

        {stat === "/Projects" ? (
          <Tab
            label="FULLSTACK"
            isSelected={selectedTab === "Fullstack"}
            onClick={() => handleTabClick("Fullstack")}
          />
        ) : (
          ""
        )}

        <Tab
          label="Backend"
          isSelected={selectedTab === "Backend"}
          onClick={() => handleTabClick("Backend")}
        />
        <Tab
          label="Frontend"
          isSelected={selectedTab === "Frontend"}
          onClick={() => handleTabClick("Frontend")}
        />
        <Tab
          label="UI/UX"
          isSelected={selectedTab === "UI/UX"}
          onClick={() => handleTabClick("UI/UX")}
        />
        {stat === "/Technologies" ? (
          <Tab
            label="Others"
            isSelected={selectedTab === "Others"}
            onClick={() => handleTabClick("Others")}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
