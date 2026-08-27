import { aiInsightsData } from "../../data/aiInsightsData";

import "../../styles/AIInsights/ActionPlan.css";

export default function ActionPlan() {
  return (
    <div className="action-plan">

      <div className="action-plan-heading">

        <div>

          <span>AI RECOMMENDATIONS</span>

          <h2>
            Your next best moves
          </h2>

        </div>

        <p>
          Focus on these areas to improve your
          interview readiness.
        </p>

      </div>


      <div className="recommendations">

        {aiInsightsData.recommendations.map(
          (item, index) => (

            <div
              className="recommendation"
              key={item.title}
            >

              <div className="recommendation-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              <div className="recommendation-content">

                <div className="recommendation-top">

                  <span
                    className={`priority ${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>

                  <span className="recommendation-time">
                    {item.time}
                  </span>

                </div>


                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>


                <button type="button">
                  {item.action}

                  <span>→</span>
                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}