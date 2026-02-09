import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function ComparisonSlide({ title, subtitle, left, right, message }) {
  const { colors, isDark } = useTheme()

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Background grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content - centered with generous padding */}
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center" style={{ padding: '5vh 8vw', maxWidth: '1200px' }}>
        {/* Subtitle label */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 text-center"
          >
            <span
              style={{
                fontSize: '0.875rem',
                color: colors.brand,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {subtitle}
            </span>
          </motion.div>
        )}

        {/* Centered title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="tracking-tight text-center leading-tight mb-4"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '3.5rem',
            fontWeight: 'normal',
            color: colors.text,
          }}
        >
          {title}
        </motion.h2>

        {/* 4px gradient separator line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
          style={{
            width: '80px',
            height: '4px',
            borderRadius: '2px',
            background: colors.gradientLine,
          }}
        />

        {/* Two-column grid */}
        <div className="grid grid-cols-2 gap-8 w-full" style={{ maxHeight: '55vh' }}>
          {/* LEFT card - grey border-left (old/basic style) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col"
            style={{
              background: colors.bgCard,
              border: `1px solid ${colors.border}`,
              borderLeft: `4px solid ${colors.grey}`,
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              {left.icon && <span style={{ fontSize: '1.8rem' }}>{left.icon}</span>}
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: colors.text,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                {left.title}
              </h3>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {left.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span
                    style={{
                      color: colors.textTertiary,
                      marginTop: '2px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    {item.icon || '>'}
                  </span>
                  <span
                    style={{
                      color: colors.textSecondary,
                      fontSize: '1.15rem',
                      lineHeight: 1.6,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT card - pink border-left with pink bg tint (new/power style) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(219,39,119,0.04))'
                : 'linear-gradient(135deg, rgba(236,72,153,0.06), rgba(219,39,119,0.02))',
              border: `1px solid ${colors.brandBorder}`,
              borderLeft: `4px solid ${colors.brand}`,
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              {right.icon && <span style={{ fontSize: '1.8rem' }}>{right.icon}</span>}
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: colors.text,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                {right.title}
              </h3>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {right.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span
                    style={{
                      color: colors.brand,
                      marginTop: '2px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    {item.icon || '>'}
                  </span>
                  <span
                    style={{
                      color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.75)',
                      fontSize: '1.15rem',
                      lineHeight: 1.6,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <span
              style={{
                fontSize: '1.3rem',
                color: colors.brand,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'italic',
              }}
            >
              &ldquo;{message}&rdquo;
            </span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
