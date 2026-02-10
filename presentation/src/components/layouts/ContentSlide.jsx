import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function ContentSlide({ title, subtitle, bullets, footnote, accentWord }) {
  const { colors, isDark } = useTheme()

  // Render title with optional accent word in gradient
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return title
    }
    const parts = title.split(accentWord)
    return (
      <>
        {parts[0]}
        <span
          style={{
            background: 'linear-gradient(135deg, #ec4899, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {accentWord}
        </span>
        {parts[1]}
      </>
    )
  }

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Content area - centered with generous padding */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full" style={{ padding: '4vh 4vw', maxWidth: '1400px' }}>
        {/* Subtitle section label */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center"
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

        {/* Title - centered with optional accent word in gradient */}
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
          {renderTitle()}
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

        {/* Bullets - centered with icons, gap-6 spacing */}
        {bullets && (
          <div className="flex flex-col items-center gap-6 w-full">
            {bullets.map((bullet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 text-center"
                style={{ maxWidth: '1000px' }}
              >
                {bullet.icon ? (
                  <span className="shrink-0" style={{ fontSize: '1.6rem', marginTop: '2px' }}>{bullet.icon}</span>
                ) : (
                  <div
                    className="shrink-0"
                    style={{
                      marginTop: '10px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: colors.brand,
                    }}
                  />
                )}
                <div className="text-left">
                  {bullet.heading && (
                    <span
                      style={{
                        color: colors.text,
                        fontWeight: 600,
                        fontSize: '1.6rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {bullet.heading}{' '}
                    </span>
                  )}
                  <span
                    style={{
                      color: colors.textSecondary,
                      fontSize: '1.5rem',
                      lineHeight: 1.7,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    {bullet.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Footnote */}
        {footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center"
            style={{
              marginTop: '40px',
              fontSize: '1.1rem',
              color: colors.textTertiary,
              fontStyle: 'italic',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {footnote}
          </motion.p>
        )}
      </div>
    </div>
  )
}
