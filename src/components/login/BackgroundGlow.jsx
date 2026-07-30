import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="background-glow" aria-hidden="true">
      <div className="background-glow__grid" />

      <motion.div
        className="background-glow__orb background-glow__orb--purple"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-glow__orb background-glow__orb--blue"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-glow__orb background-glow__orb--cyan"
        animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="background-glow__sheen"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
