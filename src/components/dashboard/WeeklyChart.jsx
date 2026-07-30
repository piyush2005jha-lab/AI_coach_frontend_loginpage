import "../../styles/dashboard/weeklyChart.css";

const POINTS = [
  { x: 10, y: 70, delay: "1.4s" },
  { x: 60, y: 58, delay: "1.45s" },
  { x: 110, y: 64, delay: "1.5s" },
  { x: 160, y: 32, delay: "1.55s" },
  { x: 210, y: 24, delay: "1.6s" },
  { x: 260, y: 10, delay: "1.65s" },
  { x: 310, y: 36, delay: "1.7s" },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeeklyChart() {
  const polylinePoints = POINTS.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="panel">
      <div className="panel-title">
        <h3>Weekly progress</h3>
        <span>This week</span>
      </div>

      <svg className="linechart" viewBox="0 0 320 120" preserveAspectRatio="none">
        <polyline points={polylinePoints} fill="none" stroke="#c9a24b" strokeWidth="2" />
        {POINTS.map((p) => (
          <circle
            key={`${p.x}-${p.y}`}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#c9a24b"
            style={{ animationDelay: p.delay }}
          />
        ))}
      </svg>

      <div className="chart-labels">
        {DAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="mini-stats">
        <div className="mini-stat">
          <div className="v">76%</div>
          <div className="l">Avg score</div>
        </div>
        <div className="mini-stat">
          <div className="v">88%</div>
          <div className="l">Best day</div>
        </div>
        <div className="mini-stat">
          <div className="v">38</div>
          <div className="l">Sessions</div>
        </div>
      </div>
    </div>
  );
}
