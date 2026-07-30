import { Settings, History, X, Bot } from "lucide-react";

export default function ChatHeader({
  onOpenHistory,
  onOpenSettings,
  onClose,
  showClose,
}) {
  return (
    <div className="ai-header">
      <div className="ai-header-left">
        <div className="ai-header-icon">
          <Bot size={16} />
        </div>

        <div>
          <p className="ai-header-title">Prepzo Copilot</p>

          <div className="ai-header-meta">
            <span className="ai-status-dot" />
            <span>Online</span>

            <span>·</span>

            <span className="ai-model">GPT-5</span>
          </div>
        </div>
      </div>

      <div className="ai-header-actions">
        <button
          className="ai-icon-btn"
          onClick={onOpenHistory}
          aria-label="Conversation history"
        >
          <History size={15} />
        </button>

        <button
          className="ai-icon-btn"
          onClick={onOpenSettings}
          aria-label="Settings"
        >
          <Settings size={15} />
        </button>

        {showClose && (
          <button
            className="ai-icon-btn close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}