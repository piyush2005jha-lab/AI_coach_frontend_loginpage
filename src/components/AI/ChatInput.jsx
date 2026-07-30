import { useRef, useState } from "react";
import { ArrowUp, Square, Mic } from "lucide-react";

function MicButton({ onTranscript, disabled }) {
  const [recording, setRecording] = useState(false);

  // Speech-to-text ready: wire the Web Speech API (SpeechRecognition) or a
  // backend STT endpoint into onTranscript. Recording state + wave UI already work.
  const toggleRecording = () => {
    if (disabled) return;

    if (!recording) {
      setRecording(true);
      // TODO: start SpeechRecognition / MediaRecorder here
    } else {
      setRecording(false);
      // TODO: stop capture, send audio/transcript to onTranscript(text)
      onTranscript?.("");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleRecording}
      disabled={disabled}
      aria-label={recording ? "Stop recording" : "Start voice input"}
      className={`ai-mic-btn ${recording ? "recording" : ""}`}
    >
      {recording ? (
        <span className="ai-wave">
          <span
            className="ai-wave-bar"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="ai-wave-bar"
            style={{ animationDelay: "0.12s" }}
          />
          <span
            className="ai-wave-bar"
            style={{ animationDelay: "0.24s" }}
          />
          <span
            className="ai-wave-bar"
            style={{ animationDelay: "0.36s" }}
          />
        </span>
      ) : (
        <Mic size={16} />
      )}
    </button>
  );
}

export default function ChatInput({
  onSend,
  onStop,
  isStreaming,
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (!value.trim() || isStreaming) return;

    onSend(value);

    setValue("");

    if (textareaRef.current)
      textareaRef.current.style.height = "auto";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const autoGrow = (e) => {
    setValue(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height =
      Math.min(e.target.scrollHeight, 120) + "px";
  };

  return (
    <div className="ai-input-wrap">
      <div className="ai-input-bar">
        <MicButton
          onTranscript={(t) =>
            t && setValue((v) => `${v}${t}`)
          }
          disabled={isStreaming}
        />

        <textarea
          ref={textareaRef}
          className="ai-textarea"
          value={value}
          onChange={autoGrow}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Ask Prepzo anything… (Enter to send, Shift+Enter for new line)"
        />

        {isStreaming ? (
          <button
            className="ai-stop-btn"
            onClick={onStop}
            aria-label="Stop generating"
          >
            <Square
              size={13}
              fill="#090909"
            />
          </button>
        ) : (
          <button
            className="ai-send-btn"
            onClick={handleSend}
            disabled={!value.trim()}
            aria-label="Send message"
          >
            <ArrowUp
              size={16}
              strokeWidth={2.5}
            />
          </button>
        )}
      </div>

      <p className="ai-input-hint">
        Prepzo can be wrong. Verify important answers.
        {" "}
        <kbd>⌘K</kbd>
        {" "}
        to search chats
      </p>
    </div>
  );
}