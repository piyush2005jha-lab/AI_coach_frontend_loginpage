import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsCards from "./AnalyticsCards";
import PerformanceOverview from "./PerformanceOverview";
import CategoryBreakdown from "./CategoryBreakdown";
import ImprovementPlan from "./ImprovementPlan";
import WeakAreas from "./WeakAreas";
import InterviewStats from "./InterviewStats";

function AnalyticsSidebar() {
  const menu = [
    "Dashboard",
    "Interviews",
    "Analytics",
    "Mock history",
    "AI insights",
    "Achievements",
    "Resources",
    "Settings",
  ];

  return (
    <aside className="analytics-sidebar">
      <div className="analytics-brand">
        <div className="analytics-brand-logo">P</div>
        <span>Prepzo</span>
      </div>

      <div className="analytics-profile">
        <h3>Piyush Jha</h3>
        <p>B.Tech · AI / ML specialisation</p>

        <div className="analytics-pro">PRO MEMBER</div>

        <div className="analytics-profile-line" />
      </div>

      <nav className="analytics-nav">
        {menu.map((item) => (
          <div
            key={item}
            className={`analytics-nav-item ${
              item === "Analytics" ? "active" : ""
            }`}
          >
            <span className="analytics-nav-icon">
              {item === "Analytics" ? "◆" : "◇"}
            </span>

            <span>{item}</span>
          </div>
        ))}
      </nav>

      <div className="analytics-sidebar-bottom">
        <div className="analytics-sparkle">✦</div>
      </div>
    </aside>
  );
}

function Copilot() {
  return (
    <aside className="analytics-copilot">
      <div className="copilot-user">
        <div className="copilot-avatar">P</div>

        <div>
          <h3>Prepzo Copilot</h3>

          <span>
            <i />
            Insights ready
          </span>
        </div>
      </div>

      <div className="copilot-section">
        <div className="copilot-title">AI INSIGHTS</div>

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

      <div className="copilot-section question-section">
        <div className="copilot-title">TOP QUESTION TYPES</div>

        <div className="question-item">
          <div className="question-number">01</div>

          <div>
            <strong>Scalability trade-offs</strong>
            <small>6 sessions · avg 82%</small>
          </div>
        </div>

        <div className="question-item">
          <div className="question-number">02</div>

          <div>
            <strong>Tree/graph traversal</strong>
            <small>5 sessions · avg 69%</small>
          </div>
        </div>

        <div className="question-item">
          <div className="question-number">03</div>

          <div>
            <strong>STAR behavioral answers</strong>
            <small>4 sessions · avg 85%</small>
          </div>
        </div>
      </div>

      <div className="copilot-section recommended-section">
        <div className="copilot-title">RECOMMENDED NEXT</div>

        <div className="recommendation">
          <p>
            Book a <b>DSA — Edge Cases</b> mock next.
          </p>

          <span>
            It targets your lowest-scoring pattern from the last 10 sessions.
          </span>
        </div>

        <button className="recommended-button">
          Start Recommended Mock
        </button>
      </div>
    </aside>
  );
}

export default function Analytics() {
  return (
    <div className="analytics-shell">
      <AnalyticsSidebar />

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

          {/* moved inside the grid so .recent-sessions'
              grid-column: 1 / -1 rule actually applies */}
          <WeakAreas />
        </div>
      </main>

      <Copilot />
    </div>
  );
}