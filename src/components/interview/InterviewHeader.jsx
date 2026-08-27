export default function InterviewHeader({
  breadcrumb = ["Interviews", "Mock Session"],
  currentLabel = "System Design Track",
  title = "Live Interview Session",
  category = "System Design",
  difficulty = "Intermediate",
  timeRemainingLabel = "Est. 32 min remaining",
  isLive = true,
}) {
  return (
    <div className="iv-header-block">

      {/* Breadcrumb */}
      <div className="iv-breadcrumb">

        {breadcrumb.map((item, index) => (
          <span key={item}>
            {item}

            {index !== breadcrumb.length - 1 && (
              <span className="iv-crumb-sep">
                {" "} / {" "}
              </span>
            )}

          </span>
        ))}

        <span className="iv-crumb-sep">
          {" "} / {" "}
        </span>

        <span className="iv-crumb-current">
          {currentLabel}
        </span>

      </div>


      {/* Title */}
      <h1 className="iv-header-title">
        {title}
      </h1>


      {/* Meta Chips */}
      <div className="iv-meta-row">

        <div className="iv-chip iv-chip-gold">
          {category}
        </div>


        <div className="iv-chip iv-chip-difficulty">
          Difficulty · {difficulty}
        </div>


        <div className="iv-chip">
          {timeRemainingLabel}
        </div>


        {isLive && (
          <div className="iv-chip">

            <span className="iv-live-dot" />

            Live

          </div>
        )}

      </div>


    </div>
  );
}