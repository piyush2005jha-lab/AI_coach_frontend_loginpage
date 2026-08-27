import { Maximize2, Settings } from "lucide-react";


const DEFAULT_METRICS = [
  { emoji: "👁", label: "Eye Contact", value: 82 },
  { emoji: "💪", label: "Confidence", value: 70 },
  { emoji: "🎯", label: "Attention", value: 91 },
  { emoji: "🪑", label: "Posture", value: 88 },
  { emoji: "📷", label: "Face Visibility", value: 100 },
];


const DEFAULT_FEEDBACK = [
  {
    type: "good",
    text: "Maintaining good eye contact.",
  },
  {
    type: "warn",
    text: "Looking away frequently.",
  },
  {
    type: "warn",
    text: "Try sitting upright.",
  },
];



export default function CameraAnalysis({
  metrics = DEFAULT_METRICS,
  feedback = DEFAULT_FEEDBACK,
  onExpand,
  onSettings,
}) {


  return (

    <div className="iv-camera-module">


      <div className="iv-label">
        AI Camera Analysis
      </div>



      <div className="iv-camera-panel">


        {/* Camera Preview */}
        <div className="iv-camera-preview">


          <div className="iv-cam-badge-row">


            <div className="iv-cam-live">

              <span className="dot" />

              LIVE

            </div>



            <div className="iv-cam-vision-badge">
              AI Vision
            </div>


          </div>




          <div className="iv-cam-face-icon">

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >

              <path d="M23 19v-3a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />

              <path d="M1 19v-3a4 4 0 013-3.87M12.5 3a4 4 0 110 8 4 4 0 010-8z" />

            </svg>

          </div>





          <div className="iv-cam-controls">


            <button
              type="button"
              className="iv-cam-icon-btn"
              title="Expand"
              onClick={onExpand}
            >

              <Maximize2 size={11}/>

            </button>



            <button
              type="button"
              className="iv-cam-icon-btn"
              title="Camera settings"
              onClick={onSettings}
            >

              <Settings size={11}/>

            </button>


          </div>


        </div>






        {/* Metrics */}
        <div className="iv-cam-metrics">


          {metrics.map((metric) => {


            const value = Math.min(
              100,
              Math.max(0, metric.value)
            );


            return (

              <div
                key={metric.label}
                className="iv-cam-metric-row"
              >


                <div className="iv-cam-metric-top">


                  <div className="iv-cam-metric-name">

                    {metric.emoji} {metric.label}

                    <span className="iv-cam-metric-live"/>

                  </div>



                  <div className="iv-cam-metric-pct">

                    {value}%

                  </div>


                </div>



                <div className="iv-cam-metric-bar">

                  <i
                    style={{
                      width:`${value}%`
                    }}
                  />

                </div>


              </div>

            );


          })}


        </div>






        {/* Feedback */}
        <div className="iv-cam-feedback">


          <div className="iv-cam-feedback-title">


            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >

              <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z"/>

            </svg>


            AI Vision Feedback


          </div>





          {feedback.map((item,index)=>(

            <div
              key={index}
              className={`iv-cam-feedback-line ${item.type}`}
            >

              <span className="fdot"/>

              {item.text}

            </div>

          ))}



        </div>



      </div>


    </div>

  );
}