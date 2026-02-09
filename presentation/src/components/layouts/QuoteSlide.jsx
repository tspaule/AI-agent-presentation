import { motion } from 'framer-motion'

export default function QuoteSlide({ quote, attribution, context, large }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Centered radial glow */}
      <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-16 text-center">
        {/* Opening quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="gradient-text font-serif text-9xl leading-none mb-4 select-none"
        >
          &ldquo;
        </motion.div>

        {/* Quote text */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`font-serif ${large ? 'text-5xl' : 'text-3xl'} text-white leading-relaxed tracking-tight mb-8`}
        >
          {quote}
        </motion.blockquote>

        {/* Attribution */}
        {attribution && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-brand font-semibold text-lg"
          >
            &mdash; {attribution}
          </motion.p>
        )}

        {/* Context */}
        {context && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-white/30 text-sm mt-2"
          >
            {context}
          </motion.p>
        )}
      </div>
    </div>
  )
}
