import { motion } from 'framer-motion'

export default function ComparisonSlide({ title, subtitle, left, right, message }) {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="flex flex-col justify-center px-20 py-16 w-full max-w-6xl mx-auto h-full">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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

        <div className="grid grid-cols-2 gap-8 flex-1 max-h-[55vh]">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              {left.icon && <span className="text-3xl">{left.icon}</span>}
              <h3 className="text-2xl font-bold text-white">{left.title}</h3>
            </div>
            <div className="space-y-4 flex-1">
              {left.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-white/30 mt-0.5">{item.icon || '>'}</span>
                  <span className="text-white/60 text-base leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl p-8 flex flex-col border border-brand/20"
            style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(219,39,119,0.04))' }}
          >
            <div className="flex items-center gap-3 mb-6">
              {right.icon && <span className="text-3xl">{right.icon}</span>}
              <h3 className="text-2xl font-bold text-white">{right.title}</h3>
            </div>
            <div className="space-y-4 flex-1">
              {right.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-brand mt-0.5">{item.icon || '>'}</span>
                  <span className="text-white/80 text-base leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <span className="text-xl text-brand font-serif italic">&ldquo;{message}&rdquo;</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
