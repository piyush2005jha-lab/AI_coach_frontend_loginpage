import { skillBreakdown } from "../../data/analyticsData";

export default function CategoryBreakdown() {
  return (
    <section className="analytics-panel category-panel">
      <div className="panel-header">
        <h2>Skill Breakdown</h2>
        <p>By interview category</p>
      </div>

      <div className="category-list">
        {skillBreakdown.map((skill) => (
          <div className="category-item" key={skill.name}>
            <div className="category-info">
              <span>{skill.name}</span>
              <strong>{skill.score}%</strong>
            </div>

            <div className="category-bar">
              <div
                className="category-fill"
                style={{ width: `${skill.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}