import { useState } from "react";
import { useNavigate } from "react-router-dom";


import InterviewSidebar from "../../components/interview/InterviewSidebar";
import InterviewHeader from "../../components/interview/InterviewHeader";
import InterviewWidgets from "../../components/interview/InterviewWidgets";
import QuestionCard from "../../components/interview/QuestionCard";
import AnswerPanel from "../../components/interview/AnswerPanel";
import ProgressTimeline from "../../components/interview/ProgressTimeline";
import CopilotPanel from "../../components/interview/CopilotPanel";


import "../../styles/interview/interviewLayout.css";
import "../../styles/interview/question.css";
import "../../styles/interview/answer.css";
import "../../styles/interview/camera.css";
import "../../styles/interview/copilot.css";
import "../../styles/interview/timeline.css";



const QUESTIONS = [
  {
    text: "Tell me about a time you had to debug a tricky production issue.",
    hint: "Focus on your debugging process, not just the fix.",
    concepts: [
      "Debugging",
      "Root Cause Analysis"
    ],
  },

  {
    text: "How would you design a rate limiter for a public API?",
    hint: "Think about token bucket vs sliding window trade-offs.",
    concepts: [
      "Rate Limiting",
      "Distributed Systems"
    ],
  },

  {
    text: "Design a URL shortening service like Bitly — walk me through your high-level architecture, and how you'd handle collision resistance at scale.",
    hint: "Think about the trade-off between base62 encoding and a counter-based ID generator before deciding your hashing strategy.",
    concepts: [
      "Load Balancing",
      "Hashing",
      "Caching",
      "DB Sharding"
    ],
  },

  {
    text: "How would you scale a chat application to support 1M concurrent users?",
    hint: "Consider WebSocket connection pooling and horizontal scaling.",
    concepts: [
      "WebSockets",
      "Horizontal Scaling"
    ],
  },

  {
    text: "Walk me through how you would design a notification system.",
    hint: "Think about push, email, and SMS channels, and delivery guarantees.",
    concepts: [
      "Queueing",
      "Fan-out",
      "Delivery Guarantees"
    ],
  },
];




export default function Interview() {


  const navigate = useNavigate();


  const [currentIndex, setCurrentIndex] = useState(2);



  const totalQuestions = QUESTIONS.length;


  const currentQuestion =
    QUESTIONS[currentIndex] ?? QUESTIONS[0];




  const handlePrevious = () => {

    setCurrentIndex((index)=>
      Math.max(0,index-1)
    );

  };




  const handleNext = () => {

    setCurrentIndex((index)=>
      Math.min(
        totalQuestions-1,
        index+1
      )
    );

  };




  const handleEndInterview = () => {

    navigate("/dashboard");

  };





  return (

    <div className="iv-app">


      {/* Left */}
      <InterviewSidebar />





      {/* Center */}
      <main className="iv-center">


        <div className="iv-topbar">


          <InterviewHeader />


          <InterviewWidgets

            questionsLeft={
              totalQuestions-currentIndex-1
            }

            totalQuestions={totalQuestions}

          />


        </div>





        <QuestionCard

          questionNumber={
            currentIndex+1
          }


          questionText={
            currentQuestion.text
          }


          hint={
            currentQuestion.hint
          }


          expectedConcepts={
            currentQuestion.concepts
          }


          onExpand={()=>
            console.log("Expand")
          }


          onBookmark={()=>
            console.log("Bookmark")
          }


          onCopy={()=>
            navigator.clipboard.writeText(
              currentQuestion.text
            )
          }

        />






        <AnswerPanel


          finalTranscript={
            "So for this system, I'd start by separating the write path from the read path — the write path handles generating a short code for each long URL,"
          }


          interimTranscript={
            "and I'd use a base62 counter instead of hashing to avoid collisions entirely"
          }



          onPrevious={
            handlePrevious
          }


          onSkip={
            handleNext
          }


          onEndInterview={
            handleEndInterview
          }


          onNextQuestion={
            handleNext
          }


          isFirstQuestion={
            currentIndex===0
          }


          isLastQuestion={
            currentIndex===totalQuestions-1
          }


        />






        <ProgressTimeline

          totalQuestions={
            totalQuestions
          }


          currentIndex={
            currentIndex
          }


        />


      </main>





      {/* Right */}
      <CopilotPanel />



    </div>

  );

}