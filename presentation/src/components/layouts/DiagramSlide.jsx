import { motion } from 'framer-motion'

export default function DiagramSlide({ title, subtitle, children, message }) {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />

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
          className="font-serif text-5xl font-normal text-white tracking-tight leading-tight mb-10"
        >
          {title}
        </motion.h2>

        {/* Custom diagram content */}
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-center text-xl text-brand font-serif italic mt-6"
          >
            &ldquo;{message}&rdquo;
          </motion.p>
        )}
      </div>
    </div>
  )
}
