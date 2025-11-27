"use client";

import { motion } from "motion/react";

export function SolarMascot({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #FFD700 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="relative z-10"
        >
          <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="70%" stopColor="#FFC107" />
              <stop offset="100%" stopColor="#FF9800" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "50px 50px" }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.polygon
                key={i}
                points="50,8 53,22 47,22"
                fill="#FFC107"
                filter="url(#glow)"
                style={{
                  transformOrigin: "50px 50px",
                  transform: `rotate(${angle}deg)`,
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.g>

          <circle
            cx="50"
            cy="50"
            r="25"
            fill="url(#sunGradient)"
            filter="url(#glow)"
          />

          <motion.g
            animate={{
              y: [0, -1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ellipse cx="42" cy="47" rx="4" ry="5" fill="#5D4037" />
            <ellipse cx="58" cy="47" rx="4" ry="5" fill="#5D4037" />
            <ellipse cx="43" cy="46" rx="1.5" ry="2" fill="white" />
            <ellipse cx="59" cy="46" rx="1.5" ry="2" fill="white" />
          </motion.g>

          <motion.path
            d="M 40 56 Q 50 66, 60 56"
            fill="none"
            stroke="#5D4037"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{
              d: [
                "M 40 56 Q 50 66, 60 56",
                "M 40 58 Q 50 68, 60 58",
                "M 40 56 Q 50 66, 60 56",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <ellipse cx="35" cy="54" rx="4" ry="3" fill="#FFAB91" opacity="0.6" />
          <ellipse cx="65" cy="54" rx="4" ry="3" fill="#FFAB91" opacity="0.6" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap"
        style={{ color: "#E65100" }}
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Solstice AI
      </motion.div>
    </div>
  );
}
