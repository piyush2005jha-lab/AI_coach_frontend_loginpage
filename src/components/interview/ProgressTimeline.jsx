export default function ProgressTimeline({
  totalQuestions = 5,
  currentIndex = 2,
}) {

  const safeTotal = Math.max(totalQuestions, 1);


  const getStatus = (index) => {

    if (index < currentIndex) {
      return "done";
    }

    if (index === currentIndex) {
      return "current";
    }

    return "upcoming";

  };



  return (

    <div className="iv-timeline-wrap">


      <div className="iv-timeline-title">
        Progress Timeline
      </div>



      <div className="iv-timeline">


        <div className="iv-tl-line" />



        {Array.from(
          { length: safeTotal },
          (_, index) => {

            const status = getStatus(index);


            return (

              <div
                key={index}
                className={`iv-tl-item ${status}`}
              >


                <div
                  className="iv-tl-node"
                  aria-label={`Question ${index + 1} ${status}`}
                >

                  {status === "done"
                    ? "✓"
                    : index + 1
                  }

                </div>



                <div className="iv-tl-label">
                  Q{index + 1}
                </div>


              </div>

            );

          }

        )}



      </div>


    </div>

  );
}