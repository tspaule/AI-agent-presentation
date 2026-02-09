import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

function HorizontalBar({ label, value, icon, delay, color, colors }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4"
    >
      {icon && <span className="shrink-0 text-center" style={{ fontSize: '1.5rem', width: '32px' }}>{icon}</span>}
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <span
            style={{
              color: colors.textSecondary,
              fontSize: '1.2rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {label}
          </span>
          <span
            style={{
              color: colors.text,
              fontWeight: 700,
              fontSize: '1.2rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {value}%
          </span>
        </div>
        <div
          className="w-full overflow-hidden"
          style={{
            height: '14px',
            borderRadius: '7px',
            background: colors.greyBg,
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ delay: delay + 0.3, duration: 0.8, ease: 'easeOut' }}
            style={{
              height: '100%',
              borderRadius: '7px',
              background: color || 'linear-gradient(90deg, #ec4899, #f472b6)',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function PieChart({ segments, delay, colors }) {
  let cumulativePercent = 0
  const total = segments.reduce((a, b) => a + b.value, 0)

  return (
    <motion.div
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.8, type: 'spring' }}
      className="relative mx-auto"
      style={{ width: '224px', height: '224px' }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
        {segments.map((seg, i) => {
          const percent = (seg.value / total) * 100
          const dashArray = `${percent} ${100 - percent}`
          const dashOffset = -cumulativePercent
          cumulativePercent += percent
          return (
            <circle
              key={i}
              cx="50" cy="50" r="40"
              fill="none"
              stroke={seg.color}
              strokeWidth="12"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              pathLength="100"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: colors.text,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          {total}
        </span>
      </div>
    </motion.div>
  )
}

export default function ChartSlide({ title, subtitle, bars, pie, legend, message }) {
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
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Content - centered with generous padding */}
      <div className="relative z-10 flex flex-col items-center w-full" style={{ padding: '5vh 8vw', maxWidth: '1100px' }}>
        {/* Subtitle label */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
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

        {/* Chart content */}
        <div className="flex gap-12 items-center w-full justify-center">
          {/* Bars */}
          {bars && (
            <div className="flex-1 flex flex-col gap-6" style={{ maxWidth: '600px' }}>
              {bars.map((bar, i) => (
                <HorizontalBar
                  key={i}
                  label={bar.label}
                  value={bar.value}
                  icon={bar.icon}
                  delay={0.3 + i * 0.15}
                  color={bar.color}
                  colors={colors}
                />
              ))}
            </div>
          )}

          {/* Pie chart */}
          {pie && (
            <div className="shrink-0">
              <PieChart segments={pie} delay={0.3} colors={colors} />
              {legend && (
                <div className="flex flex-col gap-2 mt-6">
                  {legend.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '3px',
                          background: item.color,
                        }}
                      />
                      <span
                        style={{
                          fontSize: '1rem',
                          color: colors.textSecondary,
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Message at bottom in card */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-10 text-center"
            style={{
              background: colors.glassBg,
              border: `1px solid ${colors.glassBorder}`,
              borderRadius: '16px',
              padding: '16px 28px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span
              style={{
                color: colors.textSecondary,
                fontSize: '1.2rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {message}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
