import { useState } from "react";

export default function InterviewPreferences() {
  const [difficulty, setDifficulty] =
    useState("Medium");

  const [duration, setDuration] =
    useState("60 minutes");

  const [questions, setQuestions] =
    useState("Mixed");

  const [language, setLanguage] =
    useState("JavaScript");

  return (
    <section className="settings-card preferences-card">

      <div className="settings-card-heading">

        <div className="settings-card-icon">
          ◉
        </div>

        <div>

          <h2>
            Interview Preferences
          </h2>

          <p>
            Customize your interview experience.
          </p>

        </div>

      </div>


      <PreferenceRow
        label="Default difficulty"
        value={difficulty}
        onChange={setDifficulty}
        options={[
          "Easy",
          "Medium",
          "Hard",
        ]}
      />

      <PreferenceRow
        label="Default duration"
        value={duration}
        onChange={setDuration}
        options={[
          "30 minutes",
          "45 minutes",
          "60 minutes",
          "90 minutes",
        ]}
      />

      <PreferenceRow
        label="Preferred question types"
        value={questions}
        onChange={setQuestions}
        options={[
          "Mixed",
          "Technical",
          "Behavioral",
        ]}
      />

      <PreferenceRow
        label="Coding language"
        value={language}
        onChange={setLanguage}
        options={[
          "JavaScript",
          "Java",
          "Python",
          "C++",
        ]}
      />

    </section>
  );
}


function PreferenceRow({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div className="preference-row">

      <span>
        {label}
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      >

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}