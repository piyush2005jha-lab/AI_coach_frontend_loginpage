import "../../styles/dashboard/topbar.css";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div>
          <div className="eyebrow">Today's session</div>
          <h1>Good evening, Piyush.</h1>
        </div>
        <div className="streak">
          Current streak
          <b>5 days</b>
        </div>
      </div>

      <div className="hero-sub">
        <p>
          Continue your <b>software interview</b> journey — AI generated{" "}
          <b>14 new questions</b> based on your last mock.
        </p>
        <div className="ready-badge">
          <div className="n">82%</div>
          <div className="t">ready for SDE interviews</div>
        </div>
      </div>
    </>
  );
}
