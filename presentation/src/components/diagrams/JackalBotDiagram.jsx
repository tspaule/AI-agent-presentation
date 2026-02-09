import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

const botTools = [
  { icon: '\u{1F4E7}', label: 'Email' },
  { icon: '\u{1F4C5}', label: 'Calendar' },
  { icon: '\u{1F310}', label: 'Web' },
  { icon: '\u{1F4C1}', label: 'Files' },
]

export default function JackalBotDiagram() {
  const { colors } = useTheme()

  const nodeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  }

  const connectorStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 900,
      margin: '0 auto',
      gap: 0,
    }}>
      {/* User node */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={nodeStyle}
      >
        <div style={{
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: colors.glassBg,
          border: `1.5px solid ${colors.glassBorder}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 38,
          backdropFilter: 'blur(8px)',
        }}>
          {'\u{1F464}'}
        </div>
        <span style={{
          fontSize: 15,
          fontWeight: 600,
          color: colors.textSecondary,
        }}>
          You
        </span>
      </motion.div>

      {/* Connector: User -> Discord */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.35 }}
        style={connectorStyle}
      >
        <div style={{
          width: 56,
          height: 2,
          background: `linear-gradient(90deg, ${colors.textTertiary}, ${colors.brandBorder})`,
          borderRadius: 1,
        }} />
        <span style={{ fontSize: 11, color: colors.textTertiary }}>Discord</span>
      </motion.div>

      {/* Discord node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        style={nodeStyle}
      >
        <div style={{
          width: 72,
          height: 72,
          borderRadius: 18,
          background: colors.glassBg,
          border: `1.5px solid ${colors.glassBorder}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
        }}>
          {'\u{1F4AC}'}
        </div>
        <span style={{
          fontSize: 13,
          color: colors.textTertiary,
        }}>
          Discord
        </span>
      </motion.div>

      {/* Connector: Discord -> JackalBot */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.35 }}
        style={connectorStyle}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            width: 48,
            height: 2,
            background: `linear-gradient(90deg, ${colors.brandBorder}, ${colors.brand})`,
            borderRadius: 1,
          }} />
          <div style={{
            width: 0,
            height: 0,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: `8px solid ${colors.brand}`,
          }} />
        </div>
      </motion.div>

      {/* JackalBot central node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.55, type: 'spring', bounce: 0.35 }}
        style={nodeStyle}
      >
        <div style={{ position: 'relative' }}>
          <div style={{
            width: 120,
            height: 120,
            borderRadius: 26,
            background: `linear-gradient(135deg, ${colors.brandBg}, ${colors.brandBg})`,
            border: `2px solid ${colors.brandBorder}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 48,
            boxShadow: `0 0 50px ${colors.brandBg}, 0 0 100px ${colors.brandBg}`,
          }}>
            {'\u{1F916}'}
          </div>
          {/* CLOUD badge */}
          <div style={{
            position: 'absolute',
            top: -10,
            right: -14,
            padding: '3px 10px',
            borderRadius: 6,
            background: `linear-gradient(135deg, ${colors.brand}, ${colors.brandDark})`,
            fontSize: 10,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.08em',
            boxShadow: `0 2px 8px ${colors.shadow}`,
          }}>
            CLOUD
          </div>
        </div>
        <span style={{
          fontSize: 16,
          fontWeight: 700,
          color: colors.brand,
        }}>
          JackalBot
        </span>
        <span style={{
          fontSize: 11,
          color: colors.textTertiary,
          marginTop: -4,
        }}>
          Digital Ocean
        </span>
      </motion.div>

      {/* Connector: JackalBot -> Tools */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.35 }}
        style={connectorStyle}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            width: 48,
            height: 2,
            background: `linear-gradient(90deg, ${colors.brand}, ${colors.brandBorder})`,
            borderRadius: 1,
          }} />
          <div style={{
            width: 0,
            height: 0,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: `8px solid ${colors.brandBorder}`,
          }} />
        </div>
        <span style={{ fontSize: 11, color: colors.textTertiary }}>APIs</span>
      </motion.div>

      {/* Tool nodes */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {botTools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 16px',
              borderRadius: 12,
              background: colors.glassBg,
              border: `1px solid ${colors.glassBorder}`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{ fontSize: 20 }}>{tool.icon}</span>
            <span style={{
              fontSize: 14,
              color: colors.textSecondary,
              fontWeight: 500,
            }}>
              {tool.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
