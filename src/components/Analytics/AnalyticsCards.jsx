import { analyticsStats } from "../../data/analyticsData";

export default function AnalyticsCards() {
  return (
    <div className="analytics-cards">
      {analyticsStats.map((stat) => (
        <div
          className={`analytics-stat-card ${stat.type}`}
          key={stat.label}
        >
          <strong>
            {stat.value.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index !== stat.value.split("\n").length - 1 && <br />}
              </span>
            ))}
          </strong>

          <label>
            {stat.label.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index !== stat.label.split("\n").length - 1 && <br />}
              </span>
            ))}
          </label>

          {stat.change && <small>{stat.change}</small>}
        </div>
      ))}
    </div>
  );
}