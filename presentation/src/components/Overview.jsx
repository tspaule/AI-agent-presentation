import { motion } from 'framer-motion'
import { slides, sections } from '../data/slides'

export default function Overview({ currentSlide, onSelectSlide }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-lg overflow-auto py-12 px-8"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-2xl font-serif text-white mb-2">Slide Overview</h2>
        <p className="text-white/30 text-sm">Click a slide to navigate. Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-xs">O</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-xs">Esc</kbd> to close.</p>
      </div>

      {/* Slide grid */}
      <div className="max-w-7xl mx-auto">
        {sections.map((section, si) => {
          const nextStart = si < sections.length - 1 ? sections[si + 1].startSlide : slides.length
          const sectionSlides = slides.slice(section.startSlide, nextStart)

          return (
            <div key={si} className="mb-10">
              <h3 className="text-sm text-brand font-semibold tracking-widest uppercase mb-4">
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
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                        isActive ? 'border-brand shadow-lg shadow-brand/20' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {/* Mini slide preview */}
                      <div className="absolute inset-0 bg-surface-elevated transform scale-[0.15] origin-top-left" style={{ width: '666%', height: '666%' }}>
                        <SlideComponent />
                      </div>

                      {/* Overlay with number */}
                      <div className={`absolute inset-0 bg-surface/40 flex items-end justify-start p-2 ${isActive ? 'bg-brand/10' : ''}`}>
                        <span className={`text-xs font-mono ${isActive ? 'text-brand' : 'text-white/40'}`}>
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
