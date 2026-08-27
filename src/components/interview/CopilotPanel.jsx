import CameraAnalysis from "./CameraAnalysis";
import {
  HelpCircle,
  TrendingUp,
  Sparkles
} from "lucide-react";


const DEFAULT_FOLLOWUPS = [
  "How would you handle a hot key that suddenly goes viral?",
  "What happens if two users request the same custom alias simultaneously?",
  "How would you scale this to 10B redirects per day?",
];



export default function CopilotPanel({
  analysingText = "Analysing your explanation of hashing strategy",

  followups = DEFAULT_FOLLOWUPS,

  hintPrefix = "Consider mentioning ",

  hintBold = "consistent hashing",

  hintSuffix =
    " for your cache layer — interviewers at this level usually probe for it right after collision handling.",


  cameraProps,

  onExplainConcept,
  onImproveAnswer,
  onGenerateResponse,
  onFollowupClick,

}) {


  return (

    <aside className="iv-copilot">


      {/* Camera */}
      <CameraAnalysis {...cameraProps} />





      {/* Header */}
      <div className="iv-copilot-header">


        <div className="iv-avatar">
          P
        </div>


        <div>

          <div className="iv-copilot-name">
            Prepzo Copilot
          </div>


          <div className="iv-copilot-status">

            <span className="iv-status-dot"/>

            Listening

          </div>

        </div>


      </div>





      {/* Thinking Bubble */}
      <div className="iv-typing-bubble">

        {analysingText}


        <div className="iv-typing-dots">

          <span/>
          <span/>
          <span/>

        </div>


      </div>





      {/* Follow Ups */}
      <div className="iv-copilot-section">


        <div className="iv-label">
          Suggested Follow-ups
        </div>



        {followups?.map((question,index)=>(


          <button

            key={index}

            type="button"

            className="iv-followup-chip"

            onClick={() =>
              onFollowupClick?.(question)
            }

          >

            {question}

          </button>


        ))}


      </div>






      {/* Hint */}
      <div className="iv-copilot-section">


        <div className="iv-label">
          AI Hint
        </div>



        <div className="iv-hint-box">

          {hintPrefix}

          <b>
            {hintBold}
          </b>

          {hintSuffix}


        </div>


      </div>







      {/* Actions */}
      <div className="iv-copilot-section">


        <div className="iv-label">
          Copilot Actions
        </div>



        <div className="iv-copilot-actions">



          <button

            type="button"

            className="iv-cp-action"

            onClick={onExplainConcept}

          >

            <HelpCircle size={15}/>

            Explain this concept

          </button>





          <button

            type="button"

            className="iv-cp-action"

            onClick={onImproveAnswer}

          >

            <TrendingUp size={15}/>

            Improve my answer

          </button>





          <button

            type="button"

            className="iv-cp-action"

            onClick={onGenerateResponse}

          >

            <Sparkles size={15}/>

            Generate better response

          </button>




        </div>


      </div>



    </aside>

  );
}