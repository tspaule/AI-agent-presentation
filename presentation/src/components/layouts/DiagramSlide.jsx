import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function DiagramSlide({ title, subtitle, children, message }) {
  const { colors, isDark } = useTheme()

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.5,
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content - centered with generous padding */}
      <div className="relative z-10 flex flex-col items-center w-full h-full" style={{ padding: '4vh 4vw', maxWidth: '1500px' }}>
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
            fontSize: '4rem',
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
          className="mb-8"
          style={{
            width: '80px',
            height: '4px',
            borderRadius: '2px',
            background: colors.gradientLine,
          }}
        />

        {/* Flexible children area for custom diagrams */}
        <div className="flex-1 flex items-center justify-center w-full">
          {children}
        </div>

        {/* Message at bottom */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-center mt-6"
            style={{
              fontSize: '1.5rem',
              color: colors.brand,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
            }}
          >
            &ldquo;{message}&rdquo;
          </motion.p>
        )}
      </div>
    </div>
  )
}
