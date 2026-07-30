export default function TypingIndicator() {
  return (
    <div className="ai-typing">
      <span className="label">Prepzo is thinking</span>

      <span className="ai-typing-dots">
        <span
          className="ai-typing-dot"
          style={{ animationDelay: "0s" }}
        />

        <span
          className="ai-typing-dot"
          style={{ animationDelay: "0.15s" }}
        />

        <span
          className="ai-typing-dot"
          style={{ animationDelay: "0.3s" }}
        />
      </span>
    </div>
  );
}