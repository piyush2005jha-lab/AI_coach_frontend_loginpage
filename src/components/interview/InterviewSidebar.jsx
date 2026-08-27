import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Interviews", path: "/interview" },
  { label: "Analytics", path: "/analytics" },
  { label: "Mock history", path: "/history" },
  { label: "AI insights", path: "/insights" },
  { label: "Achievements", path: "/achievements" },
  { label: "Resources", path: "/resources" },
  { label: "Settings", path: "/settings" },
];

export default function InterviewSidebar({
  userName = "Piyush Yadav",
  userSub = "B.Tech · AI/ML specialisation",
  activeItem = "Interviews",
}) {
  return (
    <aside className="iv-sidebar">

      {/* Brand */}
      <div className="iv-brand">
        <div className="iv-brand-mark">
          P
        </div>

        <div className="iv-brand-name">
          Prepzo
        </div>
      </div>


      {/* Profile */}
      <div className="iv-profile">

        <div className="iv-profile-name">
          {userName}
        </div>

        <div className="iv-profile-sub">
          {userSub}
        </div>

        <div className="iv-pro-badge">
          PRO MEMBER
        </div>

      </div>


      {/* Navigation */}
      <nav className="iv-nav">

        {NAV_ITEMS.map((item) => (

          <Link
            key={item.label}
            to={item.path}
            className={`iv-nav-item ${
              item.label === activeItem ? "active" : ""
            }`}
          >

            <span className="iv-dot" />

            {item.label}

          </Link>

        ))}

      </nav>


      {/* AI Orb */}
      <div className="iv-sidebar-footer">

        <div className="iv-ai-orb">

          <Sparkles
            size={20}
            color="#C89B3C"
            fill="#C89B3C"
          />

        </div>

      </div>


    </aside>
  );
}