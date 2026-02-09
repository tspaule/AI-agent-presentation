import { motion } from 'framer-motion'

export default function DemoSlide({ title, subtitle, steps, stat, statLabel, imageSrc, message }) {
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(236,72,153,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="flex flex-col justify-center px-20 py-16 w-full max-w-5xl mx-auto">
        {/* Demo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex self-start"
        >
          <span className="bg-brand/20 text-brand text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-brand/30">
            Live Demo
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-5xl font-normal text-white tracking-tight leading-tight mb-2"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-white/40 mb-10"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="flex gap-12 items-start">
          {/* Steps */}
          {steps && (
            <div className="flex-1 space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-white/70 text-lg leading-relaxed">{step}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stat or Image */}
          {(stat || imageSrc) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex-shrink-0"
            >
              {stat && (
                <div className="glass rounded-2xl p-8 text-center glow-brand">
                  <div className="text-6xl font-bold gradient-text mb-2">{stat}</div>
                  <div className="text-white/40 text-sm">{statLabel}</div>
                </div>
              )}
              {imageSrc && (
                <img src={imageSrc} alt={title} className="rounded-2xl max-w-sm shadow-2xl" />
              )}
            </motion.div>
          )}
        </div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <span className="text-lg text-brand font-serif italic">&ldquo;{message}&rdquo;</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
