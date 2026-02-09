import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

const chatbotSteps = [
  { icon: '\u{1F464}', text: 'You ask a question', type: 'human' },
  { icon: '\u{1F916}', text: 'AI gives a text answer', type: 'ai' },
  { icon: '\u{1F464}', text: 'You copy the output', type: 'human' },
  { icon: '\u{1F464}', text: 'You paste it somewhere', type: 'human' },
  { icon: '\u{1F464}', text: 'You come back with follow-up', type: 'human' },
  { icon: '\u{1F916}', text: 'AI answers again', type: 'ai' },
  { icon: '\u{1F464}', text: 'You repeat the cycle...', type: 'human' },
]

const agentSteps = [
  { icon: '\u{1F464}', text: 'You set a goal', type: 'human' },
  { icon: '\u{1F9E0}', text: 'Agent plans the approach', type: 'agent' },
  { icon: '\u26A1', text: 'Agent applies expertise', type: 'agent' },
  { icon: '\u{1F527}', text: 'Agent gathers information', type: 'agent' },
  { icon: '\u{1F4E5}', text: 'Agent processes data', type: 'agent' },
  { icon: '\u{1F504}', text: 'Agent iterates & verifies', type: 'agent' },
  { icon: '\u2705', text: 'Agent delivers completed work', type: 'agent' },
]

export default function ChatbotVsAgentDiagram() {
  const { colors } = useTheme()

  const cardBase = {
    borderRadius: 16,
    padding: '28px 24px',
    flex: 1,
    minWidth: 0,
  }

  const stepBase = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '10px 16px',
    borderRadius: 10,
    fontSize: 15,
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      gap: 32,
      width: '100%',
      maxWidth: 960,
      margin: '0 auto',
    }}>
      {/* LEFT: Chatbot */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          ...cardBase,
          background: colors.glassBg,
          border: `1px solid ${colors.glassBorder}`,
          borderLeft: `4px solid ${colors.greyBorder}`,
        }}
      >
        <h3 style={{
          fontSize: 13,
          fontWeight: 700,
          color: colors.textTertiary,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: 20,
        }}>
          Before: Chatbot
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {chatbotSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
              style={{
                ...stepBase,
                background: step.type === 'human' ? colors.greyBg : 'transparent',
                color: step.type === 'human' ? colors.textSecondary : colors.textTertiary,
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0 }}>{step.icon}</span>
              <span>{step.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 18,
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          You are the glue
        </motion.div>
      </motion.div>

      {/* RIGHT: Agent */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          ...cardBase,
          background: colors.brandBg,
          border: `1px solid ${colors.brandBorder}`,
          borderLeft: `4px solid ${colors.brand}`,
        }}
      >
        <h3 style={{
          fontSize: 13,
          fontWeight: 700,
          color: colors.brand,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: 20,
        }}>
          Now: Agent
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {agentSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
              style={{
                ...stepBase,
                background: step.type === 'human' ? colors.greyBg : colors.brandBg,
                color: step.type === 'human' ? colors.textSecondary : colors.text,
                border: step.type === 'agent' ? `1px solid ${colors.brandBorder}` : '1px solid transparent',
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0 }}>{step.icon}</span>
              <span>{step.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: 18,
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 700,
            color: colors.brand,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          The agent is the engine
        </motion.div>
      </motion.div>
    </div>
  )
}
