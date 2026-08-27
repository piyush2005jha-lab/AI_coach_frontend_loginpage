import { useMemo, useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import HistoryStats from "./HistoryStats";
import HistoryFilters from "./HistoryFilters";
import MockHistoryTable from "./MockHistoryTable";

import { mockHistoryData } from "../../data/mockHistoryData";

import "../../styles/MockHistory/MockHistory.css";

export default function MockHistory() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Mocks");

  const filteredMocks = useMemo(() => {
    let result = [...mockHistoryData];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (mock) =>
          mock.title.toLowerCase().includes(query) ||
          mock.role.toLowerCase().includes(query) ||
          mock.topics.toLowerCase().includes(query)
      );
    }

    if (activeTab === "High Score") {
      result = result.filter(
        (mock) => mock.score >= 80
      );
    }

    if (activeTab === "Low Score") {
      result = result.filter(
        (mock) => mock.score < 70
      );
    }

    if (activeTab === "Recent") {
      result = result.slice(0, 5);
    }

    return result;
  }, [search, activeTab]);


  return (
    <div className="mock-history-shell">

      {/* =========================
          SIDEBAR
      ========================= */}

      <Sidebar
        activeItem="Mock history"
        variant="mock-history-sidebar"
      />


      {/* =========================
          MAIN
      ========================= */}

      <main className="mock-history-main">

        {/* TOP BAR */}

        <header className="mock-history-topbar">

          <div />

          <div className="mock-history-topbar-right">

            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
            >
              ♧
              <span />
            </button>

            <div className="streak-small">
              <span>Current streak</span>
              <strong>5 days 🔥</strong>
            </div>

          </div>

        </header>


        {/* CONTENT */}

        <section className="mock-history-content">

          {/* PAGE HEADER */}

          <div className="history-page-header">

            <div className="history-title-block">
              <h1>Mock History</h1>

              <p>
                Review your past mock interviews and
                track your progress over time.
              </p>
            </div>


            <div className="history-header-actions">

              <div className="history-search">

                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search mocks..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>


              <button
                type="button"
                className="new-mock-button"
              >
                <span>+</span>
                New Mock
              </button>

            </div>

          </div>


          {/* STATS */}

          <HistoryStats />


          {/* FILTERS */}

          <HistoryFilters
            search={search}
            setSearch={setSearch}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />


          {/* TABLE */}

          <MockHistoryTable
            mocks={filteredMocks}
          />


          {/* PAGINATION */}

          <div className="history-pagination">

            <button type="button">
              ‹
            </button>

            <button
              type="button"
              className="active"
            >
              1
            </button>

            <button type="button">
              2
            </button>

            <button type="button">
              3
            </button>

            <button type="button">
              ›
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}