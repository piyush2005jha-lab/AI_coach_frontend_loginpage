import ScoreTrend from "./ScoreTrend";

export default function PerformanceOverview() {
  return (
    <section className="analytics-panel performance-panel">
      <div className="panel-header performance-header">
        <div>
          <h2>Score Trend</h2>
          <p>Overall performance across your last 10 sessions</p>
        </div>

        <div className="trend-tabs">
          <button className="active">30D</button>
          <button>90D</button>
          <button>All</button>
        </div>
      </div>

      <ScoreTrend />

      <div className="trend-legend">
        <span>
          <i className="legend-score" />
          Your score
        </span>

        <span>
          <i className="legend-peer" />
          Peer average
        </span>
      </div>
    </section>
  );
}