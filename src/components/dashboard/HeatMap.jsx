import { useRef, useState } from "react";
import "../../styles/dashboard/heatmap.css";

const CELLS = [
  { skill: "Arrays", acc: 49, time: "4m 10s", diff: "Medium", bg: "#8a4a3d" },
  { skill: "Two pointers", acc: 54, time: "3m 40s", diff: "Medium", bg: "#6b4636" },
  { skill: "Graphs", acc: 63, time: "4m 55s", diff: "Hard", bg: "#7d6733" },
  { skill: "Trees", acc: 70, time: "3m 05s", diff: "Medium", bg: "#4a5c4a" },
  { skill: "Backtracking", acc: 75, time: "3m 30s", diff: "Hard", bg: "#5c7550" },
  { skill: "Greedy", acc: 88, time: "2m 20s", diff: "Easy", bg: "#c9a24b" },
  { skill: "Sorting", acc: 80, time: "2m 50s", diff: "Easy", bg: "#5c7550" },
  { skill: "Dynamic Programming", acc: 58, time: "3m 21s", diff: "Medium", bg: "#7d6733" },
  { skill: "Recursion", acc: 85, time: "2m 40s", diff: "Medium", bg: "#c9a24b" },
  { skill: "Bit manipulation", acc: 82, time: "2m 55s", diff: "Easy", bg: "#8f9a6b" },
  { skill: "System design", acc: 47, time: "6m 12s", diff: "Hard", bg: "#8a4a3d" },
  { skill: "Databases", acc: 72, time: "3m 10s", diff: "Medium", bg: "#5c7550" },
  { skill: "OS concepts", acc: 86, time: "2m 30s", diff: "Easy", bg: "#c9a24b" },
  { skill: "Concurrency", acc: 69, time: "3m 50s", diff: "Hard", bg: "#5c7550" },
];

export default function Heatmap() {
  const gridRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  function handleEnter(e, cell) {
    const gridRect = gridRef.current.getBoundingClientRect();
    const cellRect = e.currentTarget.getBoundingClientRect();

    const tooltipWidth = 190;
    const tooltipHeight = 100;

    let left =
      cellRect.left -
      gridRect.left +
      cellRect.width / 2 -
      tooltipWidth / 2;

    let top =
      cellRect.top -
      gridRect.top -
      tooltipHeight -
      10;

    // Prevent left overflow
    if (left < 8) left = 8;

    // Prevent right overflow
    if (left + tooltipWidth > gridRect.width) {
      left = gridRect.width - tooltipWidth - 8;
    }

    // If no space above, show below
    if (top < 8) {
      top = cellRect.bottom - gridRect.top + 10;
    }

    setTooltip({
      ...cell,
      left,
      top,
    });
  }

  function handleLeave() {
    setTooltip(null);
  }

  return (
    <div className="panel">
      <div className="panel-title">
        <h3>Weakness heatmap</h3>
        <span>Software track</span>
      </div>

      <div className="heatgrid" ref={gridRef}>
        {CELLS.map((cell) => (
          <div
            key={cell.skill}
            className="heat-cell"
            style={{ background: cell.bg }}
            onMouseEnter={(e) => handleEnter(e, cell)}
            onMouseLeave={handleLeave}
          />
        ))}

        {tooltip && (
          <div
            className={`tooltip show`}
            style={{
              left: tooltip.left,
              top: tooltip.top,
            }}
          >
            <div className="tt-title">{tooltip.skill}</div>

            <div className="tt-row">
              <span>Accuracy</span>
              <b>{tooltip.acc}%</b>
            </div>

            <div className="tt-row">
              <span>Avg answer time</span>
              <b>{tooltip.time}</b>
            </div>

            <div className="tt-row">
              <span>Difficulty</span>
              <b>{tooltip.diff}</b>
            </div>
          </div>
        )}
      </div>

      <div className="heat-legend">
        <span>Arrays / graphs</span>
        <span>DP</span>
        <span>System design</span>
      </div>
    </div>
  );
}