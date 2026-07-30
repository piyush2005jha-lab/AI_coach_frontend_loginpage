import { useEffect, useRef, useState } from "react";
import { Search, Plus, Trash2, MessageSquare, X } from "lucide-react";
import { useChat } from "../../hooks/useChat.js";
import ChatHeader from "./ChatHeader.jsx";
import SuggestionCards from "./SuggestionCards.jsx";
import Message from "./Message.jsx";
import TypingIndicator from "./TypingIndicator.jsx";
import ChatInput from "./ChatInput.jsx";

function HistoryDrawer({
  open,
  onClose,
  conversations,
  activeId,
  onSelect,
  onDelete,
  onNewChat,
}) {
  const [query, setQuery] = useState("");

  if (!open) return null;

  const filtered = conversations.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="ai-history-overlay" onClick={onClose} />

      <div className="ai-history-drawer">
        <div className="ai-history-header">
          <span className="ai-history-title">History</span>

          <button
            className="ai-icon-btn"
            onClick={onClose}
            aria-label="Close history"
          >
            <X size={16} />
          </button>
        </div>

        <button className="ai-history-newchat" onClick={onNewChat}>
          <Plus size={14} />
          New chat
        </button>

        <div className="ai-history-search">
          <Search size={13} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search conversations"
          />
        </div>

        <div className="ai-history-list">
          {filtered.length === 0 && (
            <p className="ai-history-empty">No conversations found</p>
          )}

          {filtered.map((c) => (
            <button
              key={c.id}
              className={`ai-history-item ${
                c.id === activeId ? "active" : ""
              }`}
              onClick={() => {
                onSelect(c.id);
                onClose();
              }}
            >
              <MessageSquare size={13} />

              <span className="title">{c.title}</span>

              <span
                role="button"
                tabIndex={-1}
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(c.id);
                }}
              >
                <Trash2 size={12} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ChatWindow({
  onClose,
  showClose,
  userName = "Piyush",
}) {
  const chat = useChat();

  const [historyOpen, setHistoryOpen] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat.messages, chat.isStreaming]);

  useEffect(() => {
    const handler = (e) => {
      const isMod = e.metaKey || e.ctrlKey;

      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setHistoryOpen(true);
      }

      if (e.key === "Escape" && showClose) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [showClose, onClose]);

  const isEmpty = chat.messages.length === 0;

  const lastMsg = chat.messages[chat.messages.length - 1];

  return (
    <div className="ai-window">
      <ChatHeader
        onOpenHistory={() => setHistoryOpen(true)}
        onOpenSettings={() => {}}
        onClose={onClose}
        showClose={showClose}
      />

      <HistoryDrawer
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        conversations={chat.conversations}
        activeId={chat.activeConversation?.id}
        onSelect={chat.selectConversation}
        onDelete={chat.deleteConversation}
        onNewChat={chat.newChat}
      />

      <div ref={scrollRef} className="ai-body ai-scroll">
        {isEmpty ? (
          <SuggestionCards
            userName={userName}
            suggestions={chat.suggestions}
            onPick={chat.send}
          />
        ) : (
          <div className="ai-messages">
            {chat.messages.map((m) => (
              <Message
                key={m.id}
                message={m}
                isLast={m.id === lastMsg?.id}
                isStreaming={chat.isStreaming}
                onRegenerate={chat.regenerate}
              />
            ))}

            {chat.isStreaming &&
              lastMsg?.role === "assistant" &&
              !lastMsg.content && <TypingIndicator />}
          </div>
        )}
      </div>

      {!isEmpty && (
        <div className="ai-footer-actions">
          <button
            className="ai-footer-btn danger"
            onClick={chat.clearChat}
          >
            Clear chat
          </button>

          <button
            className="ai-footer-btn"
            onClick={chat.newChat}
          >
            + New chat
          </button>
        </div>
      )}

      <ChatInput
        onSend={chat.send}
        onStop={chat.stop}
        isStreaming={chat.isStreaming}
      />
    </div>
  );
}