export default function AchievementCard({ achievement }) {
  return (
    <div
      className={`achievement-card ${
        achievement.unlocked ? "unlocked" : "locked"
      }`}
    >

      <div className="achievement-icon">
        {achievement.icon}
      </div>

      <h3>{achievement.title}</h3>

      <p>{achievement.description}</p>

      <div
        className={`achievement-status ${
          achievement.unlocked ? "status-unlocked" : "status-locked"
        }`}
      >
        {achievement.unlocked ? "✓ Unlocked" : "🔒 Locked"}
      </div>

      <span className="achievement-date">
        {achievement.date}
      </span>

    </div>
  );
}