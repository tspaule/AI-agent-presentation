import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

const tools = [
  { icon: '\u{1F4E7}', label: 'Email', angle: 0 },
  { icon: '\u{1F310}', label: 'Web', angle: 51.4 },
  { icon: '\u{1F4C5}', label: 'Calendar', angle: 102.8 },
  { icon: '\u{1F4CA}', label: 'Database', angle: 154.3 },
  { icon: '\u{1F4C1}', label: 'Files', angle: 205.7 },
  { icon: '\u{1F4B3}', label: 'Payments', angle: 257.1 },
  { icon: '\u{1F4AC}', label: 'Messaging', angle: 308.6 },
]

export default function ToolCallingDiagram() {
  const { colors } = useTheme()
  const size = 500
  const center = size / 2
  const radius = 195

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <div style={{
        position: 'relative',
        width: size,
        height: size,
      }}>
        {/* SVG connection lines */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          viewBox={`0 0 ${size} ${size}`}
        >
          {tools.map((tool, i) => {
            const angle = (tool.angle * Math.PI) / 180
            const x = center + radius * Math.cos(angle)
            const y = center + radius * Math.sin(angle)
            return (
              <motion.line
                key={`line-${i}`}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={colors.brandBorder}
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              />
            )
          })}
        </svg>

        {/* Center agent node */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 110,
            height: 110,
            borderRadius: 22,
            background: `linear-gradient(135deg, ${colors.brand}, ${colors.brandDark})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            boxShadow: `0 0 40px ${colors.brandBg}, 0 0 80px ${colors.brandBg}`,
          }}
        >
          <span style={{ fontSize: 40 }}>{'\u{1F916}'}</span>
        </motion.div>

        {/* Agent label below center node */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            marginTop: 62,
            fontSize: 15,
            fontWeight: 600,
            color: colors.textSecondary,
            whiteSpace: 'nowrap',
            zIndex: 10,
          }}
        >
          Agent
        </motion.div>

        {/* Tool nodes around the circle */}
        {tools.map((tool, i) => {
          const angle = (tool.angle * Math.PI) / 180
          const x = center + radius * Math.cos(angle)
          const y = center + radius * Math.sin(angle)
          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, type: 'spring', bounce: 0.35 }}
              style={{
                position: 'absolute',
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: colors.glassBg,
                border: `1px solid ${colors.glassBorder}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                backdropFilter: 'blur(8px)',
              }}>
                {tool.icon}
              </div>
              <span style={{
                fontSize: 13,
                color: colors.textTertiary,
                fontWeight: 500,
              }}>
                {tool.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
