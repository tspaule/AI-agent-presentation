import { useState, useEffect, useCallback } from 'react'

export function useSlideshow(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isOverview, setIsOverview] = useState(false)

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
      setIsOverview(false)
    }
  }, [currentSlide, totalSlides])

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide, totalSlides])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  const toggleOverview = useCallback(() => {
    setIsOverview(prev => !prev)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOverview && e.key === 'Escape') {
        setIsOverview(false)
        return
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          if (!isOverview) nextSlide()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          if (!isOverview) prevSlide()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
        case 'o':
        case 'O':
          e.preventDefault()
          toggleOverview()
          break
        case 'Escape':
          e.preventDefault()
          if (isOverview) setIsOverview(false)
          break
        default:
          // Handle number keys for quick jump (1-9)
          if (e.key >= '1' && e.key <= '9') {
            const section = parseInt(e.key) - 1
            goToSlide(section)
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide, toggleOverview, isOverview, totalSlides])

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (isOverview) return
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX < 0) nextSlide()
        else prevSlide()
      }
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextSlide, prevSlide, isOverview])

  return {
    currentSlide,
    direction,
    isOverview,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleOverview,
    progress: ((currentSlide + 1) / totalSlides) * 100
  }
}
