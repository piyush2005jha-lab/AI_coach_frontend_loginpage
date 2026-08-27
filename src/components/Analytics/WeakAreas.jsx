import { recentSessions } from "../../data/analyticsData";

export default function WeakAreas() {
  return (
    <section className="analytics-panel recent-sessions">
      <div className="panel-header">
        <h2>Recent Sessions</h2>
        <p>Your last 5 mock interviews</p>
      </div>

      <div className="sessions-table">
        <div className="sessions-head">
          <span>SESSION</span>
          <span>TRACK</span>
          <span>DATE</span>
          <span>DURATION</span>
          <span>SCORE</span>
        </div>

        {recentSessions.map((session) => (
          <div className="session-row" key={session.session}>
            <strong>{session.session}</strong>

            <span className="track-badge">
              {session.track}
            </span>

            <span>{session.date}</span>

            <span>{session.duration}</span>

            <span
              className={`session-score ${session.scoreType}`}
            >
              {session.score}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}