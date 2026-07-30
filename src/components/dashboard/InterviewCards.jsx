import { useEffect, useState } from "react";
import "../../styles/dashboard/interviewCards.css";

const CARDS = [
  {
    no: "I — HR ROUND",
    title: "Culture and comms",
    desc: "Behavioural, culture-fit and soft-skill questions.",
    mastery: 60,
  },
  {
    no: "II — SOFTWARE ROUND",
    title: "Technical assessment",
    desc: "DSA, problem-solving and system design questions.",
    mastery: 30,
  },
  {
    no: "III — SYSTEM DESIGN",
    title: "Architecture deep-dive",
    desc: "Scalability, trade-offs and design walkthroughs.",
    mastery: 18,
  },
];

export default function InterviewCards() {
  const [widths, setWidths] = useState(CARDS.map(() => 0));

  useEffect(() => {
    const t = setTimeout(() => setWidths(CARDS.map((c) => c.mastery)), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="section-head">
        <div>
          <div className="section-heading">
  <div>
    <span className="section-tag">INTERVIEWS</span>

    <h2>Choose Your Interview Type</h2>

  </div>

</div>
          <div className="sub">Select a category to start a new session</div>
        </div>
        <div className="link">View history →</div>
      </div>

      <div className="types">
        {CARDS.map((card, i) => (
          <div className="tcard" key={card.no}>
            <div className="no">{card.no}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="mtrack">
              <div className="mfill" style={{ width: `${widths[i]}%` }} />
            </div>
            <div className="mrow">
              <span>Mastery</span>
              <span>{card.mastery}%</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
