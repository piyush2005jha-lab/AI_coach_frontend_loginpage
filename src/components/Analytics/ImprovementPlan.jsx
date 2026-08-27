import { strengths, focusAreas } from "../../data/analyticsData";

export default function ImprovementPlan() {
  return (
    <section className="analytics-panel improvement-panel">
      <div className="panel-header">
        <h2>Strengths & Focus Areas</h2>
        <p>Based on AI review of your last 10 answers</p>
      </div>

      <div className="improvement-columns">
        <div>
          <h4 className="strength-heading">STRENGTHS</h4>

          {strengths.map((item) => (
            <div className="improvement-item" key={item}>
              <span className="green-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div>
          <h4 className="focus-heading">FOCUS AREAS</h4>

          {focusAreas.map((item) => (
            <div className="improvement-item" key={item}>
              <span className="red-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}