import { Maximize2, Bookmark, Copy } from "lucide-react";

export default function QuestionCard({
  questionNumber = 3,
  questionText = "Design a scalable system architecture.",
  hint = "Think about scalability, caching and database design.",
  expectedConcepts = [],
  onExpand,
  onBookmark,
  onCopy,
}) {
  return (
    <div className="iv-card">


      {/* Top Section */}
      <div className="iv-q-card-top">

        <div className="iv-q-left">

          <span className="iv-q-number">
            Question {String(questionNumber).padStart(2, "0")}
          </span>


          <span className="iv-ai-badge">
            AI Generated
          </span>

        </div>



        <div className="iv-q-actions">

          <button
            type="button"
            className="iv-icon-btn"
            title="Expand"
            onClick={onExpand}
          >
            <Maximize2 size={15} />
          </button>


          <button
            type="button"
            className="iv-icon-btn"
            title="Bookmark"
            onClick={onBookmark}
          >
            <Bookmark size={15} />
          </button>


          <button
            type="button"
            className="iv-icon-btn"
            title="Copy"
            onClick={onCopy}
          >
            <Copy size={15} />
          </button>

        </div>

      </div>



      {/* Question */}
      <div className="iv-q-text">
        {questionText}
      </div>



      {/* Hint + Concepts */}
      <div className="iv-q-sub">


        <div className="iv-q-sub-block">

          <div className="iv-label">
            Hint
          </div>


          <div className="iv-q-content">
            {hint}
          </div>

        </div>



        <div className="iv-q-sub-block">

          <div className="iv-label">
            Expected Concepts
          </div>


          <div className="iv-tag-row">

            {expectedConcepts.length > 0 ? (
              expectedConcepts.map((tag) => (
                <span
                  key={tag}
                  className="iv-tag"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="iv-tag">
                General
              </span>
            )}

          </div>

        </div>


      </div>


    </div>
  );
}