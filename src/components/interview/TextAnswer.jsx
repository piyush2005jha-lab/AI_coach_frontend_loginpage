export default function TextAnswer({
  maxLength = 2000,
  placeholder = "Start typing your answer here... structure it as: overview, components, trade-offs.",
  value = "",
  onChange,
  aiAnalyzing = true,
}) {
  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <div className="iv-text-mode">
      <textarea
        className="iv-answer-textarea"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        aria-label="Interview answer"
      />

      <div className="iv-text-meta">
        <div className="iv-char-count">
          {value.length} / {maxLength} characters
        </div>

        {aiAnalyzing && (
          <div className="iv-ai-writing">
            <span className="iv-pulse-dot" />
            AI is analysing your response
          </div>
        )}
      </div>
    </div>
  );
}