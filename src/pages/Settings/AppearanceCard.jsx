import { useState } from "react";

export default function AppearanceCard() {
  const [theme, setTheme] = useState("Dark");
  const [accent, setAccent] = useState("Gold");

  const accents = [
    "Gold",
    "Green",
    "Blue",
    "Purple",
    "Red",
  ];

  return (
    <section className="settings-card appearance-card">

      <div className="settings-card-heading">

        <div className="settings-card-icon">
          ☼
        </div>

        <div>

          <h2>
            Appearance
          </h2>

          <p>
            Customize the look and feel of Prepzo.
          </p>

        </div>

      </div>


      {/* THEME */}

      <div className="setting-group">

        <label>
          Theme
        </label>

        <div className="theme-options">

          {["Dark", "Light", "System"].map(
            (option) => (

              <button
                key={option}
                type="button"
                className={
                  theme === option
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setTheme(option)
                }
              >

                <span className="radio-dot" />

                {option}

                {theme === option && (
                  <span className="selected-dot">
                    •
                  </span>
                )}

              </button>

            )
          )}

        </div>

      </div>


      {/* ACCENT */}

      <div className="setting-group">

        <label>
          Accent Color
        </label>

        <div className="accent-options">

          {accents.map((color) => (

            <button
              key={color}
              type="button"
              aria-label={color}
              className={`accent-${color.toLowerCase()} ${
                accent === color ? "active" : ""
              }`}
              onClick={() =>
                setAccent(color)
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
}