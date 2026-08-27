export default function AnalyticsHeader() {
  return (
    <header className="analytics-header">
      <div className="analytics-heading">
        <div className="analytics-breadcrumb">
          Analytics <span>/</span>{" "}
          <b>Performance Overview</b>
        </div>

        <h1>
          Your Interview
          <br />
          Analytics
        </h1>

        <div className="analytics-filters">
          <button>Last 30 Days</button>

          <span className="month-growth">
            ▲ 12% vs last month
          </span>

          <span className="sessions-badge">
            24 sessions logged
          </span>
        </div>
      </div>
    </header>
  );
}