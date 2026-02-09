import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '3%' : '-3%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-3%' : '3%',
    opacity: 0,
    scale: 0.98,
  }),
}

export default function SlideTransition({ children, slideKey, direction }) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: { duration: 0.3 },
          scale: { duration: 0.4 },
        }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
