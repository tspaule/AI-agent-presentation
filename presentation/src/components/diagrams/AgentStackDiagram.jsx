import { motion } from 'framer-motion'

const blocks = [
  { num: '1', icon: '\u{1F9E0}', label: 'Model', desc: 'The Brain', color: '#ec4899' },
  { num: '2', icon: '\u{1F4CB}', label: 'Instructions', desc: 'Identity & Rules', color: '#f472b6' },
  { num: '3', icon: '\u26A1', label: 'Skills', desc: 'Learned Capabilities', color: '#ec4899' },
  { num: '4', icon: '\u{1F527}', label: 'Tools', desc: 'Actions', color: '#f472b6' },
  { num: '5', icon: '\u{1F4E5}', label: 'Context', desc: 'Task-Specific Info', color: '#ec4899' },
  { num: '6', icon: '\u{1F4BE}', label: 'Memory', desc: 'Persistence', color: '#f472b6' },
  { num: '7', icon: '\u{1F3AF}', label: 'Orchestration', desc: 'Planning & Sequencing', color: '#ec4899' },
]

export default function AgentStackDiagram() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-4 rounded-xl px-6 py-3.5 border border-white/5 group hover:border-brand/30 transition-colors"
          style={{ background: `linear-gradient(90deg, rgba(236,72,153,${0.03 + i * 0.01}), transparent)` }}
        >
          <span className="text-2xl w-8">{block.icon}</span>
          <div className="flex-1 flex items-baseline gap-3">
            <span className="text-white font-bold text-lg">{block.label}</span>
            <span className="text-white/30 text-sm">&mdash;</span>
            <span className="text-white/50 text-base">{block.desc}</span>
          </div>
          <span className="text-white/10 font-bold text-xl font-mono">{block.num}</span>
        </motion.div>
      ))}
    </div>
  )
}
