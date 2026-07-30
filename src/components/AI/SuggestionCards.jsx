import {
  Sparkles,
  Target,
  FileText,
  Code2,
  BarChart3,
  Layers3,
  Mic,
} from "lucide-react";

const iconMap = {
  target: <Target size={20} />,
  file: <FileText size={20} />,
  code: <Code2 size={20} />,
  chart: <BarChart3 size={20} />,
  layers: <Layers3 size={20} />,
  mic: <Mic size={20} />,
};

export default function SuggestionCards({
  userName = "Piyush",
  suggestions = [],
  onPick,
}) {
  const defaults = [
    {
      icon: "target",
      title: "Mock Interview",
      prompt:
        "Generate a mock SDE interview based on my recent performance.",
    },
    {
      icon: "file",
      title: "Resume Review",
      prompt:
        "Review my resume and suggest improvements for software internships.",
    },
    {
      icon: "code",
      title: "DSA Help",
      prompt:
        "Explain the sliding window technique with examples.",
    },
    {
      icon: "chart",
      title: "Performance Analysis",
      prompt:
        "Analyze my interview performance and tell me where I need improvement.",
    },
    {
      icon: "layers",
      title: "System Design",
      prompt:
        "Walk me through designing a URL shortener.",
    },
    {
      icon: "mic",
      title: "HR Questions",
      prompt:
        "Give me the top HR interview questions with sample answers.",
    },
  ];

  const cards = suggestions.length ? suggestions : defaults;

  return (
    <div className="ai-suggestions">
      <div className="ai-suggestions-header">
        <div className="ai-suggestions-icon">
          <Sparkles size={22} />
        </div>

        <h2>Hello, {userName} 👋</h2>

        <p>
          I'm <strong>Prepzo Copilot</strong>. How can I help you prepare today?
        </p>
      </div>

      <div className="ai-suggestion-grid">
        {cards.map((item, index) => (
          <button
            key={index}
            className="ai-suggestion-card"
            onClick={() => onPick(item.prompt)}
          >
            <div className="icon">
              {iconMap[item.icon]}
            </div>

            <div className="content">
              <h4>{item.title}</h4>
              <p>{item.prompt}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}