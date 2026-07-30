import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#7C3AED", "#3B82F6", "#06B6D4"];

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function FloatingParticles({ count = 30 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const r1 = seededRandom(index * 12.9898);
      const r2 = seededRandom(index * 78.233);
      const r3 = seededRandom(index * 37.719);
      const r4 = seededRandom(index * 4.271);

      return {
        id: index,
        top: r1 * 100,
        left: r2 * 100,
        size: 1.5 + r3 * 3,
        duration: 10 + r4 * 14,
        delay: r1 * 8,
        drift: 20 + r3 * 40,
        color: COLORS[index % COLORS.length],
        opacity: 0.25 + r2 * 0.45,
      };
    });
  }, [count]);

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="floating-particles__dot"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -particle.drift, 0],
            x: [0, particle.drift / 3, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
