import { motion } from 'framer-motion'

export default function ProgressBar({ progress, currentSlide, totalSlides, sections, onSectionClick }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Section markers */}
      <div className="relative h-1">
        {sections.map((section, i) => {
          const position = (section.startSlide / totalSlides) * 100
          return (
            <button
              key={i}
              onClick={() => onSectionClick(section.startSlide)}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 group"
              style={{ left: `${position}%` }}
            >
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand transition-colors" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white/60 bg-surface-elevated px-2 py-1 rounded">
                {section.title}
              </div>
            </button>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-dark via-brand to-brand-light"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-3 right-4 text-xs text-white/30 font-mono">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
  )
}
