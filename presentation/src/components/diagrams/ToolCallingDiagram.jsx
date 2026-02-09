import { motion } from 'framer-motion'

const tools = [
  { icon: '\u{1F4E7}', label: 'Email', angle: 0 },
  { icon: '\u{1F310}', label: 'Web', angle: 51 },
  { icon: '\u{1F4C5}', label: 'Calendar', angle: 102 },
  { icon: '\u{1F4CA}', label: 'Database', angle: 153 },
  { icon: '\u{1F4C1}', label: 'Files', angle: 204 },
  { icon: '\u{1F4B3}', label: 'Payments', angle: 255 },
  { icon: '\u{1F4AC}', label: 'Messaging', angle: 306 },
]

export default function ToolCallingDiagram() {
  const radius = 160

  return (
    <div className="relative w-[420px] h-[420px] mx-auto">
      {/* Connection lines */}
      {tools.map((tool, i) => {
        const angle = (tool.angle * Math.PI) / 180
        const x = 210 + radius * Math.cos(angle)
        const y = 210 + radius * Math.sin(angle)
        return (
          <motion.div
            key={`line-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.05 }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          >
            <svg className="absolute inset-0 w-full h-full">
              <motion.line
                x1="210" y1="210"
                x2={x} y2={y}
                stroke="rgba(236,72,153,0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              />
            </svg>
          </motion.div>
        )
      })}

      {/* Center - Agent */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center z-10 glow-brand"
      >
        <span className="text-3xl">{'\u{1F916}'}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-14 text-sm text-white/50 font-semibold whitespace-nowrap"
      >
        Agent
      </motion.div>

      {/* Tool nodes */}
      {tools.map((tool, i) => {
        const angle = (tool.angle * Math.PI) / 180
        const x = 210 + radius * Math.cos(angle)
        const y = 210 + radius * Math.sin(angle)
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: x - 28, top: y - 28 }}
          >
            <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-2xl hover:border-brand/40 transition-colors">
              {tool.icon}
            </div>
            <span className="text-xs text-white/40">{tool.label}</span>
          </motion.div>
        )
      })}
    </div>
  )
}
