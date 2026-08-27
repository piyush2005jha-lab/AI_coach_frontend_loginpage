export const resourceCategories = [
  "All Resources",
  "DSA",
  "System Design",
  "Frontend",
  "Backend",
  "Interview Prep",
];

export const resources = [
  {
    id: 1,
    category: "DSA",
    type: "CHEAT SHEET",
    title: "Data Structures & Algorithms",
    description:
      "Core patterns, complexity concepts and problem-solving techniques for technical interviews.",
    topics: "Arrays · Strings · Trees · Graphs",
    level: "INTERMEDIATE",
    time: "25 min",
    icon: "</>",
  },
  {
    id: 2,
    category: "System Design",
    type: "GUIDE",
    title: "System Design Fundamentals",
    description:
      "Learn the building blocks behind scalable systems and how to approach design interviews.",
    topics: "Scalability · APIs · Databases",
    level: "INTERMEDIATE",
    time: "35 min",
    icon: "◈",
  },
  {
    id: 3,
    category: "Frontend",
    type: "ROADMAP",
    title: "Frontend Interview Roadmap",
    description:
      "A structured path covering JavaScript, React, browser fundamentals and frontend architecture.",
    topics: "JavaScript · React · Web",
    level: "BEGINNER",
    time: "30 min",
    icon: "⌘",
  },
  {
    id: 4,
    category: "Backend",
    type: "GUIDE",
    title: "Backend Engineering Essentials",
    description:
      "Review APIs, authentication, databases and backend architecture before your next mock.",
    topics: "Node.js · APIs · MongoDB",
    level: "INTERMEDIATE",
    time: "28 min",
    icon: "DB",
  },
  {
    id: 5,
    category: "Interview Prep",
    type: "PLAYBOOK",
    title: "Technical Interview Playbook",
    description:
      "A practical framework for communicating your approach, solving problems and handling follow-ups.",
    topics: "Communication · Strategy · Confidence",
    level: "ALL LEVELS",
    time: "20 min",
    icon: "✦",
  },
  {
    id: 6,
    category: "DSA",
    type: "PRACTICE",
    title: "Top 50 Interview Patterns",
    description:
      "Practice the most reusable coding patterns that frequently appear in technical interviews.",
    topics: "Sliding Window · DP · BFS · DFS",
    level: "ADVANCED",
    time: "45 min",
    icon: "↗",
  },
];

export const featuredResource = {
  type: "AI CURATED",
  title: "Your personalized preparation path",
  description:
    "Based on your recent mocks, AI recommends focusing on Dynamic Programming and System Design next.",
  progress: 68,
  current: "Dynamic Programming",
  next: "System Design",
};