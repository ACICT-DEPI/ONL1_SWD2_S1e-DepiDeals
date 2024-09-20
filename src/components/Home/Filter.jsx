import React, { useState } from "react";
import "./Filter.css";

export default function Filter() {
  const [selectedTab, setSelectedTab] = useState("All");

  function handleTabClick(i) {
    setSelectedTab(i);
  }

  function Tab({ label, isSelected, onClick }) {
    return (
      <div className={`tab ${isSelected ? "selected" : ""}`} onClick={onClick}>
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
          label="Beef"
          isSelected={selectedTab === "Beef"}
          onClick={() => handleTabClick("Beef")}
        />

        <Tab
          label="Chicken"
          isSelected={selectedTab === "Chicken"}
          onClick={() => handleTabClick("Chicken")}
        />
        <Tab
          label="Lamb"
          isSelected={selectedTab === "Lamb"}
          onClick={() => handleTabClick("Lamb")}
        />
        <Tab
          label="Vegetarian"
          isSelected={selectedTab === "Vegetarian"}
          onClick={() => handleTabClick("Vegetarian")}
        />
      </div>
    </div>
  );
}
