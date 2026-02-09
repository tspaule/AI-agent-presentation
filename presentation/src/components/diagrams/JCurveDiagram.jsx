import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function JCurveDiagram() {
  const { colors } = useTheme()

  // J-curve: slow start, exponential acceleration
  const curvePath = 'M 60 370 Q 100 360 150 348 Q 220 328 290 295 Q 350 260 410 200 Q 450 155 490 95 Q 515 55 550 15'
  const areaPath = `${curvePath} L 550 380 L 60 380 Z`

  // Year markers along the x-axis
  const years = [
    { label: '2020', x: 60 },
    { label: '2022', x: 185 },
    { label: '2024', x: 330 },
    { label: '2026', x: 470 },
    { label: '2028', x: 550 },
  ]

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 780,
      margin: '0 auto',
    }}>
      <svg viewBox="0 0 620 440" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <linearGradient id="jcurve-stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.brandDark} />
            <stop offset="100%" stopColor={colors.brandLight} />
          </linearGradient>
          <linearGradient id="jcurve-area-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.brand} stopOpacity="0.18" />
            <stop offset="100%" stopColor={colors.brand} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[100, 180, 260, 340].map((y) => (
          <line
            key={y}
            x1="60"
            y1={y}
            x2="570"
            y2={y}
            stroke={colors.border}
            strokeWidth="1"
            opacity="0.4"
          />
        ))}

        {/* X axis */}
        <line x1="60" y1="380" x2="570" y2="380" stroke={colors.textTertiary} strokeWidth="1.5" />
        {/* Y axis */}
        <line x1="60" y1="380" x2="60" y2="10" stroke={colors.textTertiary} strokeWidth="1.5" />

        {/* Area fill under curve */}
        <motion.path
          d={areaPath}
          fill="url(#jcurve-area-grad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
        />

        {/* Glow path */}
        <motion.path
          d={curvePath}
          fill="none"
          stroke={colors.brand}
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 2.2, ease: 'easeInOut' }}
        />

        {/* Main curve path */}
        <motion.path
          d={curvePath}
          fill="none"
          stroke="url(#jcurve-stroke-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 2.2, ease: 'easeInOut' }}
        />

        {/* "You are here" marker */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5, type: 'spring' }}
        >
          {/* Pulsing ring */}
          <circle cx="470" cy="138" r="14" fill="none" stroke={colors.brand} strokeWidth="1.5" opacity="0.4">
            <animate attributeName="r" from="14" to="28" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Solid dot */}
          <circle cx="470" cy="138" r="7" fill={colors.brand} />
          {/* Label */}
          <text
            x="490"
            y="130"
            fill={colors.text}
            fontSize="15"
            fontWeight="700"
          >
            You are here
          </text>
          <text
            x="490"
            y="150"
            fill={colors.textTertiary}
            fontSize="13"
          >
            2026
          </text>
        </motion.g>

        {/* Year tick marks */}
        {years.map((yr) => (
          <g key={yr.label}>
            <line
              x1={yr.x}
              y1="380"
              x2={yr.x}
              y2="388"
              stroke={colors.textTertiary}
              strokeWidth="1"
            />
            <text
              x={yr.x}
              y="406"
              fill={colors.textTertiary}
              fontSize="12"
              textAnchor="middle"
            >
              {yr.label}
            </text>
          </g>
        ))}

        {/* Axis labels */}
        <text
          x="315"
          y="435"
          fill={colors.textSecondary}
          fontSize="14"
          textAnchor="middle"
          fontWeight="600"
        >
          Time
        </text>
        <text
          x="18"
          y="200"
          fill={colors.textSecondary}
          fontSize="14"
          textAnchor="middle"
          fontWeight="600"
          transform="rotate(-90, 18, 200)"
        >
          AI Capability
        </text>
      </svg>
    </div>
  )
}
