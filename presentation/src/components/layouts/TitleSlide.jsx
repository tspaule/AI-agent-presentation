import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function TitleSlide({ title, subtitle, presenter, date, brandLine }) {
  const { colors, isDark } = useTheme()

  // Split title to gradient the last word
  const words = title ? title.split(' ') : []
  const lastWord = words.length > 0 ? words[words.length - 1] : ''
  const leadingWords = words.slice(0, -1).join(' ')

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* 4px gradient top line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '4px', background: colors.gradientLine }}
      />

      {/* Radial glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-200px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content area with generous padding */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center" style={{ padding: '4vh 4vw' }}>
        {/* Logo mark - pink gradient rounded square with circle inside */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center mb-10"
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #ec4899, #db2777)',
            boxShadow: '0 20px 60px rgba(236, 72, 153, 0.3)',
          }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              width: '36px',
              height: '36px',
              border: '3px solid white',
              borderRadius: '50%',
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: 'white',
                borderRadius: '50%',
              }}
            />
          </div>
        </motion.div>

        {/* Title - Georgia serif ~5rem, last word gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="tracking-tight text-center leading-tight mb-5"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '6rem',
            fontWeight: 'normal',
            color: colors.text,
          }}
        >
          {leadingWords}{leadingWords ? ' ' : ''}
          <span
            style={{
              background: 'linear-gradient(135deg, #ec4899, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {lastWord}
          </span>
        </motion.h1>

        {/* Subtitle - small uppercase tracking */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
            style={{
              fontSize: '1.3rem',
              color: colors.textSecondary,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Presenter pill/badge */}
        {presenter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-3"
            style={{
              background: colors.glassBg,
              border: `1px solid ${colors.glassBorder}`,
              borderRadius: '9999px',
              padding: '12px 28px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span
              style={{
                fontSize: '0.875rem',
                color: colors.textTertiary,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Presented by
            </span>
            <span
              style={{
                fontSize: '1rem',
                color: colors.text,
                fontWeight: 600,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {presenter}
            </span>
          </motion.div>
        )}

        {/* Date */}
        {date && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              marginTop: '16px',
              fontSize: '0.875rem',
              color: colors.textMuted,
              letterSpacing: '0.1em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {date}
          </motion.p>
        )}
      </div>

      {/* Brand line at bottom */}
      {brandLine && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute text-center"
          style={{
            bottom: '32px',
            fontSize: '0.75rem',
            color: colors.textMuted,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          {brandLine}
        </motion.p>
      )}
    </div>
  )
}
