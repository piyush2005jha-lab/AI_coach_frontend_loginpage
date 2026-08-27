import { aiInsightsData } from "../../data/aiInsightsData";

import "../../styles/AIInsights/InsightOverview.css";

export default function InsightOverview({
  activeTab,
  setActiveTab,
}) {
  const {
    readiness,
    stats,
    overview,
    strengths,
    weaknesses,
  } = aiInsightsData;

  const tabs = [
    "Overview",
    "Skill Breakdown",
    "Action Plan",
  ];

  return (
    <div className="insight-overview">

      {/* =========================
          STATS
      ========================= */}

      <div className="ai-stats">

        {stats.map((stat) => (

          <div
            className="ai-stat"
            key={stat.label}
          >

            <div className="ai-stat-icon">
              {stat.icon}
            </div>

            <div className="ai-stat-content">

              <div className="ai-stat-label">
                {stat.label}
              </div>

              <div className="ai-stat-value">
                {stat.value}
              </div>

              <div
                className={`ai-stat-change ${stat.type}`}
              >
                {stat.change}
              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          TABS
      ========================= */}

      <div className="ai-insights-tabs">

        {tabs.map((tab) => (

          <button
            key={tab}
            type="button"
            className={
              activeTab === tab
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab(tab)
            }
          >
            {tab}
          </button>

        ))}

      </div>


      {/* =========================
          CONTENT GRID
      ========================= */}

      <div className="ai-overview-grid">

        {/* READINESS */}

        <div className="readiness-card">

          <div className="ai-card-heading">

            <div>

              <span>
                READINESS INDEX
              </span>

              <h2>
                Interview readiness
              </h2>

            </div>

            <strong>
              LIVE
            </strong>

          </div>


          <div className="readiness-body">

            <div className="large-readiness-ring">

              <svg viewBox="0 0 100 100">

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="ring-background"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="ring-progress"
                  strokeDasharray="264"
                  strokeDashoffset={
                    264 -
                    (264 * readiness) / 100
                  }
                />

              </svg>

              <div>

                <strong>
                  {readiness}%
                </strong>

                <span>
                  READY
                </span>

              </div>

            </div>


            <div className="readiness-copy">

              <h3>
                {overview.title}
              </h3>

              <p>
                {overview.description}
              </p>

              <div className="readiness-improvement">

                <strong>
                  {overview.improvement}
                </strong>

                <span>
                  {overview.period}
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* STRENGTHS */}

        <div className="insight-list-card">

          <div className="ai-card-heading">

            <div>

              <span>
                WHAT YOU DO WELL
              </span>

              <h2>
                Strengths
              </h2>

            </div>

            <span className="positive-mark">
              ↑
            </span>

          </div>


          <div className="insight-list">

            {strengths.map((item, index) => (

              <div
                className="insight-list-item"
                key={item}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* WEAKNESSES */}

        <div className="insight-list-card">

          <div className="ai-card-heading">

            <div>

              <span>
                AREAS TO IMPROVE
              </span>

              <h2>
                Weaknesses
              </h2>

            </div>

            <span className="warning-mark">
              !
            </span>

          </div>


          <div className="insight-list">

            {weaknesses.map((item, index) => (

              <div
                className="insight-list-item"
                key={item}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* =========================
            SKILL BREAKDOWN
        ========================= */}

        <div className="overview-skill-card">
          <SkillMiniPreview />
        </div>


        {/* =========================
            ACTION PLAN
        ========================= */}

        <div className="overview-action-card">
          <ActionMiniPreview />
        </div>

      </div>

    </div>
  );
}


/* =========================================
   MINI SKILL PREVIEW
========================================= */

function SkillMiniPreview() {
  return (
    <>

      <div className="mini-heading">

        <div>

          <span>
            PERFORMANCE ANALYSIS
          </span>

          <h2>
            Skill Breakdown
          </h2>

        </div>

        <span className="mini-heading-side">
          Last 12 mocks
        </span>

      </div>


      <div className="mini-skills">

        {[
          ["JavaScript", 91, "excellent"],
          ["React", 87, "good"],
          ["System Design", 79, "good"],
          ["Data Structures", 72, "average"],
          ["Dynamic Programming", 58, "weak"],
          ["Behavioral", 84, "good"],
        ].map(([name, score, type]) => (

          <div
            className="mini-skill"
            key={name}
          >

            <span className="mini-skill-name">
              {name}
            </span>

            <div className="mini-bar">

              <div
                className={`mini-bar-fill ${type}`}
                style={{
                  width: `${score}%`,
                }}
              />

            </div>

            <strong>
              {score}%
            </strong>

          </div>

        ))}

      </div>

    </>
  );
}


/* =========================================
   MINI ACTION PREVIEW
========================================= */

function ActionMiniPreview() {
  return (
    <>

      <div className="mini-heading">

        <div>

          <span>
            AI RECOMMENDATIONS
          </span>

          <h2>
            Your next best moves
          </h2>

        </div>

      </div>


      <div className="mini-actions">

        <div className="mini-action">

          <span>01</span>

          <div>
            <strong>
              Strengthen Dynamic Programming
            </strong>

            <p>
              Practice 5 DP problems
            </p>
          </div>

        </div>


        <div className="mini-action">

          <span>02</span>

          <div>
            <strong>
              Improve System Design depth
            </strong>

            <p>
              Complete a system design mock
            </p>
          </div>

        </div>


        <div className="mini-action">

          <span>03</span>

          <div>
            <strong>
              Polish behavioral answers
            </strong>

            <p>
              Practice 3 responses
            </p>
          </div>

        </div>

      </div>

    </>
  );
}