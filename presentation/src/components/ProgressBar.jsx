import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export default function ProgressBar({ progress, currentSlide, totalSlides, sections, onSectionClick }) {
  const { colors } = useTheme()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Section markers */}
      <div className="relative h-3">
        {sections.map((section, i) => {
          const position = (section.startSlide / totalSlides) * 100
          return (
            <button
              key={i}
              onClick={() => onSectionClick(section.startSlide)}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 group"
              style={{ left: `${position}%` }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{ background: colors.textMuted }}
              />
              <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-xs px-2.5 py-1 rounded-md"
                style={{ background: colors.bgElevated, color: colors.textSecondary, border: `1px solid ${colors.border}` }}
              >
                {section.title}
              </div>
            </button>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="h-1" style={{ background: colors.border }}>
        <motion.div
          className="h-full bg-gradient-to-r from-brand-dark via-brand to-brand-light"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter */}
      <div
        className="absolute bottom-4 right-5 text-xs font-mono"
        style={{ color: colors.textMuted }}
      >
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
  )
}
