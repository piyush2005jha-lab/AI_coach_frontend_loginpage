const menuItems = [
  {
    label: "Profile",
    icon: "♙",
  },
  {
    label: "Appearance",
    icon: "☼",
  },
  {
    label: "Notifications",
    icon: "♧",
  },
  {
    label: "Interview Preferences",
    icon: "◉",
  },
  {
    label: "Account & Security",
    icon: "▣",
  },
  {
    label: "Data & Privacy",
    icon: "▤",
  },
  {
    label: "Billing & Subscription",
    icon: "□",
  },
  {
    label: "Support",
    icon: "?",
  },
];

export default function SettingsMenu({
  activeSetting,
  setActiveSetting,
}) {
  return (
    <aside className="settings-menu">

      <span className="settings-menu-label">
        SETTINGS
      </span>

      <div className="settings-menu-items">

        {menuItems.map((item) => (

          <button
            key={item.label}
            type="button"
            className={
              activeSetting === item.label
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveSetting(item.label)
            }
          >

            <span className="settings-menu-icon">
              {item.icon}
            </span>

            <span>
              {item.label}
            </span>

          </button>

        ))}

      </div>

    </aside>
  );
}