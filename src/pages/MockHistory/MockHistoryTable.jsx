import "../../styles/MockHistory/MockHistoryTable.css";
function getScoreClass(score) {
  if (score >= 80) return "excellent";
  if (score >= 70) return "good";
  if (score >= 60) return "average";
  return "low";
}

export default function MockHistoryTable({ mocks }) {
  return (
    <div className="history-table-wrapper">

      <div className="history-table-head">
        <div>MOCK INTERVIEW</div>
        <div>ROLE</div>
        <div>SCORE</div>
        <div>DURATION</div>
        <div>DATE</div>
        <div>ACTION</div>
      </div>

      {mocks.map((mock) => {
        const scoreClass = getScoreClass(mock.score);

        return (
          <div className="history-row" key={mock.id}>

            <div className="mock-info">
              <div className={`mock-icon ${scoreClass}`}>
                {mock.icon}
              </div>

              <div>
                <div className="mock-title">
                  {mock.title}
                </div>

                <div className="mock-topics">
                  {mock.topics}
                </div>
              </div>
            </div>

            <div>
              <span className={`role-badge ${mock.role
                .toLowerCase()
                .replace(" ", "-")}`}>
                {mock.role}
              </span>
            </div>

            <div className="score-wrapper">

              <div className={`score-ring ${scoreClass}`}>
                <svg viewBox="0 0 44 44">
                  <circle
                    className="score-ring-bg"
                    cx="22"
                    cy="22"
                    r="18"
                  />

                  <circle
                    className="score-ring-progress"
                    cx="22"
                    cy="22"
                    r="18"
                    style={{
                      strokeDashoffset:
                        113 - (113 * mock.score) / 100,
                    }}
                  />
                </svg>

                <span>{mock.score}%</span>
              </div>

              <span className={`score-text ${scoreClass}`}>
                {mock.rating}
              </span>

            </div>

            <div className="duration">
              <span>◷</span>
              {mock.duration}
            </div>

            <div className="date">
              <strong>{mock.date}</strong>
              <span>{mock.time}</span>
            </div>

            <div className="history-action">
              <button type="button">
                View Report
              </button>

              <button
                type="button"
                className="more-button"
                aria-label="More options"
              >
                ⋮
              </button>
            </div>

          </div>
        );
      })}

    </div>
  );
}