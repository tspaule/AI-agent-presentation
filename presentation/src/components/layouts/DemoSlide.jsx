import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function DemoSlide({ title, subtitle, steps, stat, statLabel, imageSrc, message }) {
  const { colors, isDark } = useTheme()

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: colors.bg }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Content - CENTERED with generous padding */}
      <div className="relative z-10 flex flex-col items-center w-full text-center" style={{ padding: '4vh 4vw', maxWidth: '1400px' }}>
        {/* "LIVE DEMO" badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            style={{
              display: 'inline-block',
              background: colors.brandBg,
              color: colors.brand,
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '8px 20px',
              borderRadius: '9999px',
              border: `1px solid ${colors.brandBorder}`,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            Live Demo
          </span>
        </motion.div>

        {/* Large title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="tracking-tight text-center leading-tight mb-3"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '4rem',
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
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
            style={{
              fontSize: '1.5rem',
              color: colors.textSecondary,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Steps and stat/image side by side */}
        <div className="flex gap-12 items-center w-full justify-center">
          {/* Numbered steps with brand-colored numbers */}
          {steps && (
            <div className="flex-1 flex flex-col gap-5" style={{ maxWidth: '700px' }}>
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4 text-left"
                >
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: colors.brandBg,
                      border: `1px solid ${colors.brandBorder}`,
                      marginTop: '2px',
                    }}
                  >
                    <span
                      style={{
                        color: colors.brand,
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span
                    style={{
                      color: colors.textSecondary,
                      fontSize: '1.4rem',
                      lineHeight: 1.6,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stat in highlighted card with glow, or image */}
          {(stat || imageSrc) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="shrink-0"
            >
              {stat && (
                <div
                  className="text-center"
                  style={{
                    background: colors.glassBg,
                    border: `1px solid ${colors.glassBorder}`,
                    borderRadius: '20px',
                    padding: '40px 48px',
                    backdropFilter: 'blur(12px)',
                    boxShadow: `0 0 60px ${isDark ? 'rgba(236,72,153,0.15)' : 'rgba(236,72,153,0.1)'}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: '5rem',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '8px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    {stat}
                  </div>
                  {statLabel && (
                    <div
                      style={{
                        color: colors.textSecondary,
                        fontSize: '1rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {statLabel}
                    </div>
                  )}
                </div>
              )}
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={title}
                  style={{
                    borderRadius: '20px',
                    maxWidth: '360px',
                    boxShadow: `0 25px 50px ${colors.shadow}`,
                  }}
                />
              )}
            </motion.div>
          )}
        </div>

        {/* Message at bottom */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-10 text-center"
          >
            <span
              style={{
                fontSize: '1.4rem',
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
