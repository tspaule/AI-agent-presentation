import { motion } from 'framer-motion'

export default function TitleSlide({ title, subtitle, presenter, date, brandLine }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Radial glows */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(236,72,153,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dark via-brand to-brand-light" />

      {/* Logo mark */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center mb-10 relative"
        style={{ boxShadow: '0 20px 60px rgba(236, 72, 153, 0.3)' }}
      >
        <div className="w-8 h-8 border-[3px] border-white rounded-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-serif text-7xl font-normal text-white tracking-tight text-center leading-tight mb-4"
      >
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {i === title.split(' ').length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              word + ' '
            )}
          </span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl text-white/50 tracking-widest uppercase font-semibold mb-12"
      >
        {subtitle}
      </motion.p>

      {/* Presenter pill */}
      {presenter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="glass rounded-full px-7 py-3 flex items-center gap-3"
        >
          <span className="text-sm text-white/40">Presented by</span>
          <span className="text-base text-white font-semibold">{presenter}</span>
        </motion.div>
      )}

      {/* Date */}
      {date && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-4 text-sm text-white/25 tracking-wider"
        >
          {date}
        </motion.p>
      )}

      {/* Brand line */}
      {brandLine && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-8 text-xs text-white/20 tracking-widest uppercase"
        >
          {brandLine}
        </motion.p>
      )}
    </div>
  )
}
