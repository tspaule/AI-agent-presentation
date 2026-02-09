import { motion } from 'framer-motion'

export default function JCurveDiagram() {
  // J-curve path data
  const pathD = 'M 40 350 Q 80 340 120 330 Q 200 310 280 280 Q 340 250 400 200 Q 440 160 480 100 Q 500 60 530 20'

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <svg viewBox="0 0 600 400" className="w-full h-auto">
        {/* Grid lines */}
        {[100, 200, 300].map((y) => (
          <line key={y} x1="40" y1={y} x2="560" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        ))}

        {/* Axis */}
        <line x1="40" y1="360" x2="560" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="40" y1="360" x2="40" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* J-curve path - glow */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="rgba(236,72,153,0.2)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 2, ease: 'easeInOut' }}
        />

        {/* J-curve path - main */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#brandGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 2, ease: 'easeInOut' }}
        />

        {/* Area fill under curve */}
        <motion.path
          d={`${pathD} L 530 360 L 40 360 Z`}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />

        {/* "You are here" marker */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.5, type: 'spring' }}
        >
          <circle cx="440" cy="160" r="6" fill="#ec4899" />
          <circle cx="440" cy="160" r="12" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" from="12" to="24" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="456" y="155" fill="white" fontSize="13" fontWeight="600">You are here</text>
          <text x="456" y="172" fill="rgba(255,255,255,0.4)" fontSize="11">2026</text>
        </motion.g>

        {/* Axis labels */}
        <text x="300" y="390" fill="rgba(255,255,255,0.3)" fontSize="12" textAnchor="middle">Time</text>
        <text x="15" y="190" fill="rgba(255,255,255,0.3)" fontSize="12" textAnchor="middle" transform="rotate(-90, 15, 190)">AI Capability</text>

        {/* Gradients */}
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(236,72,153,0.1)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
