import React, { useState } from "react";
import "./Filter.css";

export default function Filter({ setFilter }) {
  const [selectedTab, setSelectedTab] = useState("All");

  function handleTabClick(i) {
    setSelectedTab(i);
    if (i === "All") {
      setFilter(null);
    } else {
      setFilter(i);
    }
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
          label="Gaming"
          isSelected={selectedTab === "Gaming"}
          onClick={() => handleTabClick("Gaming")}
        />

        <Tab
          label="Monitors"
          isSelected={selectedTab === "Monitors"}
          onClick={() => handleTabClick("Monitors")}
        />
        <Tab
          label="Tablets"
          isSelected={selectedTab === "Tablets"}
          onClick={() => handleTabClick("Tablets")}
        />
        <Tab
          label="Accessories"
          isSelected={selectedTab === "Accessories"}
          onClick={() => handleTabClick("Accessories")}
        />
        <Tab
          label="Laptops"
          isSelected={selectedTab === "Laptops"}
          onClick={() => handleTabClick("Laptops")}
        />
        <Tab
          label="Consoles"
          isSelected={selectedTab === "Consoles"}
          onClick={() => handleTabClick("Consoles")}
        />
        <Tab
          label="Keyboards"
          isSelected={selectedTab === "Keyboards"}
          onClick={() => handleTabClick("Keyboards")}
        />
      </div>
    </div>
  );
}
