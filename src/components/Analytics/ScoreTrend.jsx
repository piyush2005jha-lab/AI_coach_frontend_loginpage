import { scoreTrend, peerTrend } from "../../data/analyticsData";

export default function ScoreTrend() {
  const width = 700;
  const height = 260;

  const getPoints = (data) => {
    const max = 100;
    const min = 40;

    return data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;

        const y =
          height -
          ((value - min) / (max - min)) * height;

        return `${x},${y}`;
      })
      .join(" ");
  };

  const scorePoints = getPoints(scoreTrend);
  const peerPoints = getPoints(peerTrend);

  const areaPoints = `${scorePoints} ${width},${height} 0,${height}`;

  return (
    <div className="trend-chart-wrapper">
      <svg
        className="trend-chart"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="scoreArea"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#d9a52e"
              stopOpacity="0.27"
            />

            <stop
              offset="100%"
              stopColor="#d9a52e"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <line
          x1="0"
          y1="52"
          x2="700"
          y2="52"
          className="chart-grid"
        />

        <line
          x1="0"
          y1="104"
          x2="700"
          y2="104"
          className="chart-grid"
        />

        <line
          x1="0"
          y1="156"
          x2="700"
          y2="156"
          className="chart-grid"
        />

        <line
          x1="0"
          y1="208"
          x2="700"
          y2="208"
          className="chart-grid"
        />

        <polygon
          points={areaPoints}
          fill="url(#scoreArea)"
        />

        <polyline
          points={scorePoints}
          className="score-polyline"
        />

        <polyline
          points={peerPoints}
          className="peer-polyline"
        />
      </svg>
    </div>
  );
}