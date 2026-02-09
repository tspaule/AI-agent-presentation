import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function QuoteSlide({ quote, attribution, context, large }) {
  const { colors, isDark } = useTheme()

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Centered radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Content - centered with generous padding */}
      <div className="relative z-10 flex flex-col items-center text-center" style={{ padding: '5vh 8vw', maxWidth: '1000px' }}>
        {/* Large decorative opening quote mark in gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="select-none leading-none mb-4"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '10rem',
            lineHeight: 0.8,
            background: 'linear-gradient(135deg, #ec4899, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          &ldquo;
        </motion.div>

        {/* Quote text - Georgia serif, 2.5-3.5rem */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="tracking-tight leading-relaxed mb-10"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: large ? '3.5rem' : '2.5rem',
            color: colors.text,
            fontWeight: 'normal',
          }}
        >
          {quote}
        </motion.blockquote>

        {/* 4px gradient separator line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
          style={{
            width: '60px',
            height: '4px',
            borderRadius: '2px',
            background: colors.gradientLine,
          }}
        />

        {/* Attribution - in brand color */}
        {attribution && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontSize: '1.3rem',
              color: colors.brand,
              fontWeight: 600,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            &mdash; {attribution}
          </motion.p>
        )}

        {/* Context */}
        {context && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              marginTop: '8px',
              fontSize: '1rem',
              color: colors.textTertiary,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {context}
          </motion.p>
        )}
      </div>
    </div>
  )
}
