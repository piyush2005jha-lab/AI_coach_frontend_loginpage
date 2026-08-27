export default function InterviewWidgets({
  timeLeft = "18:42",
  score = 84,
  confidence = 72,
  questionsLeft = 3,
  totalQuestions = 5,
}) {
  return (
    <div className="iv-widgets">


      {/* Time */}
      <div className="iv-widget">
        <div className="iv-widget-val">
          {timeLeft}
        </div>

        <div className="iv-widget-lbl">
          Time Left
        </div>
      </div>



      {/* Score */}
      <div className="iv-widget">

        <div className="iv-widget-val gold">
          {score}%
        </div>

        <div className="iv-widget-lbl">
          Score
        </div>

      </div>



      {/* Confidence */}
      <div className="iv-widget">

        <div className="iv-widget-val gold">
          {confidence}%
        </div>

        <div className="iv-widget-lbl">
          Confidence
        </div>


        <div
          className="iv-confidence-bar"
          role="progressbar"
          aria-valuenow={confidence}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <i
            style={{
              width: `${confidence}%`,
            }}
          />
        </div>

      </div>



      {/* Questions */}
      <div className="iv-widget">

        <div className="iv-widget-val">
          {questionsLeft} / {totalQuestions}
        </div>

        <div className="iv-widget-lbl">
          Questions Left
        </div>

      </div>


    </div>
  );
}