import { useEffect, useState } from "react";
import "../../styles/dashboard/resumeCard.css";

const PERSONAS = ["Friendly HR", "Strict tech lead", "Bar raiser"];

export default function ResumeCard() {
  const [dragging, setDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [xpWidth, setXpWidth] = useState(0);
  const [activePersona, setActivePersona] = useState(PERSONAS[0]);

  useEffect(() => {
    const t = setTimeout(() => setXpWidth(48), 200);
    return () => clearTimeout(t);
  }, []);

  function handleDragOver(e) {
    e.preventDefault();
    setDragging(true);
  }
  function handleDragLeave(e) {
    e.preventDefault();
    setDragging(false);
  }
  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    setUploaded(true);
  }

  return (
    <div className="panel">
      <div className="panel-title">
        <h3>Resume-based mock</h3>
        <span>New</span>
      </div>

      {!uploaded && (
        <div
          className={`upload-zone ${dragging ? "drag" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => setUploaded(true)}
        >
          <div className="up-icon">↑</div>
          <h3>Drop your resume PDF</h3>
          <p>Questions written around your actual projects.</p>
        </div>
      )}

      {uploaded && (
        <div className="pdf-thumb">
          <div className="icon">PDF</div>
          <div>
            <div className="name">Piyush_Yadav_Resume.pdf</div>
            <div className="meta">2.1 MB · uploaded just now</div>
          </div>
          <div className="status">✓ Ready</div>
        </div>
      )}

      <div className="xp-row">
        <span>XP progress</span>
        <b>240 / 500 XP</b>
      </div>
      <div className="xp-track">
        <div className="xp-fill" style={{ width: `${xpWidth}%` }} />
      </div>

      <div className="stars">
        <span className="s">★</span>
        <span className="s">★</span>
        <span className="s">★</span>
        <span className="s off">★</span>
        <span className="s off">★</span>
        <span className="lbl">AI-rated questions</span>
      </div>

      <div className="persona-row">
        {PERSONAS.map((persona) => (
          <div
            key={persona}
            className={`persona-chip ${persona === activePersona ? "active" : ""}`}
            onClick={() => setActivePersona(persona)}
          >
            {persona}
          </div>
        ))}
      </div>
    </div>
  );
}
