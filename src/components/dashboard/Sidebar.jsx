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

export default function Sidebar({ activeItem = "Dashboard" }) {
  return (
    <div className="sidebar">
      <div className="brand">
        <div className="mark">P</div>
        <h1>Prepzo</h1>
      </div>

      <div className="profile">
        <div className="name">Piyush Jha</div>
        <div className="role">B.Tech · AI/ML specialisation</div>
        <div className="plan">PRO MEMBER</div>
      </div>

      <nav>
        {NAV_ITEMS.map((item) => (
          <div
            key={item}
            className={`nav-item ${item === activeItem ? "active" : ""}`}
          >
            <span className="ic">{item === activeItem ? "◆" : "◇"}</span>
            {item}
          </div>
        ))}
      </nav>

      <div className="sidebar-foot">
        <p>Unlock video mocks, full heatmaps and unlimited sessions.</p>
        <button>UPGRADE MEMBERSHIP</button>
      </div>
    </div>
  );
}
