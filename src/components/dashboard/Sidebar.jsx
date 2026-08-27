import { Link } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Interviews", path: "/interview" },
  { label: "Analytics", path: "/analytics" },
  { label: "Mock history", path: "/mock-history" },
  { label: "AI insights", path: "/ai-insights" },
  { label: "Achievements", path: "/achievements" },
  { label: "Resources", path: "/resources" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar({
  activeItem = "Dashboard",
  variant = "",
}) {
  return (
    <aside className={`sidebar ${variant}`}>

      {/* BRAND */}
      <Link to="/dashboard" className="brand">
        <div className="mark">P</div>
        <h1>Prepzo</h1>
      </Link>

      {/* PROFILE */}
      <div className="profile">
        <div className="name">Piyush Jha</div>

        <div className="role">
          B.Tech · AI/ML specialisation
        </div>

        <div className="plan">
          PRO MEMBER
        </div>
      </div>

      {/* NAVIGATION */}
      <nav>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-item ${
              item.label === activeItem ? "active" : ""
            }`}
          >
            <span className="ic">
              {item.label === activeItem ? "◆" : "◇"}
            </span>

            {item.label}
          </Link>
        ))}
      </nav>

      {/* UPGRADE */}
      <div className="sidebar-foot">
        <p>
          Unlock video mocks, full heatmaps and unlimited sessions.
        </p>

        <button type="button">
          UPGRADE MEMBERSHIP
        </button>
      </div>

      {/* PROFILE FOOTER */}
      <div className="sidebar-user">
        <div className="sidebar-user-avatar">
          PJ
        </div>

        <div className="sidebar-user-info">
          <strong>Piyush Jha</strong>
          <span>piyush@gmail.com</span>
        </div>

        <span className="sidebar-user-arrow">
          ⌄
        </span>
      </div>

    </aside>
  );
}