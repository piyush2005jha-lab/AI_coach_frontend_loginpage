import { practiceStreak } from "../../data/analyticsData";

export default function InterviewStats() {
  return (
    <section className="analytics-panel streak-panel">
      <div className="panel-header">
        <h2>Practice Streak</h2>
        <p>Last 14 days</p>
      </div>

      <div className="streak-container">
        <div className="streak-days">
          {practiceStreak.map((level, index) => (
            <div
              key={index}
              className={`streak-day ${level}`}
            />
          ))}
        </div>

        <div className="streak-legend">
          <span>
            <i className="none" />
            None
          </span>

          <span>
            <i className="light" />
            Light
          </span>

          <span>
            <i className="deep" />
            Deep session
          </span>
        </div>
      </div>
    </section>
  );
}