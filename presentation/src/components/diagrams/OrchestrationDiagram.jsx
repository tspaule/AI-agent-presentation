import { motion } from 'framer-motion'

const steps = [
  { icon: '\u{1F3AF}', label: 'Receive Goal', color: '#ec4899' },
  { icon: '\u{1F4DD}', label: 'Plan Steps', color: '#f472b6' },
  { icon: '\u26A1', label: 'Execute', color: '#ec4899' },
  { icon: '\u{1F50D}', label: 'Evaluate', color: '#f472b6' },
  { icon: '\u{1F504}', label: 'Adapt', color: '#ec4899' },
  { icon: '\u2705', label: 'Deliver', color: '#f472b6' },
]

export default function OrchestrationDiagram() {
  return (
    <div className="flex items-center gap-2 w-full max-w-4xl mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.15, type: 'spring' }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-2xl border border-brand/10 hover:border-brand/40 transition-colors">
              {step.icon}
            </div>
            <span className="text-xs text-white/40 text-center whitespace-nowrap">{step.label}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.3 }}
              className="w-8 h-px bg-gradient-to-r from-brand/40 to-brand/10 mx-1 mt-[-16px]"
            />
          )}
        </div>
      ))}
    </div>
  )
}
