import { motion } from 'framer-motion'

function HorizontalBar({ label, value, icon, delay, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4"
    >
      {icon && <span className="text-2xl w-8 text-center shrink-0">{icon}</span>}
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <span className="text-white/80 text-lg">{label}</span>
          <span className="text-white font-bold text-lg">{value}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ delay: delay + 0.3, duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{
              background: color || 'linear-gradient(90deg, #ec4899, #f472b6)',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function PieChart({ segments, delay }) {
  let cumulativePercent = 0
  const total = segments.reduce((a, b) => a + b.value, 0)

  return (
    <motion.div
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.8, type: 'spring' }}
      className="relative w-56 h-56 mx-auto"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
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
              className="transition-all duration-1000"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-white">{total}</span>
      </div>
    </motion.div>
  )
}

export default function ChartSlide({ title, subtitle, bars, pie, legend, message }) {
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(236,72,153,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="flex flex-col justify-center px-20 py-16 w-full max-w-5xl mx-auto">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3"
          >
            <span className="text-sm text-brand font-semibold tracking-widest uppercase">{subtitle}</span>
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-5xl font-normal text-white tracking-tight leading-tight mb-12"
        >
          {title}
        </motion.h2>

        <div className="flex gap-16 items-center">
          {/* Bars */}
          {bars && (
            <div className="flex-1 space-y-6">
              {bars.map((bar, i) => (
                <HorizontalBar
                  key={i}
                  label={bar.label}
                  value={bar.value}
                  icon={bar.icon}
                  delay={0.3 + i * 0.15}
                  color={bar.color}
                />
              ))}
            </div>
          )}

          {/* Pie chart */}
          {pie && (
            <div className="flex-shrink-0">
              <PieChart segments={pie} delay={0.3} />
              {legend && (
                <div className="mt-6 space-y-2">
                  {legend.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-3 h-3 rounded-sm" style={{ background: item.color }} />
                      <span className="text-white/60">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-10 glass rounded-xl px-6 py-4 inline-block"
          >
            <span className="text-white/60">{message}</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
