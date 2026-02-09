import { AnimatePresence } from 'framer-motion'
import { slides, sections } from './data/slides'
import { useSlideshow } from './hooks/useSlideshow'
import SlideTransition from './components/SlideTransition'
import ProgressBar from './components/ProgressBar'
import ParticleField from './components/ParticleField'
import Overview from './components/Overview'

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

  const SlideComponent = slides[currentSlide]

  return (
    <div className="w-full h-screen bg-surface relative overflow-hidden">
      {/* Particle background */}
      <ParticleField />

      {/* Main slide area */}
      <div className="relative w-full h-full z-10">
        <SlideTransition slideKey={currentSlide} direction={direction}>
          <div className="w-full h-full">
            <SlideComponent />
          </div>
        </SlideTransition>
      </div>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity group"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-white/60 group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity group"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-white/60 group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Progress bar */}
      <ProgressBar
        progress={progress}
        currentSlide={currentSlide}
        totalSlides={slides.length}
        sections={sections}
        onSectionClick={goToSlide}
      />

      {/* Overview button */}
      <button
        onClick={toggleOverview}
        className="fixed top-4 right-4 z-30 w-9 h-9 rounded-lg glass flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity group"
        aria-label="Toggle overview"
        title="Overview (O)"
      >
        <svg className="w-4 h-4 text-white/60 group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>

      {/* Keyboard hints */}
      <div className="fixed bottom-4 left-4 z-20 opacity-0 hover:opacity-100 transition-opacity">
        <div className="glass rounded-lg px-3 py-2 flex items-center gap-4 text-xs text-white/30">
          <span><kbd className="px-1 py-0.5 rounded bg-white/10">{'\u2190'}</kbd> <kbd className="px-1 py-0.5 rounded bg-white/10">{'\u2192'}</kbd> Navigate</span>
          <span><kbd className="px-1 py-0.5 rounded bg-white/10">O</kbd> Overview</span>
          <span><kbd className="px-1 py-0.5 rounded bg-white/10">Space</kbd> Next</span>
        </div>
      </div>

      {/* Overview mode */}
      <AnimatePresence>
        {isOverview && (
          <Overview
            currentSlide={currentSlide}
            onSelectSlide={goToSlide}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
