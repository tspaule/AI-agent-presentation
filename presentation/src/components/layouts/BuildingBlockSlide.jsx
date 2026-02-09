import { motion } from 'framer-motion'

export default function BuildingBlockSlide({ number, icon, title, subtitle, keyInsight, example, details }) {
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      {/* Large background number */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20rem] font-bold text-white/[0.02] font-serif leading-none">
          {number}
        </span>
      </div>

      {/* Left accent with number */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand/50 to-transparent" />

      <div className="flex flex-col justify-center px-20 py-16 w-full max-w-5xl mx-auto">
        {/* Block label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="text-sm text-brand font-semibold tracking-widest uppercase">
            Building Block {number}
          </span>
        </motion.div>

        {/* Title row */}
        <div className="flex items-center gap-5 mb-3">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="text-5xl"
          >
            {icon}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-serif text-5xl font-normal text-white tracking-tight"
          >
            {title}
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-xl text-white/40 mb-8 ml-1"
        >
          {subtitle}
        </motion.p>

        {/* Key insight box */}
        {keyInsight && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="glass rounded-xl px-6 py-4 mb-6 border-l-2 border-brand"
          >
            <span className="text-xs text-brand font-semibold tracking-widest uppercase block mb-1">Key Insight</span>
            <span className="text-white/80 text-lg">{keyInsight}</span>
          </motion.div>
        )}

        {/* Details */}
        {details && (
          <div className="space-y-3 mb-6">
            {details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span className="text-white/60 text-lg leading-relaxed">{detail}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Example */}
        {example && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="rounded-xl bg-white/[0.03] px-6 py-4 border border-white/5"
          >
            <span className="text-xs text-white/30 font-semibold tracking-widest uppercase block mb-1">Example</span>
            <span className="text-white/50 text-base italic">&ldquo;{example}&rdquo;</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
