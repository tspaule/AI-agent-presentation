import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function SectionSlide({ sectionNumber, title, subtitle, icon }) {
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
            fontSize: '30rem',
            fontWeight: 'bold',
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)',
            lineHeight: 1,
          }}
        >
          {sectionNumber}
        </span>
      </div>

      {/* Centered glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 60%)',
        }}
      />

      {/* Content with generous padding */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center" style={{ padding: '5vh 8vw' }}>
        {/* Section pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
          style={{
            background: colors.glassBg,
            border: `1px solid ${colors.glassBorder}`,
            borderRadius: '9999px',
            padding: '8px 20px',
            backdropFilter: 'blur(12px)',
          }}
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
            Section {sectionNumber}
          </span>
        </motion.div>

        {/* Icon */}
        {icon && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            className="mb-8"
            style={{ fontSize: '4rem' }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title - Georgia serif, large */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="tracking-tight text-center leading-tight mb-5"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '4.5rem',
            fontWeight: 'normal',
            color: colors.text,
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
            style={{
              fontSize: '1.4rem',
              color: colors.textSecondary,
              maxWidth: '600px',
              lineHeight: 1.6,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* 4px gradient separator line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
          style={{
            width: '120px',
            height: '4px',
            borderRadius: '2px',
            background: colors.gradientLine,
          }}
        />
      </div>
    </div>
  )
}
