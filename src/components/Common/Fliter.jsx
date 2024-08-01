import React, { useState } from "react";
import "./Filter.css";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("All");

  function handleTabClick(i) {
    setSelectedTab(i);
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

function Tab({ label, isSelected, onClick }) {
  return (
    <div className={`tab ${isSelected ? "selected" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
}
