import { motion } from 'framer-motion'

export default function JackalBotDiagram() {
  return (
    <div className="flex items-center justify-center gap-8 w-full max-w-4xl mx-auto">
      {/* User */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-3xl">
          {'\u{1F464}'}
        </div>
        <span className="text-sm text-white/40">You</span>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="flex flex-col items-center gap-1"
      >
        <div className="w-16 h-px bg-gradient-to-r from-white/20 to-brand/40" />
        <span className="text-xs text-white/20">Discord</span>
      </motion.div>

      {/* JackalBot (Cloud) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
        className="flex flex-col items-center gap-3"
      >
        <div className="relative">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-brand/20 to-brand-dark/10 border border-brand/30 flex items-center justify-center text-4xl glow-brand">
            {'\u{1F916}'}
          </div>
          <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-brand rounded text-[10px] text-white font-bold">
            CLOUD
          </div>
        </div>
        <span className="text-sm text-brand font-semibold">JackalBot</span>
        <span className="text-xs text-white/30">Digital Ocean</span>
      </motion.div>

      {/* Arrow to tools */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="flex flex-col items-center gap-1"
      >
        <div className="w-16 h-px bg-gradient-to-r from-brand/40 to-white/20" />
        <span className="text-xs text-white/20">APIs</span>
      </motion.div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        {[
          { icon: '\u{1F4E7}', label: 'Email' },
          { icon: '\u{1F4C5}', label: 'Calendar' },
          { icon: '\u{1F310}', label: 'Web' },
          { icon: '\u{1F4C1}', label: 'Files' },
        ].map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
            className="flex items-center gap-2 glass rounded-lg px-3 py-1.5"
          >
            <span className="text-base">{tool.icon}</span>
            <span className="text-xs text-white/50">{tool.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
