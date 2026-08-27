import { useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import InsightOverview from "./InsightOverview";
import SkillBreakdown from "./SkillBreakdown";
import ActionPlan from "./ActionPlan";

import "../../styles/AIInsights/AIInsights.css";

export default function AIInsights() {
  const [activeSection, setActiveSection] = useState("Overview");

  return (
    <div className="ai-insights-shell">

      <Sidebar
        activeItem="AI insights"
        variant="mock-history-sidebar"
      />

      <main className="ai-insights-main">

        {/* TOP BAR */}

        <header className="ai-insights-topbar">

          <div />

          <div className="ai-insights-topbar-right">

            <button
              type="button"
              className="ai-notification"
            >
              ♧
              <span />
            </button>

            <div className="ai-streak">
              <span>Current streak</span>
              <strong>5 days 🔥</strong>
            </div>

          </div>

        </header>


        {/* MAIN CONTENT */}

        <section className="ai-insights-content">

          {/* HEADER */}

          <div className="ai-insights-header">

            <div className="ai-title-block">

              <h1>AI Insights</h1>

              <p>
                Personalized feedback from your mock
                interviews and practice sessions.
              </p>

            </div>

            <div className="ai-updated">

              <span>AI ANALYSIS</span>

              <strong>Updated today</strong>

            </div>

          </div>


          {/* CONTENT */}

          {activeSection === "Overview" && (
            <InsightOverview
              activeTab={activeSection}
              setActiveTab={setActiveSection}
            />
          )}

          {activeSection === "Skill Breakdown" && (
            <SkillBreakdown
              activeTab={activeSection}
              setActiveTab={setActiveSection}
            />
          )}

          {activeSection === "Action Plan" && (
            <ActionPlan
              activeTab={activeSection}
              setActiveTab={setActiveSection}
            />
          )}

        </section>

      </main>

    </div>
  );
}