import "../../styles/dashboard/sidebar.css";

const NAV_ITEMS = [
  "Dashboard",
  "Interviews",
  "Analytics",
  "Mock history",
  "AI insights",
  "Achievements",
  "Resources",
  "Settings",
];

export default function Sidebar({
  activeItem = "Dashboard",
  variant = "",
}) {
  return (
    <aside className={`sidebar ${variant}`}>

      {/* BRAND */}
      <div className="brand">
        <div className="mark">P</div>
        <h1>Prepzo</h1>
      </div>


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
          <div
            key={item}
            className={`nav-item ${
              item === activeItem ? "active" : ""
            }`}
          >
            <span className="ic">
              {item === activeItem ? "◆" : "◇"}
            </span>

            {item}
          </div>
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