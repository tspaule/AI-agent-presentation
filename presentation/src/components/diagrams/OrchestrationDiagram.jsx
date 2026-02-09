import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

const steps = [
  { icon: '\u{1F3AF}', label: 'Receive\nGoal' },
  { icon: '\u{1F4DD}', label: 'Plan\nSteps' },
  { icon: '\u26A1', label: 'Execute' },
  { icon: '\u{1F50D}', label: 'Evaluate' },
  { icon: '\u{1F504}', label: 'Adapt' },
  { icon: '\u2705', label: 'Deliver' },
]

export default function OrchestrationDiagram() {
  const { colors } = useTheme()

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 900,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
      }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {/* Step node */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, type: 'spring', bounce: 0.35 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: colors.glassBg,
                border: `1.5px solid ${colors.brandBorder}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 34,
                backdropFilter: 'blur(8px)',
                boxShadow: `0 4px 20px ${colors.shadow}`,
                position: 'relative',
              }}>
                {step.icon}
                {/* Step number badge */}
                <div style={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.brand}, ${colors.brandDark})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#fff',
                }}>
                  {i + 1}
                </div>
              </div>
              <span style={{
                fontSize: 13,
                fontWeight: 600,
                color: colors.textSecondary,
                textAlign: 'center',
                whiteSpace: 'pre-line',
                lineHeight: 1.3,
              }}>
                {step.label}
              </span>
            </motion.div>

            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.35 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 28,
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                <div style={{
                  width: 36,
                  height: 2,
                  background: `linear-gradient(90deg, ${colors.brand}, ${colors.brandLight})`,
                  borderRadius: 1,
                  opacity: 0.5,
                }} />
                <div style={{
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: `8px solid ${colors.brandLight}`,
                  opacity: 0.5,
                }} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
