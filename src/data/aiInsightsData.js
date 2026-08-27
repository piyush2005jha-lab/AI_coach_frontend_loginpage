export const aiInsightsData = {
  readiness: 82,

  stats: [
    {
      label: "READINESS INDEX",
      value: "82%",
      change: "+8 this month",
      type: "good",
      icon: "◉",
    },
    {
      label: "MOCKS ANALYZED",
      value: "12",
      change: "+2 this week",
      type: "gold",
      icon: "▣",
    },
    {
      label: "STRONGEST AREA",
      value: "Software",
      change: "all-time best",
      type: "good",
      icon: "♛",
    },
    {
      label: "TOP PRIORITY",
      value: "DP",
      change: "needs attention",
      type: "warning",
      icon: "!",
    },
  ],

  overview: {
    title: "You're interview-ready.",
    description:
      "Your recent mocks show strong progress in software fundamentals, but there are a few areas that could improve before your next interview.",
    improvement: "+8 points",
    period: "since last month",
  },

  strengths: [
    "Clear technical explanations",
    "Strong JavaScript fundamentals",
    "Good problem decomposition",
  ],

  weaknesses: [
    "Dynamic programming patterns",
    "System design depth",
    "Answer structure under pressure",
  ],

  skills: [
    {
      name: "JavaScript",
      score: 91,
      level: "Excellent",
      type: "excellent",
    },
    {
      name: "React",
      score: 87,
      level: "Strong",
      type: "good",
    },
    {
      name: "System Design",
      score: 79,
      level: "Good",
      type: "good",
    },
    {
      name: "Data Structures",
      score: 72,
      level: "Good",
      type: "average",
    },
    {
      name: "Dynamic Programming",
      score: 58,
      level: "Needs work",
      type: "weak",
    },
    {
      name: "Behavioral",
      score: 84,
      level: "Strong",
      type: "good",
    },
  ],

  recommendations: [
    {
      priority: "HIGH",
      title: "Strengthen Dynamic Programming",
      description:
        "Your last three mocks showed repeated difficulty identifying optimal DP states.",
      action: "Practice 5 DP problems",
      time: "45 min",
    },
    {
      priority: "MEDIUM",
      title: "Improve System Design depth",
      description:
        "You identify the right components but need more depth around scalability and trade-offs.",
      action: "Complete a system design mock",
      time: "60 min",
    },
    {
      priority: "LOW",
      title: "Polish behavioral answers",
      description:
        "Your examples are strong. Structure them more consistently using STAR.",
      action: "Practice 3 responses",
      time: "20 min",
    },
  ],
};