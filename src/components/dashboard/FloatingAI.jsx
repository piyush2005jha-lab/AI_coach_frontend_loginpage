import { useState } from "react";
import "../../styles/dashboard/floatingAI.css";

export default function FloatingAI() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="ai-toggle" onClick={() => setOpen(true)}>
        <span className="spark">✦</span>
      </div>
    );
  }

  return (
    <div className="ai-float">
      <div className="ai-head">
        <div className="ai-head-left">
          <span className="spark">✦</span>
          <h4>Prepzo AI</h4>
        </div>
        <span className="ai-close" onClick={() => setOpen(false)}>
          ✕
        </span>
      </div>
      <p>Based on your last interview, focus here next:</p>
      <ul>
        <li>• Binary search</li>
        <li>• Behavioural framing</li>
        <li>• DBMS fundamentals</li>
      </ul>
      <div className="ai-improve">
        <span className="lbl">Estimated improvement</span>
        <span className="val">+9%</span>
      </div>
    </div>
  );
}