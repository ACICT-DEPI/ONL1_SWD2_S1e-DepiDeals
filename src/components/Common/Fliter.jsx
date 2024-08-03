import React, { useContext, useState } from "react";
import "./Filter.css";
import Th from "../../Context/useTheme";

export default function Filter({ func }) {
  const [selectedTab, setSelectedTab] = useState("All");
  const [ss] = useContext(Th);
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
        <Tab
          label="FULLSTACK"
          isSelected={selectedTab === "Fullstack"}
          onClick={() => handleTabClick("Fullstack")}
        />
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
        {/* <Tab
          label="Others"
          isSelected={selectedTab === "Others"}
          onClick={() => handleTabClick("Others")}
        /> */}
      </div>
    </div>
  );
}
