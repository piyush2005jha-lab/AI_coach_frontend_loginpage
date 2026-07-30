import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Copy, Check, RotateCcw, Sparkles, TrendingUp } from "lucide-react";

function CodeBlock({ inline, className, children }) {
  const match = /language-(\w+)/.exec(className || "");
  const code = String(children).replace(/\n$/, "");
  const [copied, setCopied] = useState(false);

  if (inline) {
    return <code className={className}>{children}</code>;
  }

  return (
    <div className="ai-code-block">
      <div className="ai-code-header">
        <span>{match?.[1] || "code"}</span>

        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <SyntaxHighlighter
        language={match?.[1]}
        style={atomOneDark}
        customStyle={{
          margin: 0,
          background: "#0d0d0d",
          fontSize: "0.8rem",
          padding: "0.9rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="ai-metric">
      <div className="ai-metric-top">
        <span className="label">{label}</span>
        <span className="value">{value}%</span>
      </div>

      <div className="ai-metric-track">
        <div
          className="ai-metric-fill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function AnalyticsCard({ data }) {
  if (!data) return null;

  return (
    <div className="ai-analytics">
      <div className="ai-analytics-head">
        <span className="title">Readiness snapshot</span>

        <span className="delta">
          <TrendingUp size={12} />
          +{data.expectedImprovement}% expected
        </span>
      </div>

      <div className="ai-analytics-grid">
        <Metric label="Readiness score" value={data.readiness} />
        <Metric label="Confidence" value={data.confidence} />
        <Metric label="Communication" value={data.communication} />
        <Metric
          label="Problem solving"
          value={data.problemSolving}
        />
      </div>

      <div className="ai-analytics-topics">
        <p className="label">Recommended topics</p>

        <div className="ai-topic-chips">
          {data.recommendedTopics.map((t) => (
            <span key={t} className="ai-topic-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Message({
  message,
  isLast,
  isStreaming,
  onRegenerate,
}) {
  const [copied, setCopied] = useState(false);

  const isUser = message.role === "user";

  const copyMessage = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`ai-message-row ${
        isUser ? "user" : "assistant"
      }`}
    >
      <div className="ai-message-col">
        {!isUser && (
          <div className="ai-message-label">
            <Sparkles size={11} />
            <span>Prepzo Copilot</span>
          </div>
        )}

        <div
          className={
            isUser
              ? "ai-bubble-user"
              : "ai-bubble-assistant"
          }
        >
          {message.content ? (
            isUser ? (
              message.content
            ) : (
              <div className="ai-markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code: CodeBlock,
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            )
          ) : (
            isStreaming &&
            isLast && (
              <span
                style={{
                  color: "var(--ai-ink-faint)",
                }}
              >
                …
              </span>
            )
          )}
        </div>

        {message.analytics && (
          <AnalyticsCard data={message.analytics} />
        )}

        {!isUser &&
          message.content &&
          !(isStreaming && isLast) && (
            <div className="ai-message-actions">
              <button onClick={copyMessage}>
                {copied ? (
                  <Check size={12} />
                ) : (
                  <Copy size={12} />
                )}
                {copied ? "Copied" : "Copy"}
              </button>

              {isLast && (
                <button onClick={onRegenerate}>
                  <RotateCcw size={12} />
                  Regenerate
                </button>
              )}
            </div>
          )}
      </div>
    </div>
  );
}