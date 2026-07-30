import { useCallback, useRef, useState } from "react";

/**
 * useChat
 * ---------------------------------------------------------------------------
 * Chat state + streaming logic for the Prepzo AI Copilot.
 *
 * Wire-up for a real backend:
 *   Replace `streamReply` below with a fetch to POST /api/chat that returns
 *   a chunked/streamed response body.
 */

let idCounter = 0;
const nextId = () => `msg_${Date.now()}_${idCounter++}`;

export const SUGGESTIONS = [
  {
    id: "generate-interview",
    icon: "target",
    label: "Generate Interview",
    prompt:
      "Generate a mock SDE interview for me based on my recent performance.",
  },
  {
    id: "review-resume",
    icon: "file",
    label: "Review Resume",
    prompt:
      "Review my resume and tell me what to improve for SDE internship applications.",
  },
  {
    id: "explain-dsa",
    icon: "code",
    label: "Explain DSA",
    prompt:
      "Explain sliding window technique with an example problem.",
  },
  {
    id: "analyze-performance",
    icon: "chart",
    label: "Analyze Performance",
    prompt:
      "How can I improve? Analyze my interview performance so far.",
  },
  {
    id: "system-design",
    icon: "layers",
    label: "System Design",
    prompt:
      "Walk me through designing a URL shortener.",
  },
  {
    id: "hr-interview",
    icon: "mic",
    label: "HR Interview",
    prompt:
      "Give me 5 common HR interview questions with strong sample answers.",
  },
];

const DSA_SAMPLE = `Sliding window is used when you need a contiguous subarray...

\`\`\`python
def max_sum_subarray(nums, k):
    window_sum = sum(nums[:k])
    best = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        best = max(best, window_sum)
    return best
\`\`\`
`;

const SYSTEM_DESIGN_SAMPLE = `Let's design a URL shortener end to end...`;

const RESUME_SAMPLE = `A few things I'd tighten up on your resume...`;

const HR_SAMPLE = `Here are 5 HR questions worth prepping...`;

function analyticsPayload() {
  return {
    readiness: 76,
    confidence: 71,
    communication: 68,
    problemSolving: 82,
    recommendedTopics: [
      "Binary Search",
      "Behavioural framing",
      "DBMS fundamentals",
    ],
    expectedImprovement: 9,
  };
}

function mockReplyFor(userText) {
  const t = userText.toLowerCase();

  if (
    t.includes("how can i improve") ||
    t.includes("improve") ||
    t.includes("analyze")
  ) {
    return {
      text: `Based on your last 5 mock interviews...`,
      analytics: analyticsPayload(),
    };
  }

  if (t.includes("dsa") || t.includes("sliding window")) {
    return { text: DSA_SAMPLE };
  }

  if (t.includes("system design")) {
    return { text: SYSTEM_DESIGN_SAMPLE };
  }

  if (t.includes("resume")) {
    return { text: RESUME_SAMPLE };
  }

  if (t.includes("hr")) {
    return { text: HR_SAMPLE };
  }

  if (
    t.includes("generate interview") ||
    t.includes("mock interview")
  ) {
    return {
      text: `Starting a Software Engineer mock interview...`,
    };
  }

  return {
    text: `Got it — here's my take...`,
  };
}

function makeConversation(title = "New chat") {
  return {
    id: `conv_${Date.now()}_${idCounter++}`,
    title,
    createdAt: Date.now(),
    messages: [],
  };
}

export function useChat() {
  const [conversations, setConversations] = useState([
    makeConversation("Welcome"),
  ]);

  const [activeId, setActiveId] = useState(
    () => conversations[0]?.id
  );

  const [isStreaming, setIsStreaming] = useState(false);

  const abortRef = useRef(null);

  const active =
    conversations.find((c) => c.id === activeId) ||
    conversations[0];

  const messages = active?.messages || [];

  const updateActive = useCallback(
    (updater) => {
      setConversations((prev) =>
        prev.map((c) =>
          c.id === activeId
            ? { ...c, ...updater(c) }
            : c
        )
      );
    },
    [activeId]
  );

  const appendToLastMessage = useCallback(
    (chunk) => {
      updateActive((c) => {
        const msgs = [...c.messages];
        const last = msgs[msgs.length - 1];

        if (last && last.role === "assistant") {
          msgs[msgs.length - 1] = {
            ...last,
            content: last.content + chunk,
          };
        }

        return { messages: msgs };
      });
    },
    [updateActive]
  );

  const streamReply = useCallback(
    async (userText, signal) => {
      const { text, analytics } =
        mockReplyFor(userText);

      const tokens = text.split(/(\s+)/);

      for (const tok of tokens) {
        if (signal.aborted) return;

        appendToLastMessage(tok);

        await new Promise((r) =>
          setTimeout(r, 12 + Math.random() * 18)
        );
      }

      if (analytics) {
        updateActive((c) => {
          const msgs = [...c.messages];
          const last = msgs[msgs.length - 1];

          msgs[msgs.length - 1] = {
            ...last,
            analytics,
          };

          return { messages: msgs };
        });
      }
    },
    [appendToLastMessage, updateActive]
  );

  const send = useCallback(
    async (text) => {
      const trimmed = text.trim();

      if (!trimmed || isStreaming) return;

      const userMsg = {
        id: nextId(),
        role: "user",
        content: trimmed,
        createdAt: Date.now(),
      };

      const assistantMsg = {
        id: nextId(),
        role: "assistant",
        content: "",
        createdAt: Date.now(),
      };

      updateActive((c) => ({
        messages: [
          ...c.messages,
          userMsg,
          assistantMsg,
        ],
        title:
          c.messages.length === 0
            ? trimmed.slice(0, 40)
            : c.title,
      }));

      const controller = new AbortController();

      abortRef.current = controller;

      setIsStreaming(true);

      try {
        await streamReply(
          trimmed,
          controller.signal
        );
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [isStreaming, streamReply, updateActive]
  );
    const stop = useCallback(() => {
    abortRef.current?.abort();
    setIsStreaming(false);
  }, []);

  const regenerate = useCallback(() => {
    if (isStreaming) return;

    updateActive((c) => {
      const msgs = [...c.messages];

      let lastUserIdx = -1;

      for (let i = msgs.length - 1; i >= 0; i--) {
        if (msgs[i].role === "user") {
          lastUserIdx = i;
          break;
        }
      }

      if (lastUserIdx === -1) return {};

      const trimmedMsgs = msgs.slice(
        0,
        lastUserIdx + 1
      );

      return {
        messages: [
          ...trimmedMsgs,
          {
            id: nextId(),
            role: "assistant",
            content: "",
            createdAt: Date.now(),
          },
        ],
      };
    });

    const lastUser = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    if (!lastUser) return;

    const controller = new AbortController();

    abortRef.current = controller;

    setIsStreaming(true);

    streamReply(
      lastUser.content,
      controller.signal
    ).finally(() => {
      setIsStreaming(false);
      abortRef.current = null;
    });
  }, [
    isStreaming,
    messages,
    streamReply,
    updateActive,
  ]);

  const newChat = useCallback(() => {
    const conv = makeConversation("New chat");

    setConversations((prev) => [conv, ...prev]);

    setActiveId(conv.id);
  }, []);

  const clearChat = useCallback(() => {
    updateActive(() => ({
      messages: [],
      title: "New chat",
    }));
  }, [updateActive]);

  const selectConversation = useCallback(
    (id) => setActiveId(id),
    []
  );

  const deleteConversation = useCallback(
    (id) => {
      setConversations((prev) => {
        const next = prev.filter(
          (c) => c.id !== id
        );

        if (next.length === 0) {
          const conv =
            makeConversation("New chat");

          setActiveId(conv.id);

          return [conv];
        }

        if (id === activeId)
          setActiveId(next[0].id);

        return next;
      });
    },
    [activeId]
  );

  return {
    conversations,
    activeConversation: active,
    messages,
    isStreaming,
    send,
    stop,
    regenerate,
    newChat,
    clearChat,
    selectConversation,
    deleteConversation,
    suggestions: SUGGESTIONS,
  };
}