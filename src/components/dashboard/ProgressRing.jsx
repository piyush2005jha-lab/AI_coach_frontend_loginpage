import { useEffect, useState } from "react";
import "../../styles/dashboard/progressRing.css";

export default function ProgressRing() {
  const [ringVal, setRingVal] = useState(0);
  const target = 76;

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1200;
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      setRingVal(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="panel">
      <div className="panel-title">
        <h3>Readiness index</h3>
        <span>live</span>
      </div>
      <div className="ring-wrap">
        <div className="ring">
          <div className="ring-inner">
            <span>{ringVal}</span>%
          </div>
        </div>
        <div className="ring-copy">
          <p>
            Blended from accuracy, structure and confidence across your last
            five mocks — up 8 points since last week.
          </p>
        </div>
      </div>
    </div>
  );
}
