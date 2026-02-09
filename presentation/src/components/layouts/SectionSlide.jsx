import { motion } from 'framer-motion'

export default function SectionSlide({ sectionNumber, title, subtitle, icon }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Large background number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[30rem] font-bold text-white/[0.02] font-serif select-none leading-none">
          {sectionNumber}
        </span>
      </div>

      {/* Centered glow */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-full px-5 py-2 mb-8"
      >
        <span className="text-sm text-brand font-semibold tracking-widest uppercase">
          Section {sectionNumber}
        </span>
      </motion.div>

      {/* Icon */}
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="text-6xl mb-8"
        >
          {icon}
        </motion.div>
      )}

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-serif text-6xl font-normal text-white tracking-tight text-center leading-tight mb-4"
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl text-white/40 text-center max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 w-24 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent"
      />
    </div>
  )
}
