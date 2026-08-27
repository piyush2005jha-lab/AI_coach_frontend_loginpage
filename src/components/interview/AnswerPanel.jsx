import { useState } from "react";
import VoiceRecorder from "./VoiceRecorder";
import TextAnswer from "./TextAnswer";


export default function AnswerPanel({
  finalTranscript = "",
  interimTranscript = "",

  onPrevious,
  onSkip,
  onEndInterview,
  onNextQuestion,

  onRestartRecording,
  onPauseRecording,
  onStopRecording,
  onCopyTranscript,

  isFirstQuestion = false,
  isLastQuestion = false,
}) {

  const [mode, setMode] = useState("voice");
  const [textAnswer, setTextAnswer] = useState("");



  return (
    <>


      {/* Answer Card */}
      <div className="iv-answer-card">


        {/* Mode Switch */}
        <div className="iv-mode-switch">


          <button
            type="button"
            className={`iv-mode-btn ${
              mode === "voice" ? "active" : ""
            }`}
            onClick={() => setMode("voice")}
          >
            Voice Mode
          </button>



          <button
            type="button"
            className={`iv-mode-btn ${
              mode === "text" ? "active" : ""
            }`}
            onClick={() => setMode("text")}
          >
            Text Mode
          </button>


        </div>




        {/* Content */}
        {mode === "voice" ? (

          <VoiceRecorder

            finalText={finalTranscript}

            interimText={interimTranscript}

            onRestart={onRestartRecording}

            onPause={onPauseRecording}

            onStop={onStopRecording}

            onCopyTranscript={onCopyTranscript}

          />

        ) : (

          <TextAnswer

            value={textAnswer}

            onChange={setTextAnswer}

          />

        )}



      </div>





      {/* Actions */}
      <div className="iv-action-row">


        <div className="iv-action-left">


          <button
            type="button"
            className="iv-btn"
            onClick={onPrevious}
            disabled={isFirstQuestion}
          >
            ← Previous
          </button>



          <button
            type="button"
            className="iv-btn"
            onClick={onSkip}
          >
            Skip
          </button>


        </div>





        <div className="iv-action-right">


          <button
            type="button"
            className="iv-btn danger"
            onClick={onEndInterview}
          >
            End Interview
          </button>




          <button
            type="button"
            className="iv-btn primary"
            onClick={onNextQuestion}
          >
            {isLastQuestion
              ? "Finish"
              : "Next Question →"}
          </button>


        </div>


      </div>


    </>
  );
}