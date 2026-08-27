import { useEffect, useRef, useState } from "react";
import { RotateCcw, Pause, Copy, Mic } from "lucide-react";


function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${minutes}:${seconds}`;
}


const WAVE_DELAYS = [
  0,
  0.1,
  0.2,
  0.3,
  0.15,
  0.05,
  0.25,
  0.1,
  0.3,
];


export default function VoiceRecorder({
  isRecording = false,
  finalText = "",
  interimText = "",
  onRestart,
  onPause,
  onStop,
  onCopyTranscript,
}) {

  const [seconds, setSeconds] = useState(0);

  const intervalRef = useRef(null);



  // Timer
  useEffect(() => {

    if (isRecording) {

      intervalRef.current = setInterval(() => {

        setSeconds((prev) => prev + 1);

      }, 1000);

    } 
    else {

      clearInterval(intervalRef.current);

    }


    return () => {
      clearInterval(intervalRef.current);
    };


  }, [isRecording]);




  const handleRestart = () => {

    setSeconds(0);

    onRestart?.();

  };



  return (

    <div className="iv-voice-mode">


      {/* Mic Animation */}
      <div className="iv-mic-ring">

        <div className="iv-mic-core">

          <Mic
            size={22}
            color="#0B0B0D"
            strokeWidth={1.8}
          />

        </div>

      </div>



      {/* Wave */}
      <div className="iv-waveform">

        {WAVE_DELAYS.map((delay,index)=>(

          <i
            key={index}
            style={{
              animationDelay:`${delay}s`
            }}
          />

        ))}

      </div>




      {/* Timer */}
      <div className="iv-rec-timer">
        {formatTime(seconds)}
      </div>





      {/* Controls */}
      <div className="iv-voice-controls">


        <button
          className="iv-vc-btn"
          title="Restart"
          onClick={handleRestart}
          type="button"
        >

          <RotateCcw size={17}/>

        </button>




        <button
          className="iv-vc-btn"
          title="Pause"
          onClick={onPause}
          type="button"
        >

          <Pause size={17}/>

        </button>




        <button
          className="iv-vc-btn stop"
          title="Stop"
          onClick={onStop}
          type="button"
        >

          <span className="iv-stop-square"/>

        </button>


      </div>





      {/* Transcript */}
      <div className="iv-transcript-box">


        <div className="iv-transcript-head">


          <div className="iv-transcript-label">

            <span className="iv-live-mini-dot"/>

            Live Transcript

          </div>



          <button
            className="iv-transcript-copy"
            title="Copy transcript"
            onClick={onCopyTranscript}
            type="button"
          >

            <Copy size={13}/>

          </button>


        </div>





        <div className="iv-transcript-text">


          {finalText && (
            <span className="final">
              {finalText}
            </span>
          )}



          {interimText && (
            <span className="interim">
              {interimText}
            </span>
          )}



          {(finalText || interimText) && (
            <span className="iv-transcript-cursor"/>
          )}



        </div>


      </div>



    </div>

  );
}