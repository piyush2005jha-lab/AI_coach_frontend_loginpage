import "../../styles/MockHistory/HistoryStats.css";
const stats = [
  {
    label: "INTERVIEWS DONE",
    value: "12",
    change: "+2 this week",
    icon: "▣",
  },
  {
    label: "AVERAGE SCORE",
    value: "78%",
    change: "+3% this month",
    icon: "↗",
  },
  {
    label: "STRONGEST TRACK",
    value: "Software",
    change: "all-time best",
    icon: "♛",
  },
  {
    label: "TIME PRACTICED",
    value: "18h 45m",
    change: "+2h this week",
    icon: "◷",
  },
];

export default function HistoryStats() {
  return (
    <div className="history-stats">
      {stats.map((stat) => (
        <div className="history-stat" key={stat.label}>
          <div className="history-stat-icon">
            {stat.icon}
          </div>

          <div className="history-stat-content">
            <div className="history-stat-label">
              {stat.label}
            </div>

            <div className="history-stat-value">
              {stat.value}
            </div>

            <div className="history-stat-change">
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}