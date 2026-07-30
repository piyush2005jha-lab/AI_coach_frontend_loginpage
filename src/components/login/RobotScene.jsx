import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function RobotScene() {
  const containerRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.4 });

  const leftEyeX = useTransform(springX, [-1, 1], [-3.2, 3.2]);
  const leftEyeY = useTransform(springY, [-1, 1], [-2.2, 2.2]);
  const rightEyeX = useTransform(springX, [-1, 1], [-3.2, 3.2]);
  const rightEyeY = useTransform(springY, [-1, 1], [-2.2, 2.2]);

  const headTiltX = useTransform(springX, [-1, 1], [3, -3]);
  const headTiltY = useTransform(springY, [-1, 1], [-2, 2]);

  useEffect(() => {
    function handlePointerMove(event) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const relY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      pointerX.set(Math.max(-1, Math.min(1, relX)));
      pointerY.set(Math.max(-1, Math.min(1, relY)));
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <div ref={containerRef} className="robot-scene" aria-hidden="true">
      <motion.div
        className="robot-scene__float"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 420 520"
          width="100%"
          height="100%"
          style={{ rotateY: headTiltX, rotateX: headTiltY, overflow: "visible" }}
        >
          <defs>
            <linearGradient id="bodyStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="platformGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ground hologram glow */}
          <ellipse cx="210" cy="486" rx="150" ry="24" fill="url(#platformGlow)" />
          <motion.ellipse
            cx="210"
            cy="486"
            rx="96"
            ry="10"
            fill="#06B6D4"
            opacity="0.35"
            animate={{ rx: [96, 116, 96], opacity: [0.35, 0.15, 0.35] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* orbiting ring particles around body */}
          <motion.g
            style={{ transformOrigin: "210px 300px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="210" cy="150" r="3.4" fill="#06B6D4" opacity="0.8" />
            <circle cx="330" cy="300" r="2.6" fill="#7C3AED" opacity="0.7" />
            <circle cx="210" cy="450" r="2.2" fill="#3B82F6" opacity="0.6" />
          </motion.g>
          <motion.g
            style={{ transformOrigin: "210px 300px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="90" cy="300" r="2.4" fill="#3B82F6" opacity="0.55" />
            <circle cx="210" cy="410" r="2" fill="#06B6D4" opacity="0.5" />
          </motion.g>

          {/* torso */}
          <path
            d="M136 300 C136 250 168 224 210 224 C252 224 284 250 284 300 L284 392 C284 424 252 448 210 448 C168 448 136 424 136 392 Z"
            fill="rgba(124,58,237,0.06)"
            stroke="url(#bodyStroke)"
            strokeWidth="1.6"
            filter="url(#softGlow)"
          />

          {/* shoulder / arm hints */}
          <path
            d="M136 268 C104 276 84 306 88 348"
            fill="none"
            stroke="url(#bodyStroke)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M284 268 C316 276 336 306 332 348"
            fill="none"
            stroke="url(#bodyStroke)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* chest core */}
          <motion.circle
            cx="210"
            cy="318"
            r="30"
            fill="url(#coreGlow)"
            animate={{ scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "210px 318px" }}
          />
          <circle cx="210" cy="318" r="30" fill="none" stroke="#E0F2FE" strokeWidth="1" opacity="0.5" />

          {/* neck */}
          <rect x="196" y="196" width="28" height="30" rx="10" fill="rgba(59,130,246,0.12)" stroke="url(#bodyStroke)" strokeWidth="1.2" />

          {/* head */}
          <motion.g
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "210px 140px" }}
          >
            <rect
              x="140"
              y="70"
              width="140"
              height="120"
              rx="46"
              fill="rgba(6,182,212,0.05)"
              stroke="url(#bodyStroke)"
              strokeWidth="1.6"
              filter="url(#softGlow)"
            />
            {/* visor */}
            <rect x="163" y="118" width="94" height="34" rx="17" fill="rgba(5,8,22,0.75)" stroke="url(#visorGrad)" strokeWidth="1.2" />

            {/* eyes */}
            <motion.circle
              cx="188"
              cy="135"
              r="7"
              fill="#E0F2FE"
              filter="url(#softGlow)"
              style={{ x: leftEyeX, y: leftEyeY }}
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
            />
            <motion.circle
              cx="232"
              cy="135"
              r="7"
              fill="#E0F2FE"
              filter="url(#softGlow)"
              style={{ x: rightEyeX, y: rightEyeY }}
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
            />

            {/* antenna */}
            <line x1="210" y1="70" x2="210" y2="46" stroke="url(#bodyStroke)" strokeWidth="1.6" />
            <motion.circle
              cx="210"
              cy="40"
              r="6"
              fill="#7C3AED"
              filter="url(#softGlow)"
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.25, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "210px 40px" }}
            />
          </motion.g>
        </motion.svg>
      </motion.div>
    </div>
  );
}
