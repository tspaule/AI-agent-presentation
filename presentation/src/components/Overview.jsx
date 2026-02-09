import { motion } from 'framer-motion'
import { slides, sections } from '../data/slides'
import { useTheme } from '../hooks/useTheme'

export default function Overview({ currentSlide, onSelectSlide }) {
  const { colors } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 backdrop-blur-xl overflow-auto py-12 px-8"
      style={{ background: `${colors.bg}ee` }}
    >
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-2xl font-serif mb-2" style={{ fontFamily: 'Georgia, serif', color: colors.text }}>
          Slide Overview
        </h2>
        <p style={{ color: colors.textTertiary }} className="text-sm">
          Click a slide to navigate. Press <kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: colors.glassBg, color: colors.textSecondary, border: `1px solid ${colors.border}` }}>O</kbd> or <kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: colors.glassBg, color: colors.textSecondary, border: `1px solid ${colors.border}` }}>Esc</kbd> to close.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {sections.map((section, si) => {
          const nextStart = si < sections.length - 1 ? sections[si + 1].startSlide : slides.length
          const sectionSlides = slides.slice(section.startSlide, nextStart)

          return (
            <div key={si} className="mb-10">
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: colors.brand }}>
                {section.title}
              </h3>
              <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {sectionSlides.map((SlideComponent, i) => {
                  const slideIndex = section.startSlide + i
                  const isActive = slideIndex === currentSlide
                  return (
                    <motion.button
                      key={slideIndex}
                      onClick={() => onSelectSlide(slideIndex)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative aspect-video rounded-lg overflow-hidden border-2 transition-colors"
                      style={{
                        borderColor: isActive ? colors.brand : colors.border,
                        boxShadow: isActive ? `0 4px 20px ${colors.brand}33` : 'none',
                      }}
                    >
                      <div
                        className="absolute inset-0 transform scale-[0.15] origin-top-left"
                        style={{ width: '666%', height: '666%', background: colors.bg }}
                      >
                        <SlideComponent />
                      </div>
                      <div
                        className="absolute inset-0 flex items-end justify-start p-2"
                        style={{ background: isActive ? `${colors.brand}15` : `${colors.bg}66` }}
                      >
                        <span className="text-xs font-mono" style={{ color: isActive ? colors.brand : colors.textTertiary }}>
                          {String(slideIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
