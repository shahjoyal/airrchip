import React, { useState } from "react";


function Tabs() {
  const [activeTab, setActiveTab] = useState("Assigned");

  return (
    <div className="tabs">
      <button
        className={activeTab === "Assigned" ? "active" : ""}
        onClick={() => setActiveTab("Assigned")}
      >
        Assigned <span className="count">18</span>
      </button>
      <button
        className={activeTab === "Unassigned" ? "active" : ""}
        onClick={() => setActiveTab("Unassigned")}
      >
        Unassigned <span className="count">18</span>
      </button>
      <button
        className={activeTab === "Drafts" ? "active" : ""}
        onClick={() => setActiveTab("Drafts")}
      >
        Drafts <span className="count">3</span>
      </button>
    </div>
  );
}

export default Tabs;
