import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function BuildingBlockSlide({ number, icon, title, subtitle, keyInsight, example, details }) {
  const { colors, isDark } = useTheme()

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Large faded background number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          style={{
            fontSize: '20rem',
            fontWeight: 'bold',
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)',
            lineHeight: 1,
          }}
        >
          {number}
        </span>
      </div>

      {/* Content - CENTERED with generous padding */}
      <div className="relative z-10 flex flex-col items-center w-full text-center" style={{ padding: '5vh 8vw', maxWidth: '1000px' }}>
        {/* Section label - small uppercase */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
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
            Building Block {number}
          </span>
        </motion.div>

        {/* Large icon */}
        {icon && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="mb-4"
            style={{ fontSize: '4rem' }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title - centered, Georgia serif */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="tracking-tight text-center leading-tight mb-3"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '3.5rem',
            fontWeight: 'normal',
            color: colors.text,
          }}
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-center mb-8"
            style={{
              fontSize: '1.3rem',
              color: colors.textSecondary,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Key insight in a highlighted card - pink left border accent */}
        {keyInsight && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="w-full mb-6 text-left"
            style={{
              background: colors.brandBg,
              border: `1px solid ${colors.brandBorder}`,
              borderLeft: `4px solid ${colors.brand}`,
              borderRadius: '12px',
              padding: '20px 24px',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                color: colors.brand,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '6px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Key Insight
            </span>
            <span
              style={{
                color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.75)',
                fontSize: '1.3rem',
                lineHeight: 1.6,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {keyInsight}
            </span>
          </motion.div>
        )}

        {/* Details list */}
        {details && (
          <div className="flex flex-col gap-4 w-full mb-6">
            {details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 text-left"
              >
                <div
                  className="shrink-0"
                  style={{
                    marginTop: '10px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: colors.brand,
                  }}
                />
                <span
                  style={{
                    color: colors.textSecondary,
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  {detail}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Example in a subtle card - grey left border accent */}
        {example && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-full text-left"
            style={{
              background: colors.greyBg,
              border: `1px solid ${colors.greyBorder}`,
              borderLeft: `4px solid ${colors.grey}`,
              borderRadius: '12px',
              padding: '20px 24px',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                color: colors.textTertiary,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '6px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Example
            </span>
            <span
              style={{
                color: colors.textSecondary,
                fontSize: '1.15rem',
                fontStyle: 'italic',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              &ldquo;{example}&rdquo;
            </span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
