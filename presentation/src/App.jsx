import { AnimatePresence } from 'framer-motion'
import { slides, sections } from './data/slides'
import { useSlideshow } from './hooks/useSlideshow'
import { useTheme } from './hooks/useTheme'
import SlideTransition from './components/SlideTransition'
import ProgressBar from './components/ProgressBar'
import ParticleField from './components/ParticleField'
import Overview from './components/Overview'

function ThemeToggle() {
  const { isDark, toggleTheme, colors } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-14 z-30 w-9 h-9 rounded-lg flex items-center justify-center opacity-40 hover:opacity-100 transition-all group"
      style={{ background: colors.glassBg, border: `1px solid ${colors.glassBorder}` }}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg className="w-4 h-4 group-hover:text-brand transition-colors" style={{ color: colors.textSecondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-4 h-4 group-hover:text-brand transition-colors" style={{ color: colors.textSecondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}

export default function App() {
  const {
    currentSlide,
    direction,
    isOverview,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleOverview,
    progress,
  } = useSlideshow(slides.length)

  const { colors } = useTheme()
  const SlideComponent = slides[currentSlide]

  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ background: colors.bg }}>
      <ParticleField />

      <div className="relative w-full h-full z-10">
        <SlideTransition slideKey={currentSlide} direction={direction}>
          <div className="w-full h-full">
            <SlideComponent />
          </div>
        </SlideTransition>
      </div>

      {/* Nav arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity group"
          style={{ background: colors.glassBg, border: `1px solid ${colors.glassBorder}` }}
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 group-hover:text-brand transition-colors" style={{ color: colors.textSecondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity group"
          style={{ background: colors.glassBg, border: `1px solid ${colors.glassBorder}` }}
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 group-hover:text-brand transition-colors" style={{ color: colors.textSecondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <ProgressBar progress={progress} currentSlide={currentSlide} totalSlides={slides.length} sections={sections} onSectionClick={goToSlide} />
      <ThemeToggle />

      <button
        onClick={toggleOverview}
        className="fixed top-4 right-4 z-30 w-9 h-9 rounded-lg flex items-center justify-center opacity-40 hover:opacity-100 transition-all group"
        style={{ background: colors.glassBg, border: `1px solid ${colors.glassBorder}` }}
        aria-label="Toggle overview"
        title="Overview (O)"
      >
        <svg className="w-4 h-4 group-hover:text-brand transition-colors" style={{ color: colors.textSecondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>

      <div className="fixed bottom-4 left-4 z-20 opacity-0 hover:opacity-100 transition-opacity">
        <div className="rounded-lg px-3 py-2 flex items-center gap-4 text-xs" style={{ background: colors.glassBg, border: `1px solid ${colors.glassBorder}`, color: colors.textTertiary }}>
          <span><kbd className="px-1 py-0.5 rounded" style={{ background: colors.glassBg }}>{'\u2190'}</kbd> <kbd className="px-1 py-0.5 rounded" style={{ background: colors.glassBg }}>{'\u2192'}</kbd> Navigate</span>
          <span><kbd className="px-1 py-0.5 rounded" style={{ background: colors.glassBg }}>O</kbd> Overview</span>
        </div>
      </div>

      <AnimatePresence>
        {isOverview && <Overview currentSlide={currentSlide} onSelectSlide={goToSlide} />}
      </AnimatePresence>
    </div>
  )
}
