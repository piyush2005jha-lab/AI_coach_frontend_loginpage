import { aiInsightsData } from "../../data/aiInsightsData";

import "../../styles/AIInsights/SkillBreakdown.css";

export default function SkillBreakdown() {
  return (
    <div className="skill-breakdown">

      <div className="skill-heading">

        <div>

          <span>PERFORMANCE ANALYSIS</span>

          <h2>Skill Breakdown</h2>

        </div>

        <p>
          Based on your last 12 mock interviews
        </p>

      </div>


      <div className="skill-grid">

        {aiInsightsData.skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.name}
          >

            <div className="skill-card-top">

              <div>

                <h3>{skill.name}</h3>

                <span>
                  {skill.level}
                </span>

              </div>

              <strong>
                {skill.score}%
              </strong>

            </div>


            <div className="skill-bar">

              <div
                className={`skill-bar-fill ${skill.type}`}
                style={{
                  width: `${skill.score}%`,
                }}
              />

            </div>


            <div className="skill-card-bottom">

              <span>
                Performance
              </span>

              <span>
                {skill.score >= 80
                  ? "Above average"
                  : skill.score >= 70
                  ? "On track"
                  : "Needs attention"}
              </span>

            </div>

          </div>

        ))}

      </div>


      <div className="skill-summary">

        <div>

          <span>STRONGEST</span>

          <strong>
            JavaScript · 91%
          </strong>

        </div>

        <div>

          <span>NEEDS ATTENTION</span>

          <strong>
            Dynamic Programming · 58%
          </strong>

        </div>

      </div>

    </div>
  );
}