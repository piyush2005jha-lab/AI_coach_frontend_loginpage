import { Link } from "react-router-dom";

import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsCards from "./AnalyticsCards";
import PerformanceOverview from "./PerformanceOverview";
import CategoryBreakdown from "./CategoryBreakdown";
import ImprovementPlan from "./ImprovementPlan";
import WeakAreas from "./WeakAreas";
import InterviewStats from "./InterviewStats";


function AnalyticsSidebar() {
  const menu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Interviews", path: "/interview" },
    { label: "Analytics", path: "/analytics" },
    { label: "Mock history", path: "/mock-history" },
    { label: "AI insights", path: "/ai-insights" },
    { label: "Achievements", path: "/achievements" },
    { label: "Resources", path: "/resources" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="analytics-sidebar">

      {/* BRAND */}
      <Link
        to="/dashboard"
        className="analytics-brand"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="analytics-brand-logo">P</div>
        <span>Prepzo</span>
      </Link>


      {/* PROFILE */}
      <div className="analytics-profile">
        <h3>Piyush Jha</h3>

        <p>B.Tech · AI / ML specialisation</p>

        <div className="analytics-pro">
          PRO MEMBER
        </div>

        <div className="analytics-profile-line" />
      </div>


      {/* NAVIGATION */}
      <nav className="analytics-nav">

        {menu.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`analytics-nav-item ${
              item.label === "Analytics" ? "active" : ""
            }`}
            style={{ textDecoration: "none" }}
          >
            <span className="analytics-nav-icon">
              {item.label === "Analytics" ? "◆" : "◇"}
            </span>

            <span>{item.label}</span>
          </Link>
        ))}

      </nav>


      {/* SIDEBAR BOTTOM */}
      <div className="analytics-sidebar-bottom">
        <div className="analytics-sparkle">
          ✦
        </div>
      </div>

    </aside>
  );
}



function Copilot() {
  return (
    <aside className="analytics-copilot">

      {/* COPILOT USER */}
      <div className="copilot-user">

        <div className="copilot-avatar">
          P
        </div>

        <div>
          <h3>Prepzo Copilot</h3>

          <span>
            <i />
            Insights ready
          </span>
        </div>

      </div>


      {/* AI INSIGHTS */}
      <div className="copilot-section">

        <div className="copilot-title">
          AI INSIGHTS
        </div>


        <div className="copilot-card green">

          <h4>
            <span>●</span>
            System Design is your edge
          </h4>

          <p>
            Score consistently 10–15% above your other tracks — you're ready
            for harder difficulty here.
          </p>

        </div>


        <div className="copilot-card yellow">

          <h4>
            <span>●</span>
            ML fundamentals dipping
          </h4>

          <p>
            Last 3 sessions in this track scored below your average. Revisit
            attention mechanisms and backprop basics.
          </p>

        </div>


        <div className="copilot-card red">

          <h4>
            <span>●</span>
            Eye contact fading late-session
          </h4>

          <p>
            Camera analysis shows a consistent drop after question 3. Try a
            short break before longer mocks.
          </p>

        </div>

      </div>



      {/* TOP QUESTION TYPES */}
      <div className="copilot-section question-section">

        <div className="copilot-title">
          TOP QUESTION TYPES
        </div>


        <div className="question-item">

          <div className="question-number">
            01
          </div>

          <div>
            <strong>
              Scalability trade-offs
            </strong>

            <small>
              6 sessions · avg 82%
            </small>
          </div>

        </div>


        <div className="question-item">

          <div className="question-number">
            02
          </div>

          <div>
            <strong>
              Tree/graph traversal
            </strong>

            <small>
              5 sessions · avg 69%
            </small>
          </div>

        </div>


        <div className="question-item">

          <div className="question-number">
            03
          </div>

          <div>
            <strong>
              STAR behavioral answers
            </strong>

            <small>
              4 sessions · avg 85%
            </small>
          </div>

        </div>

      </div>



      {/* RECOMMENDED NEXT */}
      <div className="copilot-section recommended-section">

        <div className="copilot-title">
          RECOMMENDED NEXT
        </div>


        <div className="recommendation">

          <p>
            Book a <b>DSA — Edge Cases</b> mock next.
          </p>

          <span>
            It targets your lowest-scoring pattern from the last 10 sessions.
          </span>

        </div>


        <Link
          to="/interview"
          className="recommended-button"
          style={{ textDecoration: "none" }}
        >
          Start Recommended Mock
        </Link>

      </div>

    </aside>
  );
}



export default function Analytics() {

  return (

    <div className="analytics-shell">

      {/* LEFT SIDEBAR */}
      <AnalyticsSidebar />


      {/* MAIN CONTENT */}
      <main className="analytics-content">


        {/* TOP HEADER + STAT CARDS */}
        <div className="analytics-top">

          <div className="analytics-top-header">
            <AnalyticsHeader />
          </div>


          <div className="analytics-top-cards">
            <AnalyticsCards />
          </div>

        </div>



        {/* MAIN ANALYTICS */}
        <div className="analytics-grid">

          <PerformanceOverview />

          <CategoryBreakdown />

          <ImprovementPlan />

          <InterviewStats />

          {/* WEAK AREAS */}
          <WeakAreas />

        </div>

      </main>



      {/* RIGHT COPILOT */}
      <Copilot />

    </div>

  );
}