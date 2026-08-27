import { useState } from "react";
import "../../styles/MockHistory/HistoryFilters.css";
export default function HistoryFilters({
  search,
  setSearch,
  activeTab,
  setActiveTab,
}) {
  const [role, setRole] = useState("All Roles");

  const tabs = [
    "All Mocks",
    "Recent",
    "High Score",
    "Low Score",
  ];

  return (
    <div className="history-filter-area">

      <div className="history-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`history-tab ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="history-filter-right">

        <div className="history-select">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>All Roles</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full Stack</option>
            <option>DSA</option>
            <option>System Design</option>
          </select>
        </div>

        <button
          type="button"
          className="history-filter-button"
          aria-label="Filter"
        >
          ◇
        </button>

      </div>
    </div>
  );
}