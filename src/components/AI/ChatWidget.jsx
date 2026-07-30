import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";

import ChatWindow from "./ChatWindow";

import "../../styles/assistant.css";

export default function ChatWidget({ userName }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="copilot-fab"
        onClick={() => setOpen(true)}
      >
        <Sparkles size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="copilot-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="copilot-panel"
              initial={{ x: 450 }}
              animate={{ x: 0 }}
              exit={{ x: 450 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
            >
              <button
                className="copilot-close"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>

              <ChatWindow
                userName={userName}
                showClose={false}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}