import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

const blocks = [
  { num: '1', icon: '\u{1F9E0}', label: 'Model', desc: 'The Brain — LLM powering reasoning' },
  { num: '2', icon: '\u{1F4CB}', label: 'Instructions', desc: 'Identity, rules & guardrails' },
  { num: '3', icon: '\u26A1', label: 'Skills', desc: 'Learned capabilities & expertise' },
  { num: '4', icon: '\u{1F527}', label: 'Tools', desc: 'External actions & integrations' },
  { num: '5', icon: '\u{1F4E5}', label: 'Context', desc: 'Task-specific information' },
  { num: '6', icon: '\u{1F4BE}', label: 'Memory', desc: 'Persistent knowledge & recall' },
  { num: '7', icon: '\u{1F3AF}', label: 'Orchestration', desc: 'Planning, sequencing & flow' },
]

export default function AgentStackDiagram() {
  const { colors } = useTheme()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 720,
      margin: '0 auto',
      gap: 10,
    }}>
      {blocks.map((block, i) => (
        <motion.div
          key={block.num}
          initial={{ opacity: 0, x: -50, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.55, ease: 'easeOut' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            width: '100%',
            borderRadius: 14,
            padding: '18px 28px',
            border: `1px solid ${colors.brandBorder}`,
            background: `linear-gradient(90deg, ${colors.brandBg}, transparent)`,
            cursor: 'default',
            position: 'relative',
            overflow: 'hidden',
          }}
          whileHover={{
            border: `1px solid ${colors.brand}`,
            scale: 1.015,
          }}
        >
          {/* Subtle left accent */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: `linear-gradient(180deg, ${colors.brand}, ${colors.brandDark})`,
            borderRadius: '14px 0 0 14px',
            opacity: 0.6,
          }} />

          <span style={{ fontSize: 30, width: 40, textAlign: 'center', flexShrink: 0 }}>
            {block.icon}
          </span>

          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
            minWidth: 0,
          }}>
            <span style={{
              color: colors.text,
              fontWeight: 700,
              fontSize: 20,
              whiteSpace: 'nowrap',
            }}>
              {block.label}
            </span>
            <span style={{ color: colors.textMuted, fontSize: 16 }}>&mdash;</span>
            <span style={{
              color: colors.textSecondary,
              fontSize: 17,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {block.desc}
            </span>
          </div>

          <span style={{
            color: colors.textMuted,
            fontWeight: 700,
            fontSize: 26,
            fontFamily: 'monospace',
            flexShrink: 0,
            opacity: 0.5,
          }}>
            {block.num}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
