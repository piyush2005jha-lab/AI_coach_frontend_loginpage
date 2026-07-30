import { useEffect, useState } from "react";
import "../../styles/dashboard/stats.css";

function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export default function Stats() {
  const interviewsDone = useCountUp(12, 900);
  const avgScore = useCountUp(78, 900);

  return (
    <div className="stats">
      <div className="stat">
        <div className="lbl">
          <span className="ic">🎯</span>Interviews done
        </div>
        <div className="val">{interviewsDone}</div>
        <div className="delta">+2 this week</div>
      </div>

      <div className="stat">
        <div className="lbl">
          <span className="ic">📈</span>Average score
        </div>
        <div className="val">{avgScore}%</div>
        <div className="delta">+3% this month</div>
      </div>

      <div className="stat">
        <div className="lbl">
          <span className="ic">🏆</span>Strongest track
        </div>
        <div className="val" style={{ fontSize: "22px" }}>
          Software
        </div>
        <div className="delta">all-time best</div>
      </div>

      <div className="stat">
        <div className="lbl">
          <span className="ic">⏱</span>Time practiced
        </div>
        <div className="val">18h 45m</div>
        <div className="delta">+2h this week</div>
      </div>
    </div>
  );
}
