export default function AchievementProgress() {
  return (
    <section className="achievement-progress">

      <div className="progress-trophy">
        <div className="trophy-ring">
          <span>🏆</span>
        </div>

        <span className="spark spark-one">✦</span>
        <span className="spark spark-two">✦</span>
        <span className="spark spark-three">✦</span>
      </div>

      <div className="progress-content">

        <div className="eyebrow">
          YOUR PROGRESS
        </div>

        <h2>Interview journey</h2>

        <p className="progress-subtitle">
          12 of 18 achievements unlocked
        </p>

        <div className="progress-track">
          <div className="progress-fill" />
        </div>

      </div>

      <div className="progress-divider" />

      <div className="overall-progress">

        <div className="progress-circle">
          <svg viewBox="0 0 100 100">
            <circle
              className="circle-bg"
              cx="50"
              cy="50"
              r="42"
            />

            <circle
              className="circle-value"
              cx="50"
              cy="50"
              r="42"
            />
          </svg>

          <div className="circle-text">
            <strong>68%</strong>
          </div>
        </div>

        <span>Overall Progress</span>

      </div>

    </section>
  );
} 